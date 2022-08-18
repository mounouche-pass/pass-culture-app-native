import { AppiumDriver } from '@bam.tech/appium-helper'
import { TestCase, PerformanceTester } from '@perf-profiler/e2e'

const BUILD_VERSION = '10200003'
const ENV = 'staging' // For prod, use the value 'webapp'
const LOGGED_IN = false

const bundleId = `app.passculture.${ENV}`
const appActivity = 'com.passculture.MainActivity'

const getTestCase = async () => {
  const driver = await AppiumDriver.create({
    appPackage: bundleId,
    appActivity: appActivity,
  })

  const startAppTestCase: TestCase = {
    beforeTest: async () => {
      driver.stopApp()
      await driver.wait(3000)
    },
    run: async () => {
      driver.startApp()

      // Works with Appium/UIAutomator only if we disable animations
      await driver.findElementByText('faire en duo')
      await driver.clickElementById('Search tab')
      await driver.findElementByText('Explore')
    },
    duration: 10000,
  }

  return startAppTestCase
}

const main = async () => {
  const testCase = await getTestCase()

  const tester = new PerformanceTester(bundleId)

  await tester.iterate(testCase, 10)
  tester.writeResults({
    path: `./results/results_${ENV}_${BUILD_VERSION}_${LOGGED_IN ? 'co' : 'deco'}.json`,
  })
}

main()

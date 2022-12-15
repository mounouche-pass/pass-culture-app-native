import { timeout } from '../helpers/utils/time'
import NativeAlert from '../helpers/NativeAlert'

describe('Test', () => {
  it('should use testID=NOBUG to click', async () => {
    await timeout(20000)
    await $('~NOBUG').waitForDisplayed()
    await timeout(5000)
    await $('~NOBUG').click()
    await NativeAlert.waitForIsShown(true)
    await timeout(5000)
  })
})

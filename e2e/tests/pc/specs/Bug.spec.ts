import { timeout } from '../helpers/utils/time'
import NativeAlert from '../helpers/NativeAlert'

describe('TestBug', () => {
  it('should use accessibilityLabel=BUG to click', async () => {
    await timeout(20000)
    await $('~BUG').waitForDisplayed()
    await timeout(5000)
    await $('~BUG').click()
    await NativeAlert.waitForIsShown(true)
    await timeout(5000)
  })
})

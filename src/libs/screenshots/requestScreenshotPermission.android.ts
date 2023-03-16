import { PermissionsAndroid } from 'react-native'

export const requestScreenshotPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Get Read External Storage Access',
        message: 'get read external storage access for detecting screenshots',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    )

    console.log({ granted })
  } catch (e) {
    console.log(e)
  }
}

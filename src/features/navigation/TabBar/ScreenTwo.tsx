import { useNavigation, useNavigationState } from '@react-navigation/native'
import React, { FunctionComponent } from 'react'
import { View } from 'react-native'

import { UseNavigationType } from 'features/navigation/RootNavigator/types'
import { ButtonPrimary } from 'ui/components/buttons/ButtonPrimary'
import { Typo } from 'ui/theme'

export const ScreenTwo: FunctionComponent = () => {
  const { reset } = useNavigation<UseNavigationType>()
  const state = useNavigationState((state) => state)
  console.log(JSON.stringify(state.index, undefined, 4))

  return (
    <View style={{ paddingTop: 40, flex: 1, backgroundColor: 'pink' }}>
      <Typo.Body>SCREEN TWO</Typo.Body>
      <ButtonPrimary
        wording="Go to TEST"
        onPress={() =>
          reset({
            index: 1,
            routes: [{ name: 'Test' }],
          })
        }
      />
    </View>
  )
}

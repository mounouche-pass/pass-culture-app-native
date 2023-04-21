import { useNavigation, useNavigationState } from '@react-navigation/native'
import React, { FunctionComponent } from 'react'
import { View } from 'react-native'

import { UseNavigationType } from 'features/navigation/RootNavigator/types'
import { ButtonPrimary } from 'ui/components/buttons/ButtonPrimary'
import { Typo } from 'ui/theme'

export const Test: FunctionComponent = () => {
  const { navigate } = useNavigation<UseNavigationType>()

  const state = useNavigationState((state) => state)
  console.log(JSON.stringify(state.index, undefined, 4))

  return (
    <View style={{ paddingTop: 40, flex: 1, backgroundColor: 'pink' }}>
      <Typo.Body>Coucou</Typo.Body>
      <ButtonPrimary wording="Go to ONE" onPress={() => navigate('ScreenOne')} />
      {/* <Spacer.Column numberOfSpaces={4} />
      <ButtonPrimary wording="Go to screen two" /> */}
    </View>
  )
}

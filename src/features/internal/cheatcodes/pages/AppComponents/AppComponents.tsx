import React, { FunctionComponent, useRef } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import styled from 'styled-components/native'

import { createAnimatableComponent, AnimatedText, AnimatedView } from 'libs/react-native-animatable'
import { theme } from 'theme'
import { AccordionItem } from 'ui/components/AccordionItem'
import { PageHeaderSecondary } from 'ui/components/headers/PageHeaderSecondary'
import { getSpacing, Spacer, Typo } from 'ui/theme'

export const AppComponents: FunctionComponent = () => {
  // To have a correct ref typing, use <AnimatedView & View> instead of <AnimatedView> (https://github.com/oblador/react-native-animatable/issues/313#issuecomment-626795434)
  const viewRef = useRef<AnimatedView & View>(null)

  const toto = {
    0: {
      backgroundColor: theme.colors.attention,
      scale: 0.5,
      left: 0,
    },
    0.2: {
      backgroundColor: theme.colors.accent,
      scale: 1,
      left: 200,
    },
    1: {
      backgroundColor: theme.colors.greenValid,
      scale: 0.5,
      left: 50,
    },
  }

  const bounce = async () => {
    if (!viewRef.current) return

    viewRef.current.tada?.()
  }
  return (
    <React.Fragment>
      <PageHeaderSecondary title="App components" />
      <StyledScrollView>
        <Divider />
        <AccordionItem title="Animatable - Declarative 101">
          <AnimatedText animation="slideInLeft" duration={1500} delay={500}>
            Slide in left, with a 500ms delay and 1500ms duration
          </AnimatedText>
          <Spacer.Column numberOfSpaces={4} />
        </AccordionItem>
        <AccordionItem title="Animatable - Declarative 102" defaultOpen>
          <AnimatedView
            style={styles.box}
            animation={toto}
            duration={2000}
            iterationCount={3}
            iterationDelay={500}
          />
          <Spacer.Column numberOfSpaces={4} />
        </AccordionItem>
        <AccordionItem title="Test d'animation - Imperative" defaultOpen>
          <AnimatedView
            onLayout={bounce}
            ref={viewRef}
            style={styles.box}
            iterationCount="infinite"
            direction="alternate"
          />
          <Spacer.Column numberOfSpaces={4} />
        </AccordionItem>
        <AccordionItem title="Test d'animation - Styled component" defaultOpen>
          <StyledAnimatedText animation="slideInLeft" duration={1500} delay={500}>
            Slide in left, with a 500ms delay and 1500ms duration
          </StyledAnimatedText>
          <Spacer.Column numberOfSpaces={4} />
        </AccordionItem>
        <AccordionItem title="Test d'animation - Animation existing component" defaultOpen>
          <AnimatedBodyText animation="slideInLeft" duration={1500} delay={500}>
            Slide in left, with a 500ms delay and 1500ms duration
          </AnimatedBodyText>
          <Spacer.Column numberOfSpaces={4} />
        </AccordionItem>
        <Spacer.Column numberOfSpaces={5} />
        <Spacer.BottomScreen />
      </StyledScrollView>
    </React.Fragment>
  )
}
const styles = StyleSheet.create({
  box: {
    top: 0,
    left: 0,
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 8,
    backgroundColor: theme.colors.accent,
  },
})

const StyledScrollView = styled(ScrollView)(({ theme }) => ({
  backgroundColor: theme.colors.white,
}))

const Divider = styled.View(({ theme }) => ({
  height: getSpacing(2),
  backgroundColor: theme.colors.greyLight,
}))

const StyledAnimatedText = styled(AnimatedText)({
  fontSize: 20,
})

const AnimatedBodyText = createAnimatableComponent(Typo.Body)

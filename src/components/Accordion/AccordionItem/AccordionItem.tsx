import React, { useCallback, useEffect } from 'react'
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import {
  AccordionItem as AccordionItemStyled,
  AnimatedContent,
  Content,
} from './AccordionItem.styles'
import { Button } from '../../Button/Button'
import { CardProps } from '../Accordion'
import { CardContent } from '@/components/CardView/CardContent/CardContent'
import { CardHeader } from '@/components/CardView/CardHeader/CardHeader'

interface AccordionItemProps {
  card: CardProps
  isSelected: boolean
  expanded: string | null
  setExpanded: React.Dispatch<React.SetStateAction<string | null>>
  onSelectCard?: () => void
}

export function AccordionItem({
  card,
  isSelected,
  expanded,
  setExpanded,
  onSelectCard,
}: AccordionItemProps) {
  const listRef = useAnimatedRef<Animated.View>()
  const heightValue = useSharedValue(0)
  const itemOpacityValue = useSharedValue(0)
  const paddingValue = useSharedValue(0)

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
    opacity: itemOpacityValue.value,
  }))

  function onClose() {
    itemOpacityValue.value = withTiming(0)
    paddingValue.value = withSpring(0)
    heightValue.value = withTiming(0)
  }

  useEffect(() => {
    if (expanded !== card.id) {
      onClose()
    }
  }, [expanded])

  const handlePress = useCallback(() => {
    if (isSelected) {
      return
    }

    if (heightValue.value === 0) {
      runOnUI(() => {
        'worklet'
        paddingValue.value = withSpring(100)
        heightValue.value = withTiming(measure(listRef)?.height * 1.2)
        itemOpacityValue.value = withTiming(1)
      })()
    } else {
      onClose()
    }
    setExpanded(card.id || null)
  }, [])

  return (
    <AccordionItemStyled style={{ marginTop: -20 }}>
      <CardHeader
        card={card}
        onPress={handlePress}
      />
      <Content style={heightAnimationStyle}>
        <AnimatedContent
          style={{
            position: 'absolute',
            width: '100%',
            top: 0,
          }}
          ref={listRef}
        >
          <CardContent
            card={card}
            onPress={handlePress}
          />

          {!isSelected && (
            <Button
              title="pagar com este cartão"
              onPress={() => {
                onSelectCard?.()
              }}
              style={{
                marginTop: 100,
                marginBottom: 100,
              }}
            />
          )}
        </AnimatedContent>
      </Content>
    </AccordionItemStyled>
  )
}

import { useWindowDimensions } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {
  AccordionItem as AccordionItemStyled,
  AnimatedContent,
  Content,
} from './item.styles'
import { Button } from '../../Button/Button'
import { CardContent } from '@/components/CardView/CardContent/CardContent'
import { CardHeader } from '@/components/CardView/CardHeader/CardHeader'
import { CardProps } from '@/components/CardView/CardView'

interface ItemProps {
  card: CardProps
  expanded: string | undefined
  setExpanded: React.Dispatch<React.SetStateAction<string | undefined>>
  onSelectCard?: () => void
}

export function Item({ card, expanded, setExpanded, onSelectCard }: ItemProps) {
  const windowHeight = useWindowDimensions().height

  const listRef = useAnimatedRef<Animated.View>()
  const heightValue = useSharedValue(0)
  const itemOpacityValue = useSharedValue(0)

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
    opacity: itemOpacityValue.value,
  }))

  const onClose = useCallback(() => {
    itemOpacityValue.value = withTiming(0)
    heightValue.value = withTiming(0)
  }, [itemOpacityValue, heightValue])

  useEffect(() => {
    if (expanded !== card.id) {
      onClose()
    }
  }, [expanded])

  const handlePress = useCallback(() => {
    if (heightValue.value === 0) {
      runOnUI(() => {
        heightValue.value = withTiming(
          measure(listRef)?.height + windowHeight - 685,
        )
        itemOpacityValue.value = withTiming(1)
      })()
    } else {
      onClose()
    }
    setExpanded(value => (value === card.id ? undefined : card.id))
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
        </AnimatedContent>
      </Content>
    </AccordionItemStyled>
  )
}

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
  Content,
  Header,
  Title,
} from './Accordion.styles'
import { Button } from '../Button/Button'
import { CardProps } from './Accordion'

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

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }))

  useEffect(() => {
    if (expanded !== card.id) {
      heightValue.value = withTiming(0)
    }
  }, [expanded])

  const handlePress = useCallback(() => {
    if (isSelected) {
      return
    }

    if (heightValue.value === 0) {
      runOnUI(() => {
        'worklet'
        heightValue.value = withTiming(measure(listRef)?.height + 100)
      })()
    } else {
      heightValue.value = withTiming(0)
    }
    setExpanded(card.id)
  }, [])

  return (
    <AccordionItemStyled style={{ marginTop: -20 }}>
      <Header
        color={card.color}
        key={card.id}
        onPress={() => {
          handlePress()
        }}
      >
        <Title textColor={card.textColor}>{card.name}</Title>
      </Header>
      <Content style={heightAnimationStyle}>
        <Animated.View
          style={{
            position: 'absolute',
            width: '100%',
            top: 0,
          }}
          ref={listRef}
        >
          {!isSelected && (
            <Button
              title="pagar com este cartão"
              onPress={() => {
                onSelectCard?.()
              }}
            />
          )}
        </Animated.View>
      </Content>
    </AccordionItemStyled>
  )
}

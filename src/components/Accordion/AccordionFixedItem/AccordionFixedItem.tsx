import { CardProps, CardView } from '@/components/CardView/CardView'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Title } from './AccordionFixedItem.styles'
import { useEffect } from 'react'

interface AccordionFixedItemProps {
  card: CardProps
  expanded: string | undefined
}

export function AccordionFixedItem({
  card,
  expanded,
}: AccordionFixedItemProps) {
  const opacityValue = useSharedValue(1)

  const opacityAnimationStyle = useAnimatedStyle(() => ({
    opacity: opacityValue.value,
  }))

  useEffect(() => {
    if (expanded !== undefined) {
      opacityValue.value = withTiming(0.75)
    } else {
      opacityValue.value = withTiming(1)
    }
  }, [expanded])

  return (
    <Animated.View style={opacityAnimationStyle}>
      <CardView
        style={{ marginTop: -10 }}
        card={card}
      />
      <Title>usar este cartão</Title>
    </Animated.View>
  )
}

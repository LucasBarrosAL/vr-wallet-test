import { AccordionItem } from './AccordionItem/AccordionItem'
import { useCallback, useEffect, useState } from 'react'
import { Container, Title } from './Accordion.styles'
import { CardView } from '../CardView/CardView'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export interface CardProps {
  color: string
  textColor: string
  title: string

  id?: string
  number: string
  ccv?: string
  name: string
  expirationDate: string
}

interface AccordionProps {
  data: CardProps[]
}

export function Accordion({ data }: AccordionProps) {
  const [expanded, setExpanded] = useState<string | undefined>()
  const [cardSelected, setCardSelected] = useState(data[data.length - 1])
  const [list, setList] = useState(
    data.filter(item => item.id !== data[data.length - 1].id),
  )

  const opacityValue = useSharedValue(1)

  const opacityAnimationStyle = useAnimatedStyle(() => ({
    opacity: opacityValue.value,
  }))

  const onCardSelect = useCallback((card: CardProps) => {
    setCardSelected(card)
    setList(data.filter(item => item.id !== card.id))
  }, [])

  useEffect(() => {
    if (expanded !== undefined) {
      opacityValue.value = withTiming(0.75)
    } else {
      opacityValue.value = withTiming(1)
    }
  }, [expanded])

  return (
    <Container>
      {list.map(card => {
        return (
          <AccordionItem
            key={card.id}
            card={card}
            isSelected={false}
            expanded={expanded}
            setExpanded={setExpanded}
            onSelectCard={() => {
              onCardSelect(card)
              setExpanded(undefined)
            }}
          />
        )
      })}
      <Animated.View style={opacityAnimationStyle}>
        <CardView
          style={{ marginTop: -10 }}
          card={cardSelected}
        />
        <Title>usar este cartão</Title>
      </Animated.View>
    </Container>
  )
}

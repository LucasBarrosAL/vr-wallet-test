import { View } from 'react-native'
import { AccordionItem } from './AccordionItem'
import { useCallback, useState } from 'react'
import { Title } from './Accordion.styles'

export interface CardProps {
  color: string
  textColor: string
  title: string

  id: string
  number: string
  ccv: string
  name: string
  expirationDate: string
}

interface AccordionProps {
  data: CardProps[]
}

export function Accordion({ data }: AccordionProps) {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [cardSelected, setCardSelected] = useState(data[data.length - 1])
  const [list, setList] = useState(
    data.filter(item => item.id !== data[data.length - 1].id),
  )

  const onCardSelect = useCallback((card: CardProps) => {
    setCardSelected(card)
    setList(data.filter(item => item.id !== card.id))
  }, [])

  return (
    <View>
      {list.map(card => {
        return (
          <AccordionItem
            key={card.id}
            card={card}
            isSelected={false}
            expanded={expanded}
            setExpanded={setExpanded}
            onSelectCard={() => onCardSelect(card)}
          />
        )
      })}
      <AccordionItem
        card={cardSelected}
        isSelected={true}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      <Title>usar este cartão</Title>
    </View>
  )
}

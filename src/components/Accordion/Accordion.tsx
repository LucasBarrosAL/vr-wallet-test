import { AccordionItem } from './AccordionItem/AccordionItem'
import { useCallback, useState } from 'react'
import { Container, Title } from './Accordion.styles'
import { CardView } from '../CardView/CardView'

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
    <Container>
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
      <CardView
        style={{ marginTop: -10 }}
        card={cardSelected}
      />
      <Title>usar este cartão</Title>
    </Container>
  )
}

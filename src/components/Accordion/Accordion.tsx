import { AccordionItem } from './AccordionItem/AccordionItem'
import { useCallback, useState } from 'react'
import { Container } from './Accordion.styles'
import { AccordionFixedItem } from './AccordionFixedItem/AccordionFixedItem'
import { CardProps } from '../CardView/CardView'

interface AccordionProps {
  data: CardProps[]
}

export function Accordion({ data }: AccordionProps) {
  const [expanded, setExpanded] = useState<string | undefined>()
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
            expanded={expanded}
            setExpanded={setExpanded}
            onSelectCard={() => {
              onCardSelect(card)
              setExpanded(undefined)
            }}
          />
        )
      })}
      <AccordionFixedItem
        card={cardSelected}
        expanded={expanded}
      />
    </Container>
  )
}

import { useState } from 'react'
import {
  AccordionItem,
  Container,
  Content,
  Header,
  Title,
} from './Accordion.styles'

interface AccordionProps {
  data: {
    color: string
    textColor: string
    title: string

    id: string
    number: string
    ccv: string
    name: string
    expirationDate: string
  }[]
}

export function Accordion({ data }: AccordionProps) {
  const [expanded, setExpanded] = useState(undefined as number | undefined)

  return (
    <Container>
      {data.map((item, index) => {
        return (
          <AccordionItem
            key={item.id}
            style={{
              marginTop: index !== 0 && index !== expanded! + 1 ? -30 : 0,
            }}
          >
            <Header
              color={index % 2 ? 'orange' : 'grey'}
              key={item.id}
              onPress={() => {
                setExpanded(prevId => (prevId === index ? undefined : index))
              }}
            >
              <Title>Card Title</Title>
            </Header>
            {expanded === index && (
              <Content>
                <Title>Conteudo</Title>
              </Content>
            )}
          </AccordionItem>
        )
      })}
    </Container>
  )
}

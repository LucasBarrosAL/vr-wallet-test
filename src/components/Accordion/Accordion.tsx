import { useState } from 'react'
import { AccordionItem, Title, Content, Header } from './Accordion.styles'
import { Button } from '../Button/Button'

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
  const [expanded, setExpanded] = useState(data.length - 1)

  return data.map((item, index) => {
    return (
      <AccordionItem
        key={item.id}
        style={{
          marginTop: index !== 0 && index !== expanded! + 1 ? -45 : 0,
        }}
      >
        <Header
          color={item.color}
          key={item.id}
          onPress={() => {
            setExpanded(prevId => (prevId === index ? data.length - 1 : index))
          }}
        >
          <Title textColor={item.textColor}>{item.name}</Title>
        </Header>
        {expanded === index && expanded !== data.length - 1 ? (
          <Content>
            <Button
              title="pagar com este cartão"
              onPress={() => {
                data.push(data.splice(index, 1)[0])
                setExpanded(data.length - 1)
              }}
            />
          </Content>
        ) : (
          <Title>usar este cartão</Title>
        )}
      </AccordionItem>
    )
  })
}

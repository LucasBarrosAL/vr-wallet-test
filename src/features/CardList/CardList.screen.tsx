import { Accordion, Header } from '@/components'
import { Container, Content, Loading } from './CardList.styles'
import { Card } from '@/entities'

interface CardShowProps extends Card {
  color: string
  textColor: string
  title: string
}

interface CardListProps {
  data?: CardShowProps[]
  isLoading: boolean
}

export function CardListScreen({ data, isLoading }: CardListProps) {
  return (
    <Container>
      <Header>Meus cartões</Header>
      {data && data.length !== 0 && (
        <Content>{isLoading ? <Loading /> : <Accordion data={data} />}</Content>
      )}
    </Container>
  )
}

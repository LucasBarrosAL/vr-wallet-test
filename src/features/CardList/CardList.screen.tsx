import { CardView, Header } from '@/components'
import { Container, Content, Loading } from './CardList.styles'
import { Card } from '@/entities'

interface CardShowProps extends Card {
  color: string
  title: string
}

interface CardListProps {
  data: CardShowProps[] | undefined
  isLoading: boolean
}

export function CardListScreen({ data, isLoading }: CardListProps) {
  return (
    <Container>
      <Header>Meus cartões</Header>
      {isLoading ? (
        <Loading />
      ) : (
        <Content>
          {data?.map(item => (
            <CardView
              key={item.id}
              color={item.color}
              title={item.title}
              name={item.name}
              number={item.number}
              expirationDate={item.expirationDate}
            />
          ))}
        </Content>
      )}
    </Container>
  )
}

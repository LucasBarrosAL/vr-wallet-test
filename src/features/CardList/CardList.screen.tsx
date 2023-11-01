import { Accordion, Header } from '@/components'
import { Container, Content, Loading } from './CardList.styles'
import { Card } from '@/entities'
import { SafeAreaView, ScrollView } from 'react-native'

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
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            paddingTop: 20,
            flexGrow: 1,
            justifyContent: 'center',
          }}
          showsVerticalScrollIndicator={false}
        >
          {data && data.length !== 0 && (
            <Content>
              {isLoading ? <Loading /> : <Accordion data={data} />}
            </Content>
          )}
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}

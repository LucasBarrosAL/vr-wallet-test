import { cardsApi } from '@/api/cards.api'
import { CardListScreen } from './CardList.screen'

export function CardList() {
  const { data, isLoading } = cardsApi.useGetCardsQuery()

  return (
    <CardListScreen
      data={data?.map(item => ({
        color: 'black',
        title: 'Card',
        ...item,
      }))}
      isLoading={isLoading}
    />
  )
}

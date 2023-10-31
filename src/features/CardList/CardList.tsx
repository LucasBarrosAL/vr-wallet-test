import { cardsApi } from '@/api/cards.api'
import { CardListScreen } from './CardList.screen'
import theme from '@/theme'

const CARD_COLOR = [
  {
    title: 'Black Card',
    color: theme.colors.black,
    textColor: theme.colors.white,
  },
  {
    title: 'Green Card',
    color: theme.colors.light.green,
    textColor: theme.colors.black,
  },
]

export function CardList() {
  const { data, isLoading } = cardsApi.useGetCardsQuery()

  return (
    <CardListScreen
      data={data?.map((item, index) => ({
        color: CARD_COLOR[index % 2].color,
        textColor: CARD_COLOR[index % 2].textColor,
        title: CARD_COLOR[index % 2].title,
        ...item,
      }))}
      isLoading={isLoading}
    />
  )
}

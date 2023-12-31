import { useNavigation } from '@react-navigation/native'
import { cardsApi } from '@/api/cards.api'
import { FormScreen } from './Form'
import { SuccessScreen } from './Success'
import { Card } from '@/entities'
import { getHideCardNumber } from '@/utils'

export function AddCard() {
  const [createCard, { data, isSuccess }] = cardsApi.useCreateCardMutation()
  const navigation = useNavigation()

  function onAddCard(cardData: Omit<Card, 'id'>) {
    createCard(cardData)
      .unwrap()
      .catch(err => {
        console.error(err)
      })
  }

  function onFinish() {
    navigation.navigate('Home')
  }

  return isSuccess && data ? (
    <SuccessScreen
      onPressFinish={onFinish}
      card={{
        number: getHideCardNumber(data.number),
        name: data.name,
        expirationDate: data.expirationDate,
      }}
    />
  ) : (
    <FormScreen handleSubmit={onAddCard} />
  )
}

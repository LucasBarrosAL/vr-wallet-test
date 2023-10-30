import { cardsApi } from '@/api/cards.api'
import { AddCardScreen } from './AddCard.screen'
import { useEffect } from 'react'

export function AddCard() {
  const [createCard, { data, isSuccess }] = cardsApi.useCreateCardMutation()
  function onAddCard(cardData: { number: string; name: string; ccv: string }) {
    createCard(cardData)
  }

  useEffect(() => {
    if (isSuccess) {
      console.log(data)
    }
  }, [isSuccess])

  return <AddCardScreen handleSubmit={onAddCard} />
}

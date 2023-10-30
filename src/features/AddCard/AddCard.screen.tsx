import { Button, ContainerBackground, TextInput, Title } from '@/components'
import cameraIcon from '@/assets/camera.png'
import { Container, Row } from './AddCard.styles'
import { useEffect, useState } from 'react'
import { isStringEmpyt, isValidExpirationDate } from './AddCard.utils'

interface CardData {
  number: string
  name: string
  ccv: string
}

interface AddCardScreenProps {
  handleSubmit: (data: CardData) => void
}

export function AddCardScreen({ handleSubmit }: AddCardScreenProps) {
  const [cardNumber, setCardNumber] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [expiration, setExpiration] = useState('')
  const [ccv, setCCV] = useState('')

  const [disabled, setDisabled] = useState(true)
  const [invalidExDate, setInvalidExDate] = useState(false)

  useEffect(() => {
    setDisabled(
      isStringEmpyt(cardNumber) ||
        isStringEmpyt(ownerName) ||
        isStringEmpyt(expiration) ||
        isStringEmpyt(ccv),
    )
  }, [cardNumber, ownerName, expiration, ccv])

  function handlePress() {
    const validExDate = isValidExpirationDate(expiration)
    setInvalidExDate(!validExDate)

    if (validExDate) {
      handleSubmit({
        number: cardNumber,
        name: ownerName,
        ccv,
      })
    }
  }

  return (
    <ContainerBackground>
      <Container>
        <Title style={{ marginBottom: 16 }}>Wallet Test</Title>
        <TextInput
          label="número do cartão"
          source={cameraIcon}
          keyboardType="numeric"
          mask="9999 9999 9999 9999"
          value={cardNumber}
          onChangeText={text => {
            setCardNumber(text)
          }}
        />
        <TextInput
          label="nome do titular do cartão"
          value={ownerName}
          onChangeText={(_, rawText) => {
            setOwnerName(rawText)
          }}
        />
        <Row>
          <TextInput
            label="vencimento"
            placeholder="00/00"
            mask="99/99"
            value={expiration}
            hasError={invalidExDate}
            onChangeText={text => {
              setExpiration(text)
            }}
          />
          <TextInput
            label="código de segurança"
            placeholder="***"
            keyboardType="numeric"
            mask="999"
            value={ccv}
            onChangeText={text => {
              setCCV(text)
            }}
          />
        </Row>
        <Button
          title="avançar"
          onPress={() => handlePress()}
          disabled={disabled}
        />
      </Container>
    </ContainerBackground>
  )
}

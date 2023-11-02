import { Button, ContainerBackground, TextInput, Title } from '@/components'
import cameraIcon from '@/assets/camera.png'
import { Container, Row } from './form.styles'
import { useEffect, useState } from 'react'
import { isStringEmpyt, isValidExpirationDate } from './form.utils'
import { Card } from '@/entities'

interface FormScreenProps {
  handleSubmit: (data: Omit<Card, 'id'>) => void
}

export function FormScreen({ handleSubmit }: FormScreenProps) {
  const [cardNumber, setCardNumber] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [exDate, setExDate] = useState('')
  const [ccv, setCCV] = useState('')

  const [disabled, setDisabled] = useState(true)
  const [invalidExDate, setInvalidExDate] = useState(false)

  useEffect(() => {
    setDisabled(
      isStringEmpyt(cardNumber) ||
        isStringEmpyt(ownerName) ||
        isStringEmpyt(exDate) ||
        isStringEmpyt(ccv),
    )
  }, [cardNumber, ownerName, exDate, ccv])

  function handlePress() {
    const validExDate = isValidExpirationDate(exDate)
    setInvalidExDate(!validExDate)

    if (validExDate) {
      handleSubmit({
        number: cardNumber,
        name: ownerName,
        ccv,
        expirationDate: exDate,
      })
    }
  }

  return (
    <ContainerBackground>
      <Container>
        <Title style={{ marginBottom: 16 }}>Wallet Test</Title>
        <TextInput
          testID="input-card-number"
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
          testID="input-card-name"
          label="nome do titular do cartão"
          value={ownerName}
          onChangeText={text => {
            setOwnerName(text)
          }}
        />
        <Row>
          <TextInput
            label="vencimento"
            placeholder="00/00"
            mask="99/99"
            keyboardType="numeric"
            value={exDate}
            hasError={invalidExDate}
            onChangeText={text => {
              setExDate(text)
              setInvalidExDate(false)
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

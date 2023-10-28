import { Button, ContainerBackground, TextInput, Title } from '@/components'
import cameraIcon from '@/assets/camera.png'
import { Container, Row } from './AddCard.styles'

export function AddCardScreen() {
  return (
    <ContainerBackground>
      <Container>
        <Title style={{ marginBottom: 16 }}>Wallet Test</Title>
        <TextInput
          label="número do cartão"
          source={cameraIcon}
          keyboardType="numeric"
        />
        <TextInput label="nome do titular do cartão" />
        <Row>
          <TextInput
            label="vencimento"
            placeholder="00/00"
          />
          <TextInput
            label="código de segurança"
            placeholder="***"
            keyboardType="numeric"
          />
        </Row>
        <Button
          title="avançar"
          disabled
        />
      </Container>
    </ContainerBackground>
  )
}

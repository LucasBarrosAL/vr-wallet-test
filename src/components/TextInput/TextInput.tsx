import { ImageSourcePropType } from 'react-native'
import { Container, Content, Input, Label } from './TextInput.styles'
import { IconButton } from '../IconButton/IconButton'
import { MaskedTextInputProps } from 'react-native-mask-text'

interface TextInputProps extends MaskedTextInputProps {
  label: string
  source?: ImageSourcePropType
  hasError?: boolean
}

export function TextInput({
  label,
  source,
  hasError,
  ...rest
}: TextInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Content hasError={hasError}>
        {source && <IconButton source={source} />}
        <Input {...rest} />
      </Content>
    </Container>
  )
}

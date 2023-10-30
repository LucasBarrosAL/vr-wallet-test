import { ImageSourcePropType } from 'react-native'
import { Container, Content, Input, InputMask, Label } from './TextInput.styles'
import { IconButton } from '../IconButton/IconButton'
import { MaskedTextInputProps } from 'react-native-mask-text'

interface TextInputProps extends MaskedTextInputProps {
  label: string
  source?: ImageSourcePropType
  hasError?: boolean
  mask?: string
  value?: string
  onChangeText: (text: string) => void
}

export function TextInput({
  label,
  source,
  hasError,
  mask,
  value,
  onChangeText,
  ...rest
}: TextInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Content hasError={hasError}>
        {source && <IconButton source={source} />}
        {mask ? (
          <InputMask
            mask={mask}
            value={value}
            onChangeText={onChangeText}
            {...rest}
          />
        ) : (
          <Input
            value={value}
            onChangeText={onChangeText}
          />
        )}
      </Content>
    </Container>
  )
}

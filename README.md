# Wallet Test

Repositório dedicado ao `test case` da VR.

> **Aviso de Responsabilidade:** A implementação desde aplicativo baseou-se em dispositivos Android. Apesar de funcionar em iOS é possível que necessite alguns ajustes, visto que não havia disponibilidade de Macbook ou iPhone para desenvolvimento.

## Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Rodando](#rodando)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Testes](#testes)

## Requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas antes de prosseguir:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Um emulador Android (por exemplo, [Android Studio](https://developer.android.com/studio)) ou um emulador iOS (por exemplo, [Xcode](https://developer.apple.com/xcode/))

## Instalação

1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/LucasBarrosAL/vr-wallet-test.git
```

2. Instale as dependências do projeto

```bash
  npm install
  # ou
  yarn install
```

## Rodando

```bash
  # Inicia o aplicativo
  npm start

  # Siga as instruções que aparecerão no seu terminal
```

> **Nota** Certifique-se de ter um emulador rodando

Para o desenvolvimento da aplicação utilizamos o [json-server]() para fornecer os
dados da API. seguindo o arquivo base:

```json
{
  "id": "4ec42ba9-50af-40d2-af90-8312edbd9ca2",
  "number": "3529 5435 3355 8727",
  "cvv": "317",
  "name": "John Doe",
  "expirationDate": "10/26"
},
```

> **Nota:** o Expo possibilita executar o aplicativo em um dispositivo físisco via Expo Go, caso o faça esteja atento a variável de ambiente EXPO_PUBLIC_API_URL (localizada no .env) e ao CORS do seu backend.

## Tecnologias Utilizadas

- React Native
- Expo
- Typescript
- React Navigation
- Redux
- Redux Toolkit Query
- Jest
- React Native Testing Library

## Testes

Para executar os testes

```bash
  npm run tests
```

import { Geral, Container, TituloCadastro, Titulo, Input, Buttons, ButtonBack, ButtonCreate } from './styled-LoginPage'

export default function LoginPage() {

  return (
    <Geral>
      <Container>
        <TituloCadastro>Login</TituloCadastro>

        <Titulo>E-mail:</Titulo>
        <Input
          type='text'
        // onChange={this.chamarPrice}
        // placeholder={"Preço"}
        // value={this.state.price}
        >
        </Input>

        <Titulo>Senha:</Titulo>
        <Input
          type='number'
        // onChange={this.chamarPrice}
        // placeholder={"Preço"}
        // value={this.state.price}
        >
        </Input>

        <Buttons>
          <ButtonBack>Voltar</ButtonBack>
          <ButtonCreate>Entrar</ButtonCreate>
        </Buttons>

      </Container>
    </Geral>
  );
};
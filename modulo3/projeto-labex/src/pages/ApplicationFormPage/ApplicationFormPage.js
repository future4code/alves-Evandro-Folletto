import { useNavigate } from "react-router-dom";
import { Geral, Container, TituloCadastro, Titulo, Input, TextArea, Buttons, ButtonBack, ButtonCreate, SelectOrdenar, OptionOrdenar, DivSelect } from './styled-ApplicationFormPage'

export default function ApplicationFormPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <Geral>
      <Container>
        <TituloCadastro>Inscrever-se para uma viagem</TituloCadastro>

        <DivSelect>
          <SelectOrdenar>
            <OptionOrdenar>Preço Crescente</OptionOrdenar>
            <OptionOrdenar>Preço Decrescente</OptionOrdenar>
            <OptionOrdenar>Título</OptionOrdenar>
            <OptionOrdenar>Prazo</OptionOrdenar>
          </SelectOrdenar>
        </DivSelect>

        <Titulo>Nome:</Titulo>
        <Input
          type='text'
        // onChange={this.chamarPrice}
        // placeholder={"Preço"}
        // value={this.state.price}
        >
        </Input>

        <Titulo>Idade:</Titulo>
        <Input
          type='number'
        // onChange={this.chamarPrice}
        // placeholder={"Preço"}
        // value={this.state.price}
        >
        </Input>

        <Titulo>Texto candidatura:</Titulo>
        <TextArea
          // onChange={this.chamarDescription}
          // placeholder={"Descrição"}
          rows="4"
        // value={this.state.description}
        >
        </TextArea>

        <Titulo>Profissão:</Titulo>
        <Input
          type='text'
        // onChange={this.chamarPrice}
        // placeholder={"Preço"}
        // value={this.state.price}
        >
        </Input>

        <DivSelect>
          <SelectOrdenar>
            <OptionOrdenar>Preço Crescente</OptionOrdenar>
            <OptionOrdenar>Preço Decrescente</OptionOrdenar>
            <OptionOrdenar>Título</OptionOrdenar>
            <OptionOrdenar>Prazo</OptionOrdenar>
          </SelectOrdenar>
        </DivSelect>

        <Buttons>
          <ButtonBack onClick={goBack}>Voltar</ButtonBack>
          <ButtonCreate>Enviar</ButtonCreate>
        </Buttons>

      </Container>
    </Geral>
  );
};
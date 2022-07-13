import { Geral, Container, TituloCadastro, Titulo, Input, TextArea, Buttons, ButtonBack, ButtonCreate, SelectOrdenar, OptionOrdenar, DivSelect, Data, DataInput } from './styled-CreateTripPage'

export default function CreateTripPage() {

  return (
    <Geral>
      <Container>
        <TituloCadastro>Criar Viagem</TituloCadastro>

        <Titulo>Nome:</Titulo>
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

        <Titulo>Data:</Titulo>
          <Data>
            <label for="data-prazo"></label>
            <DataInput type="date"></DataInput>
          </Data>

        <Titulo>Descrição:</Titulo>
        <TextArea
          // onChange={this.chamarDescription}
          // placeholder={"Descrição"}
          rows="4"
        // value={this.state.description}
        >
        </TextArea>

        <Titulo>Duração em dias:</Titulo>
        <Input
          type='number'
        // onChange={this.chamarPrice}
        // placeholder={"Preço"}
        // value={this.state.price}
        >
        </Input>

        <Buttons>
          <ButtonBack>Voltar</ButtonBack>
          <ButtonCreate>Enviar</ButtonCreate>
        </Buttons>

      </Container>
    </Geral>
  );
};
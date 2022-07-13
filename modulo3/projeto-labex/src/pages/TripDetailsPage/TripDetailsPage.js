import { Container } from '../HomePage/styled-HomePage';
import { Geral, Card, Card2, Card3, ButtonBack } from './styled-TripDetailsPage'

export default function TripDetailsPage() {
  const passageiro = {
    nome: "Pedro",
    descricao: "vamos la",
    planeta: "marte",
    duracao: 123,
    data: "01/01/2023",
  }

  return (
    <Geral>
      <Container>
        <Card>
        <h1>Nome: {passageiro.nome}</h1>
        <p><strong>Descrição:</strong> {passageiro.descricao}</p>
        <p><strong>Planeta:</strong> {passageiro.planeta}</p>
        <p><strong>Duração:</strong> {passageiro.duracao}</p>
        <p><strong>Data:</strong> {passageiro.data}</p>
        </Card>

        <ButtonBack>Voltar</ButtonBack>

        <Card2>
        <h2>Candidatos pendentes</h2>
        </Card2>

        <Card3>
        <h2>Candidatos aprovados</h2>
        </Card3>
      </Container>
      
    </Geral>
  );
}; 
import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import downArrow from "./img/down-arrow.png";
import eu from "./img/eu.png";
import engenheiro from "./img/engenheiro.png";
import professor from "./img/professor.png";
import coordenador from "./img/coordenador.png";
import formGrad from "./img/graduacao.png";
import formMest from "./img/mestrado.png";
import labenu from "./img/labenu.png";
import usp from "./img/usp.png";
import email from "./img/email.png";
import endereco from "./img/endereco.png";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import youtube from "./img/youtube.png";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={eu}
          nome="Evandro Paulo Folletto" 
          descricao="Oi, eu sou o Evandro. Sou Engenheiro Civil, com mestrado em Estruturas. Tenho nove anos de experiência no ensino superior e atualmente estou estudante Full Stack Developer pela Labenu e Data Science e Analytics pela USP/Esalq para fazer uma transição de carreira para a área de tecnologia."
        />

        <ImagemButton 
          imagem={downArrow}
          texto="Ver mais"
        />

        <CardPequeno
          imagem={email}
          tipo="E-mail: "
          email="evandrofolletto@gmail.com"
        />

        <CardPequeno
          imagem={endereco}
          tipo="Endereço: "
          email="Rua Curitiba, 607"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={engenheiro}
          nome="Engenheiro Civil - Autônomo" 
          descricao="Desenvolvimento de projetos estruturais, elétricos e hidro-sanitários" 
        />
        
        <CardGrande 
          imagem={professor}
          nome="Professor universitário - Universidade do Oeste de Santa Catarina" 
          descricao="Disciplinas ministradas: Análise Estrutural I, Análise Estrutural II, Análise Matricial de Estruturas, Concreto Armado I, Concreto Armado II, Estruturas de Edifícios, Estruturas Metálicas e de Madeira I, Fundações II, Resistência dos Materiais I, Resistência dos materiais II, Orientações de TCC." 
        />
        
        <CardGrande 
          imagem={professor}
          nome="Professor universitário - Universidade Comunitária da Região de Chapecó" 
          descricao="Disciplinas ministradas: Estática, Mecânica Geral, Estruturas de Madeira, Resistência dos Materiais II, Teoria das Estruturas I, Teoria das Estruturas II, Estágio III ‑ Projeto de conclusão de curso e diversas orientações de TCC." 
        />
        
        <CardGrande 
          imagem={professor}
          nome="Professor universitário - Centro Universitária Facear" 
          descricao="Disciplinas ministradas: Mecânica das estruturas III, Construção em aço, Construções em madeira, Alvenaria estrutural, Construções em concreto estrutural II." 
        />
        
        <CardGrande 
          imagem={coordenador}
          nome="Coordenador do curso de Engenharia Civil - Universidade do Oeste de Santa Catarina" 
          descricao="Responsável por coordenar equipes de professores e funcionários do curso. Executar as deliberações do colegiado, orientando, coordenando e fiscalizando as atividades do curso, atendendo aos alunos no seu fluxo acadêmico." 
        />

        <h2>Formação</h2>
        <CardGrande 
          imagem={formGrad}
          nome="Bacharelado em Engenharia Civil"
          descricao="Universidade Comunitária da Região de Chapecó"
        />

        <CardGrande 
          imagem={formMest}
          nome="Mestrado em Engenharia Civil"
          descricao="Universidade Federal de Santa Catarina"
        />

        <CardGrande 
          imagem={labenu}
          nome="Full-Stack Developer"
          descricao="Labenu"
        />

        <CardGrande 
          imagem={usp}
          nome="Data Science e Analytics"
          descricao="Universidade de São Paulo"
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={linkedin} 
          texto="LinkedIn" 
        />
        
        <ImagemButton 
          imagem={github} 
          texto="GitHub" 
        />

        <ImagemButton 
          imagem={youtube} 
          texto="YouTube"
        />
      </div>
    </div>
  );
}

export default App;
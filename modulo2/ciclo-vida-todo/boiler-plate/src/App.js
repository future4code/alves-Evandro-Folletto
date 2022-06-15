import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
`

const AddTarefa = styled.div`
  display: flex;
  justify-content: space-between;
  
  margin: 10px;
`

const Tarefa = styled.li`
  text-align: left;
  /* list-style-type: none; */
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const Edicao = styled.div`
`

const Botao = styled.button`
  width: 55px;
  margin-left: 10px;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Texto da primeira tarefa',
          completa: false
        }
      ],
      inputValue: '',
      filtro: '',
      editandoID: ''
    }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;
    this.setState({tarefas});
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  criaTarefa = (event) => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const copiaTarefas = [...this.state.tarefas, novaTarefa];

    if (this.state.editandoID === '') {
      this.setState({tarefas: copiaTarefas, inputValue: ''});
    } else {
      const novaListaTarefas = this.state.tarefas.map( tarefa => {
        if (this.state.editandoID === tarefa.id) {
          const novaTarefa = {
            ...tarefa,
            texto: this.state.inputValue
          }
          return novaTarefa
        } else {
          return tarefa
        }
      })
      this.setState({tarefas: novaListaTarefas, editandoID: '', inputValue: ''});
    }
  }

  deletarTarefa = (id) => {
    console.log(id);
    const novaListaTarefas = this.state.tarefas.filter( tarefa => {
      return id !== tarefa.id
    })
    this.setState({tarefas: novaListaTarefas});
  }

  editarTarefa = (id, texto) => {
    this.setState({inputValue: texto, editandoID: id});
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: novaListaTarefas});
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value});
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <AddTarefa>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                
                <Edicao>
                  <Botao onClick={() => this.editarTarefa(tarefa.id, tarefa.texto)}>Editar</Botao>
                  <Botao onClick={() => this.deletarTarefa(tarefa.id)}>Excluir</Botao>
                </Edicao>

              </AddTarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

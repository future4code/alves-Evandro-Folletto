import React, {useState} from "react";

function Post(props) {
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [comentarios, setComentarios] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onClickCurtida = () => {
    console.log('botão do like foi clicado');
    if (curtido) {
      setCurtido(!curtido);
      setNumeroCurtidas(numeroCurtidas -1);
    } else {
      setCurtido(!curtido);
      setNumeroCurtidas(numeroCurtidas + 1 );
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando)
  };

  const onChangeComentario = (event) => {
    console.log('mudança no comentário');
    setInputValue(event.target.value);
  };

  const enviarComentario = () => {
    setComentando(false);
    setInputValue("");
    setNumeroComentarios(numeroComentarios + 1);

    const listaDeComentarios = [...comentarios, inputValue];
    setComentarios(listaDeComentarios);
  };

  const caixaDeComentario = comentando ===  true ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      <button onClick={enviarComentario}>Enviar</button>
    </>
  ) : (
    comentarios.map((comentario, index) => {
      return (
        <div key={index}>
          <p>{comentario}</p>
        </div>
      )
    })
  );

  return (
    <main>
      <header>
        <figure>
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>Nome do usuário aqui</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          <span>Número de curtidas: {numeroCurtidas}</span>
          <button onClick={onClickCurtida}>
            {curtido !== true ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          <span>Número de comentários: {numeroComentarios}</span>
          <button onClick={onClickComentario}>
            {comentando !== false ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;
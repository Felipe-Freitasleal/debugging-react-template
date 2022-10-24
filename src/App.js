import React, { useState } from "react";
import "./index.css";
import {Post} from "./components/Post/Post";

//!! Os trechos comentados fazem parte do exercício final !!
// !!!!! não descomentar ou modificar até lá !!!!!

export default function App() {
  const [textoNovoPost, setTextoNovoPost] = useState("")
  const [post, setPost] = useState({})
  const [curtir, setCurtir] = useState(0)
  

  const onChangeTextoNovoPost = (event) => {
    setTextoNovoPost(event.target.value);
  }

  const adicionarPost = () => {
    // Adiciona um post
    const novoPost = {
      id: Date.now(),
      texto: textoNovoPost,
      curtido: false,
    }
   
    setPost(novoPost)
  }

  const apagarPost = () => {
    // Apaga o post enviado
    setPost({})
    setCurtir(0)
  }

  const alterarCurtida = () => {
    // Altera o status de curtida do post
    const alterarCurtida = {
      ...post,
      curtido: !post.curtido
    }
    setPost(alterarCurtida)
    setCurtir(+1)
  }

  // Exercício final de debug. Descomentar só depois de finalizar o debug de post
 


  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeTextoNovoPost}
          value={textoNovoPost}
        />
        <button onClick={adicionarPost}>Adicionar</button>
      </div>
      <br />
      <Post
        post={post}
        alteraCurtida={alterarCurtida}
        apagarPost={apagarPost}
        curtir={curtir}
      />
    </div>
  );
}


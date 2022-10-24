import React from 'react'
import { ComentarioStyled } from '../Comentario/styled'
import { useState } from 'react'

export default function Comentarios(props) {

    const [novoComentario, setNovoComentario] = useState("")
    const [comentario, setComentario] = useState("")

    function adicionaComentario() {
        setComentario(novoComentario)
        console.log(novoComentario)
       }
    
    function onChangeComentario (event) {
         setNovoComentario(event.target.value)
      
    }

    return (
        <ComentarioStyled>
            <input placeholder="Adicionar comentario" onChange={onChangeComentario} value={novoComentario}/>
            <button onClick={adicionaComentario}>Comentar Post</button>
            <p>{comentario}</p>
        </ComentarioStyled>
    )
}

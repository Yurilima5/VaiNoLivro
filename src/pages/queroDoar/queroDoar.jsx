import s from "../queroDoar/doar.module.scss"
import livro from "../../assets/icone-form.png"
import {useState} from 'react'
import axios from 'axios'
export default function QueroDoar() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem, setImagem] = useState("")

    const capturarTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const capturarCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturarAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturarImagem = (e) =>{
        setImagem(e.target.value)
    }

    const enviarDados = async() =>{
        const endpointApi = ""

        const dadosAEnviar = {
            titulo,
            categoria,
            autor,
            imagem,
        }

        await axios.post(endpointApi, dadosAEnviar)

    }

    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="">
                <div className={s.iconeForm}>
                    <img src={livro} alt="um icone de um livro aberto" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" name="titulo" placeholder="Título" onChange={capturarTitulo} />
                <input type="text" name="categoria" placeholder="Categoria" />
                <input type="text" name="autor" placeholder="Autor" />
                <input type="text" name="imagem" placeholder="Link da imagem" />
                <button>Doar</button>
            </form>
        </section>
    )
}
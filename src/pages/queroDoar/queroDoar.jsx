import s from "../queroDoar/doar.module.scss"
import livro from "../../assets/icone-form.png"
export default function QueroDoar() {
    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="">
                <div className={s.iconeForm}>
                    <img src={livro} alt="um icone de um livro aberto" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" name="titulo" placeholder="Título" />
                <input type="text" name="categoria" placeholder="Categoria" />
                <input type="text" name="autor" placeholder="Autor" />
                <input type="text" name="imagem" placeholder="Link da imagem" />
                <button>Doar</button>
            </form>
        </section>
    )
}
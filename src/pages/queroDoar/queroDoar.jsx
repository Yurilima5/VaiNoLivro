import s from "../queroDoar/doar.module.scss"
export default function QueroDoar() {
    return(
        <main className={s.black}>
            <h1>Por favor, preencha o formulário com suas informações e as informações do Livro</h1>
            <section>
            <form action="">
                <label for='titulo'></label>
                <input type="text" />
            </form>
            </section>
        </main>
    )
}
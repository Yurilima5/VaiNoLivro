import Coraline from '../../assets/Livro-coraline.webp'
import BrevesRespostas from '../../assets/Livro-brevesRespostas.webp'
import s from '../livrosDoados/doados.module.scss'

export default function Doados(){
    return(
        <main className={s.doacoes}>
             <h1 className={s.H1} >Livros Doados</h1>
             <section className={s.livros}>
                <figure>
                    <img className={s.coraline}
                    src={Coraline} 
                    alt="Capa do livro coraline" />
                    <figcaption>
                        <ul className={s.infos}>
                            <li>Coraline</li>
                            <li>Neil Gaiman</li>
                            <li>Terror/ficção</li>
                        </ul>
                    </figcaption>
                </figure>

                <figure>
                    <img className={s.inteligente}
                    src={BrevesRespostas} 
                    alt="Capa do livro Breves respostas para grandes questões" />
                    <figcaption>
                        <ul className={s.infos}>
                            <li>Breves respostas para grandes questões</li>
                            <li>Stephen Hawking</li>
                            <li>Divulgação Científica</li>
                        </ul>
                    </figcaption>
                </figure>
            </section>
        </main>       
    )
}
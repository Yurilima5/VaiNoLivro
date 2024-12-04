import s from  '../inicio/inicio.module.scss'
import lendo from '../../assets/lendo.png'
import balanca from '../../assets/balança.png'
import comunidade from '../../assets/comunidade.png'
import forca from '../../assets/força.png'
export default function Inicio(){
return(
    <main>
            <section className={s.primeiraSessao}>
                <p className={s.p1}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
            </section>

    <section className={s.segundaSessao}>
            <h1 className={s.h1}
            >Por que devo doar?</h1>            
        
         <section className={s.sessaoContainer}>
         {/* seguimento dos conteiners, forma que encontrei de deixar mais semantico e organizado */}
            <section className={s.container}>
             <img 
             src={comunidade}
             alt="uma imagem representando uma rede/uniao de pessoas" />
             <p className={s.containerP}> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </section>

            <section className={s.container}>
             <img 
             src={lendo}
             alt="imagem representando alguém lendo um livro" />
             <p className={s.containerP}>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </section>

            <section className={s.container}>
             <img 
             src={forca}
             alt="desenho ilustrando a força de pessoas unidas" />
             <p className={s.containerP}>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </section>

            <section className={s.container}>
             <img 
             src={balanca}
             alt="imagem de uma balança, representando o contexto do texto abaixo" />
             <p className={s.containerP}>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </section>
            
        </section>
    </section>
    </main>
            
  )
}
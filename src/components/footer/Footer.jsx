import s from './footer.module.scss'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
export default function Footer() {
    return (
      <footer className={s.footer}>

       <section className={s.sessaoFooter}>
        <h2 className={s.telefone}>4002-8922</h2>
        <nav className={s.navFooter}>
          <a href=''><img className={s.icones} src={facebook} alt="icone do facebook" /></a>
          <a href=''><img className={s.icones} src={twitter} alt="icone do twitter" /></a>
          <a href=''><img className={s.icones} src={youtube} alt="icone do youtube" /></a>
          <a href=''><img className={s.icones} src={linkedin} alt="icone do linkedin" /></a>
          <a href=''><img className={s.icones} src={instagram} alt="icone do instagram" /></a>
        </nav>
      </section>
      <h2 className={s.aviso}>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </h2>
      </footer>
    );
  }
  
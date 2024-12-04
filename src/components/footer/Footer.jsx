import s from './footer.module.scss'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import youtube from '../../assets/youtube.png'
import X from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
export default function Footer() {
    return (
      <footer className={s.footer}>

       <section className={s.sessaoFooter}>
        <h2 className={s.telefone}>4002-8922</h2>
        <nav className={s.navFooter}>
          <a href='https://www.facebook.com/vainaweb' target='_blank' rel='noopener noreferrer'><img className={s.icones} src={facebook} alt="icone do facebook" /></a>
          <a href='https://x.com/vainaweb' target='_blank' rel='noopener noreferrer'><img className={s.icones} src={X} alt="icone do twitter" /></a>
          <a href='https://www.youtube.com/@VaiNaWeb' target='_blank' rel='noopener noreferrer'><img className={s.icones} src={youtube} alt="icone do youtube" /></a>
          <a href='https://www.linkedin.com/company/vainaweb/posts/?feedView=all' target='_blank' rel='noopener noreferrer'><img className={s.icones} src={linkedin} alt="icone do linkedin" /></a>
          <a href='https://www.instagram.com/vainaweb/' target='_blank'rel='noopener noreferrer'><img className={s.icones} src={instagram} alt="icone do instagram" /></a>
        </nav>
      </section>
      <h2 className={s.aviso}>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </h2>
      </footer>
    );
  }

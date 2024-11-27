import Icone from '../../assets/icone.png'
import lupa from '../../assets/lupa.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../../pages/inicio/Inicio.jsx';
import Doados from '../../pages/livrosDoados/Doados.jsx'
import QueroDoar from '../../pages/queroDoar/queroDoar.jsx'
import s from './header.module.scss';

export default function Header(){
    return(
<BrowserRouter>
      <header className={s.header}>
        <section className={s.logoHeader}>
        <Link className={s.link} to="/">
             <img className= {s.book}
             src={Icone}
             alt="Imagem de ilustração de livro aberto"
             />
        </Link>
          
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.navHeader}>
          <ul>
            <li>
              <Link className={s.link} to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/livrosdoados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/querodoar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <section className={s.barraDeBusca}>
          <input className={s.headerInput}
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button className={s.headerButton}>
            <img src={lupa} alt="Icone de lupa branca" />
          </button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livrosdoados" element={<Doados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
    )
}
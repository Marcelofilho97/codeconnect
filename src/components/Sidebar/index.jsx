//* Criando primeiro componente
import Logo from './assets/Logo.svg'; //Uso de imagens por importação
import Feed from './assets/feed.svg';
import Account from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';
import './styles.css'; // importando estilização

//! Function component
export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Lodo do codeconnect"/>
      <nav>
        <ul className='lista-sidebar'>
          <li>
            <a href="#" className='item__link-publicacao'>Publicar</a>
          </li>
          <li>
            <a href="#" className='link__item item__link--ativo'>
              <img src={Feed} alt=""/>
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className='link__item'>
              <img src={Account} alt=""/>
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className='link__item'>
              <img src={Info} alt=""/>
              <span>Sobre Nós</span>
            </a>
          </li>
          <li>
            <a href="#" className='link__item'>
              <img src={Logout} alt=""/>
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
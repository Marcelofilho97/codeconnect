import { useState } from 'react';
import './styles.css';

export default function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState(''); //Podemos iniciar com um valor dentro das '1;
  //console.log(termoPesquisa)
  return (
    <input type="search" 
    placeholder="Digite o que você procura"
    className='barra-pesquisa'
    value={termoPesquisa}
    onChange={(event) => setTermoPesquisa(event.target.value)}
    />
  );
};

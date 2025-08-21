import { useEffect, useState } from 'react'
import './App.css'
import BarraDePesquisa from './components/BarraDePesquisa'
import Card from './components/Card'
import Filtro from './components/Filtro'
import Ordenacao from './components/Ordenacao'
import Sidebar from './components/Sidebar'

function App() {

  const [dados, setDados] = useState([]); // "[]" - irá receber um objeto como dados
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(response => response.json())
    .then(dados => setDados(dados))
  }, []); // Hook usado para que aconteça "algo" após a renderização do componente; o "[]" vazio faz com que aconteça 1 vez na renderização
  

  return (
    <div className='container'>
      <Sidebar/>
      <div>
        <BarraDePesquisa/>
        <Filtro/>
        <Ordenacao/>
        <ul className='lista-cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card
              id = {item.id}
              imagemUrl = {item.imagem_capa}
              Titulo ={item.titulo}
              resumo = {item.resumo}
              LinhasDeCodigo = {item.linhas_de_codigo}
              compartilhamentos = {item.compartilhamentos}
              comentarios = {item.comentarios}
              usuario = {item.usuario}
              />
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}

export default App
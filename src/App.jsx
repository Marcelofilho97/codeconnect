import './App.css'
import BarraDePesquisa from './components/BarraDePesquisa'
import Filtro from './components/Filtro'
import Ordenacao from './components/Ordenacao'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='container'>
      <Sidebar/>
      <div>
        <BarraDePesquisa/>
        <Filtro/>
        <Ordenacao/>
      </div>
    </div>
  )
}

export default App
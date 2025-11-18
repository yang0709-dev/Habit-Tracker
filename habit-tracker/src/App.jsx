import {Routes,Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Graphs from './pages/Graphs';
import Navbar from './components/Navbar';
import "./css/App.css"

function App(){
  return (
    <main>
      <nav>
        <Navbar/>
      </nav>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/Graphs' element={<Graphs/>}/>
      </Routes>
    </main>
  );
  

}

export default App
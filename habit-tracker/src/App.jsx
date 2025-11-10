import {Routes,Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Graphs from './pages/Graphs';

function App(){
  return (
    <main>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/Graphs' element={<Graphs/>}/>
      </Routes>
    </main>
  );
  

}

export default App
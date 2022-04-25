import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Layout from './components/Layout';
import Principal from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/principal' element={<Layout/>}/>
      </Routes>
    </Router>
  );
}

export default App;

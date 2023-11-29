import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { render, screen } from '@testing-library/react';

import Header from './header/Header';
import CadastroFilme from './pages/CadastroFilme';
import Filmes from './pages/Filmes';
import FilmeDetalhado from './pages/FilmeDetalhado';
import UpdateFilme from './pages/UpdateFilme';
import Footer from './footer/Footer';

function App() {

  return (
    <div>

    <Router>

      <Header></Header>

            <Routes>
                  <Route exact path="/" element={<Filmes />}/>               
                  <Route path="/:id" element={<FilmeDetalhado />}/>
                  <Route path="/filme" element={<CadastroFilme />}/>  
                  <Route path="/filme/:id" element= {< UpdateFilme />}/>             
            </Routes>           
          
      <Footer></Footer>
    </Router>

    </div>
  );
}

export default App;
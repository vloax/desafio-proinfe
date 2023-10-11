import React from 'react';
import Nav from '../components/Nav/Nav.jsx';
import Form from '../components/Form/Form.jsx';
import Home from './Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastrar from './Cadastrar.jsx';
import Listar from './Listar.jsx';

function App() {
  return (
    <section style={{ margin: '0 auto' }}>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="cadastrar-funcionarios" element={<Cadastrar />}></Route>
          <Route path="listar-funcionarios" element={<Listar />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsForm from './components/form';
import Main from './components/main';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/enviar" element={<NewsForm/>} />
        <Route path="/" element={<Main/>} />

        {/* Adicione outras rotas aqui */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
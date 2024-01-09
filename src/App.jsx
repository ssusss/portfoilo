import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './routes/Home';
import Project from './routes/Project';
import Resume from './routes/Resume';
import PageNotFound from './routes/PageNotFuond';
import Visite from './routes/Visite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='project' element={<Project/>}/>
            <Route path='resume' element={<Resume/>}/>
            <Route path='visite' element={<Visite/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

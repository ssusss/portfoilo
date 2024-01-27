import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Project from './routes/Project';
import PageNotFound from './routes/PageNotFound';
import OnepageVer from './routes/OnePageVer';
import AboutMe from './routes/AboutMe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<OnepageVer/>}/>
            <Route path='project' element={<Project/>}/>
            <Route path='resume' element={<AboutMe/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

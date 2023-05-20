import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter , Routes , Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './components/home/home';
import Software from './components/software/software';
import Designing from './components/designing/designing';
import Models from './components/models/models';
import About from './components/about/about';
import Nopage from './components/nopage/nopage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <HashRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
     <Route path='home' element={<Home/>}/>
     <Route path='software' element={<Software/>}/>
     <Route path='designing' element={<Designing/>}/>
     <Route path='models' element={<Models/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='*' element={<Nopage/>}/>
    </Route>
   </Routes>
 </HashRouter>
);



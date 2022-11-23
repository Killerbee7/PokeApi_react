import React, { Component } from 'react';
import Layout from './pages/Layout';
import {Routes,Route,BrowserRouter, useParams} from 'react-router-dom';
import PokeList from './components/PokeList';
import About from './components/About';
import Home from './components/Home';
import PokeSingle from './components/PokeSingle';


//work around

const RouterWrapper = (props) => {
  const params = useParams();

  return <PokeSingle params={params}{...props}/>

};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="pokelist" element={<PokeList/>}/>
        <Route path='pokelist/:pokesingle' element={<RouterWrapper/>}/>
        <Route path="about" element={<About/>}/>

        </Route>
      </Routes>
       
      </BrowserRouter>
    );
  }
}

export default App;
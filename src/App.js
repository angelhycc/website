// import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Project from './components/Project';
import LandingPage from './components/LandingPage';
import GamePage from './components/Game';


function App() {
  console.log('here')
  return (
    <>
    <Routes>
    {/* <Route path='test' element={<LandingPage/>}/> */}
    <Route path='' element={<Layout/>} >
      <Route index element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='projects' element={<Projects/>}>
        <Route path='r10k' element={<Project/>}/>
      </Route>
      {/* <Route path='game' element={<GamePage/>}/> */}
      <Route path='contact' element={<Contact/>}/>
    </Route>
    </Routes>
    </>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { requests } from './Path';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import Nav from './components/pag/nav';
import Hero from './components/pag/hero';
import Movie from './components/row/movie';

function App() {
  return (
    <div className='  w-full'>
      <Nav />
      <Hero/>
      {/* <Movie/> */}
      <Movie title='Popular' url={requests.popular} />
      <Movie title='Top Rated' url={requests.top_rated} />
      <Movie title='Upcomong' url={requests.upcoming} />
      </div>
     
  );
}

export default App;

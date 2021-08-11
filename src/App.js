import './App.css';
import Header from './components/header/Header';
import Home from './components/landing-page/Home';
import Partner from './components/landing-page/Partner';
import TopProducts from './components/landing-page/TopProducts';
import TopServices from './components/landing-page/TopServices';
import Tagline from './components/landing-page/Tagline';
import Download from './components/landing-page/Download';
import Evaluation from './components/landing-page/Evaluation';
import Earn from './components/landing-page/Earn';
import Join from './components/landing-page/Join';
import Footer from './components/landing-page/Footer';

function App() {
  return (
    <div className="">
      <Header/>
      <Home/>
      <Partner/>
      <TopProducts/>
      <TopServices/>
      <Tagline/>
      <Download/>
      <Evaluation/>
      <Earn/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;

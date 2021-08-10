import './App.css';
import Header from './components/header/Header';
import Home from './components/landing-page/Home';
import Partner from './components/landing-page/Partner';
import TopProducts from './components/landing-page/TopProducts';

function App() {
  return (
    <div className="">
      <Header/>
      <Home/>
      <Partner/>
      <TopProducts/>
    </div>
  );
}

export default App;

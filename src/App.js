import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Review from './Components/Review/Review';
import Chart from './Components/Chart/Chart';
import Faq from './Components/Faq/Faq';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/reviews' element={<Review/>}/>
        <Route path='/dashboard' element={<Chart/>}/>
        <Route path='/blogs' element={<Faq/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

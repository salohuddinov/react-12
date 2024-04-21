import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import SingleProduct from './pages/singleproduct/SingleProduct';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

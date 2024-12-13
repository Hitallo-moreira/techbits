import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductPage from './pages/Product/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Header from './layout/Header';
import MainNav from './layout/MainNav';
import Footer from './layout/Footer';

import HeroBanner from './components/Home/HeroBanner';
import CategoryCardGroup from './components/Home/CategoryCardGroup';
import CategoryProductsPage from './pages/CategoryProductsPage';

function HomePage() {
  return (
    <>
      <HeroBanner />
      <div className="px-6">
        <CategoryCardGroup
          title="Explore Categories"
          apiEndpoint="https://mocki.io/v1/6aa2b06d-3d65-44a4-a36d-6a7c7302c419"
        />
        <CategoryCardGroup
          title="Popular Right Now"
          apiEndpoint="https://mocki.io/v1/6aa2b06d-3d65-44a4-a36d-6a7c7302c419"
        />
        <CategoryCardGroup
          title="Recommended For You"
          apiEndpoint="https://mocki.io/v1/6aa2b06d-3d65-44a4-a36d-6a7c7302c419"
        />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <MainNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ClickerProvider } from './context/ClickerContext';
import Clicker from './components/Clicker';
import NewsPage from './components/newsPage';
import Shop from './components/Shop';

// import "./css/index.css";

const App = () => {
    return (
        <ClickerProvider>
            <Router>
                <nav>
                    <Link to="/">Кликер</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/shop">Магазин</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Clicker />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </Router>
        </ClickerProvider>
    );
};

export default App;

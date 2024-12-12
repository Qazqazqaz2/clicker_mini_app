import React from 'react';
import { useClickerContext } from '../context/ClickerContext';
import "../css/click.css";

const Clicker = () => {
    const { score, incrementScore } = useClickerContext();
    
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Кликер игра</h1>
            <h2>Клики: {score}</h2>
            <button type="button" onClick={incrementScore} className="click_main" style={{ fontSize: '20px', padding: '10px 20px' }}>
                Клик!
            </button>
        </div>
    );
};

export default Clicker;

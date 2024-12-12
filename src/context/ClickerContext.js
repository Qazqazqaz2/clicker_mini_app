import React, { createContext, useContext, useState } from 'react';

const ClickerContext = createContext();

export const ClickerProvider = ({ children }) => {
    const [score, setScore] = useState(0);
    const [upgrades, setUpgrades] = useState([]);

    const incrementScore = () => setScore(score + 1);
    const buyUpgrade = (upgrade) => setUpgrades([...upgrades, upgrade]);

    return (
        <ClickerContext.Provider value={{ score, incrementScore, upgrades, buyUpgrade }}>
            {children}
        </ClickerContext.Provider>
    );
};

export const useClickerContext = () => useContext(ClickerContext);

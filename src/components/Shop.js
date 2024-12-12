import React from 'react';
import { useClickerContext } from '../context/ClickerContext';

const upgrades = [
    { name: 'Улучшение 1', cost: 5 },
    { name: 'Улучшение 2', cost: 10 },
];

const Shop = () => {
    const { score, buyUpgrade} = useClickerContext();

    return (
        <div>
            <h1>Магазин</h1>
            <p>Очки: {score}</p>
            <h2>Улучшения</h2>
            {upgrades.length > 0 ? (
                upgrades.map(upgrade => (
                    <div key={upgrade.name}>
                        <p>{upgrade.name} - {upgrade.cost} очков</p>
                        <button onClick={() => buyUpgrade(upgrade.name)} disabled={score < upgrade.cost}>
                            Купить
                        </button>
                    </div>
                ))
            ) : (
                <p>{upgrades}</p>
            )}
        </div>
    );
};

export default Shop;

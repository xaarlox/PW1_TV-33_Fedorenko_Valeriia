//Файл містить компонент FuelCalculator, який є основним контейнером для веб-калькулятора палива

import { useState } from 'react';
import { FuelForm } from './FuelForm';
import { ResultsDisplay } from './ResultsDisplay';
import { calculateFuelProperties } from '../utils/fuelCalculations';
import './FuelCalculator.css';

export default function FuelCalculator() {
    const [results, setResults] = useState(null);

    const handleCalculate = (FormData) => {
        const calculatedResults = calculateFuelProperties(FormData);
        setResults(calculatedResults);
    };

    return (
        <div className="fuel-container">
            <h2>Веб калькулятор палива</h2>
            <FuelForm onCalculate={handleCalculate} />
            <ResultsDisplay results={results} />
        </div>
    );
}
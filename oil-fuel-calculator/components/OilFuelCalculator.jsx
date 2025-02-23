//Файл містить компонент OilFuelCalculator, який є основним контейнером для веб-калькулятора мазуту

import { useState } from "react";
import { OilFuelForm } from "./OilFuelForm";
import { OilFuelResultsDisplay } from "./OilFuelResultsDisplay";
import { calculateOilFuelProperties } from "../utils/oilFuelCalculations";
import './OilFuelCalculator.css';

export default function OilFuelCalculator() {
    const [results, setResults] = useState(null);

    const handleCalculate = (FormData) => {
        const calculatedResults = calculateOilFuelProperties(FormData);
        setResults(calculatedResults);
    };

    return (
        <div className="fuel-container">
            <h2>Веб калькулятор мазуту</h2>
            <OilFuelForm onCalculate={handleCalculate} />
            <OilFuelResultsDisplay results={results} />
        </div>
    );
}
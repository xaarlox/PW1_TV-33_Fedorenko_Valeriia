//Файл містить компонент OilFuelResultsDisplay, який відповідає за відображення результатів розрахунків властивостей мазуту

export function OilFuelResultsDisplay({ results }) {
    if (!results) return null;

    return (
        <div className="results-container">
            <div className="result-item">
                <span>Нижча теплота згоряння мазуту на робочу масу:</span>
                <span className="bold">{results.heatingValueWorking.toFixed(2)} МДж/кг</span>
            </div>
            <h3>Склад робочої маси мазуту:</h3>
            <table>
                <thead>
                    <tr>
                        <th>H<sup>Р</sup> %</th>
                        <th>C<sup>Р</sup> %</th>
                        <th>S<sup>Р</sup> %</th>
                        <th>O<sup>Р</sup> %</th>
                        <th>V<sup>Р</sup> %</th>
                        <th>A<sup>Р</sup> %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{results.hydrogenW ? results.hydrogenW.toFixed(2) : '0.00'}</td>
                        <td>{results.carbonW ? results.carbonW.toFixed(2) : '0.00'}</td>
                        <td>{results.sulfurW ? results.sulfurW.toFixed(2) : '0.00'}</td>
                        <td>{results.oxygenW ? results.oxygenW.toFixed(2) : '0.00'}</td>
                        <td>{results.vanadiumW ? results.vanadiumW.toFixed(2) : '0.00'}</td>
                        <td>{results.ashW ? results.ashW.toFixed(2) : '0.00'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
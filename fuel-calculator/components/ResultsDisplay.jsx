//Файл містить компонент ResultsDisplay, який відповідає за відображення результатів розрахунків складу сухої та 
// горючої маси палива, а також нижчої теплоти згоряння

export function ResultsDisplay({ results }) {
    if (!results) return null;

    return (
        <div className="results-container">
            <div className="result-item">
                <span>Коефіцієнт переходу від робочої до сухої маси становить:</span>
                <span className="bold">{results.KPC.toFixed(2)}%</span>
            </div>
            <div className="result-item">
                <span>Коефіцієнт переходу від робочої до горючої маси становить:</span>
                <span className="bold">{results.KPG.toFixed(2)}%</span>
            </div>
            <div className="result-item">
                <span>Нижча теплота згоряння для робочої маси за заданим складом компонентів палива становить:</span>
                <span className="bold">{results.QPH.toFixed(2)} МДж/кг</span>
            </div>
            <div className="result-item">
                <span>Нижча теплота згоряння для сухої маси за заданим складом компонентів палива становить:</span>
                <span className="bold">{results.QCH.toFixed(2)} МДж/кг</span>
            </div>
            <div className="result-item">
                <span>Нижча теплота згоряння для горючої маси за заданим складом компонентів палива становить:</span>
                <span className="bold">{results.QGH.toFixed(2)} МДж/кг</span>
            </div>

            <h3>Склад сухої маси палива:</h3>
            <table>
                <thead>
                    <tr>
                        <th>A<sup>C</sup> %</th>
                        <th>C<sup>C</sup> %</th>
                        <th>H<sup>C</sup> %</th>
                        <th>N<sup>C</sup> %</th>
                        <th>O<sup>C</sup> %</th>
                        <th>S<sup>C</sup> %</th>
                        <th>W<sup>C</sup> %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{results.AC ? results.AC.toFixed(2) : '0.00'}</td>
                        <td>{results.CC ? results.CC.toFixed(2) : '0.00'}</td>
                        <td>{results.HC ? results.HC.toFixed(2) : '0.00'}</td>
                        <td>{results.NC ? results.NC.toFixed(2) : '0.00'}</td>
                        <td>{results.OC ? results.OC.toFixed(2) : '0.00'}</td>
                        <td>{results.SC ? results.SC.toFixed(2) : '0.00'}</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>

            <h3>Склад горючої маси палива:</h3>
            <table>
                <thead>
                    <tr>
                        <th>C<sup>G</sup> %</th>
                        <th>H<sup>G</sup> %</th>
                        <th>N<sup>G</sup> %</th>
                        <th>O<sup>G</sup> %</th>
                        <th>S<sup>G</sup> %</th>
                        <th>A<sup>G</sup> %</th>
                        <th>W<sup>G</sup> %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{results.CG ? results.CG.toFixed(2) : '0.00'}</td>
                        <td>{results.HG ? results.HG.toFixed(2) : '0.00'}</td>
                        <td>{results.NG ? results.NG.toFixed(2) : '0.00'}</td>
                        <td>{results.OG ? results.OG.toFixed(2) : '0.00'}</td>
                        <td>{results.SG ? results.SG.toFixed(2) : '0.00'}</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
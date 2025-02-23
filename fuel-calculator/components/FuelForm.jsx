//Файл містить компонент FuelForm, який є формою для введення хімічного складу палива

import { useState } from 'react';

const initialState = {
    hydrogen: '',
    carbon: '',
    sulfur: '',
    nitrogen: '',
    oxygen: '',
    moisture: '',
    ash: ''
}

export function FuelForm({ onCalculate }) {
    const [formData, setFormData] = useState(initialState);

    //Функція, що оновлює стан відповідно до введених даних
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //Функція, яка запобігає стандартній поведінці форми та передає введені дані у функцію onCalculate
    const handleSubmit = (event) => {
        event.preventDefault();
        onCalculate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>H<sup>P</sup> (%) - Водень:</label>
                <input type="number" name="hydrogen" value={formData.hydrogen} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>C<sup>P</sup> (%) - Вуглець:</label>
                <input type="number" name="carbon" value={formData.carbon} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>S<sup>P</sup> (%) - Сірка:</label>
                <input type="number" name="sulfur" value={formData.sulfur} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>N<sup>P</sup> (%) - Азот:</label>
                <input type="number" name="nitrogen" value={formData.nitrogen} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>O<sup>P</sup> (%) - Кисень:</label>
                <input type="number" name="oxygen" value={formData.oxygen} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>W<sup>P</sup> (%) - Волога:</label>
                <input type="number" name="moisture" value={formData.moisture} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>A<sup>P</sup> (%) - Зола:</label>
                <input type="number" name="ash" value={formData.ash} onChange={handleChange} required />
            </div>
            <button type="submit">Розрахувати</button>
        </form>
    );
}
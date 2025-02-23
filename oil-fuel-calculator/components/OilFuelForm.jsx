//Файл містить компонент OilFuelForm, який є формою для введення параметрів рідкого палива

import { useState } from 'react';

const initialState = {
    carbonG: '',
    hydrogenG: '',
    oxygenG: '',
    sulfurG: '',
    heatingValueCombustible: '',
    moistureWorking: '',
    ashDry: '',
    vanadium: ''
}

export function OilFuelForm({ onCalculate }) {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCalculate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>C<sup>Г</sup> (%) - Вуглець:</label>
                <input type="number" name="carbonG" value={formData.carbonG} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>H<sup>Г</sup> (%) - Водень:</label>
                <input type="number" name="hydrogenG" value={formData.hydrogenG} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>O<sup>Г</sup> (%) - Кисень:</label>
                <input type="number" name="oxygenG" value={formData.oxygenG} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>S<sup>Г</sup> (%) - Сірка:</label>
                <input type="number" name="sulfurG" value={formData.sulfurG} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>НТЗГМ (МДж/кг):</label>
                <input type="number" name="heatingValueCombustible" value={formData.heatingValueCombustible} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Вологість робочої маси (%):</label>
                <input type="number" name="moistureWorking" value={formData.moistureWorking} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Зольність сухої маси(%):</label>
                <input type="number" name="ashDry" value={formData.ashDry} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Вміст надію (мг/кг):</label>
                <input type="number" name="vanadium" value={formData.vanadium} onChange={handleChange} required />
            </div>
            <button type="submit">Розрахувати</button>
        </form>
    );
}
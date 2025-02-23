//Файл містить функцію calculateOilFuelProperties, яка розраховує склад і теплоту згоряння рідкого палива у робочому стані на основі вхідних даних

export function calculateOilFuelProperties(formData) {
    const { carbonG, hydrogenG, oxygenG, sulfurG, heatingValueCombustible, moistureWorking, ashDry, vanadium } = formData

    const conversionFactor = (100 - parseFloat(moistureWorking) - parseFloat(ashDry)) / 100;
    
    const carbonW = parseFloat(carbonG) * conversionFactor;
    const hydrogenW = parseFloat(hydrogenG) * conversionFactor;
    const oxygenW = parseFloat(oxygenG) * conversionFactor;
    const sulfurW = parseFloat(sulfurG) * conversionFactor;
    const vanadiumW = parseFloat(vanadium) * (100 - parseFloat(moistureWorking)) / 100;
    const ashW = parseFloat(ashDry) * (100 - parseFloat(moistureWorking)) / 100;

    const heatingValueWorking = parseFloat(heatingValueCombustible) * ((100 - parseFloat(moistureWorking) - parseFloat(ashDry)) / 100) - 0.025 * parseFloat(moistureWorking);
    
    return {
        carbonW, hydrogenW, oxygenW, sulfurW, vanadiumW, ashW, heatingValueWorking
    };
}
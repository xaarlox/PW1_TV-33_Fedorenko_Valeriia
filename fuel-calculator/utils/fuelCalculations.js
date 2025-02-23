//Файл містить функцію calculateFuelProperties, яка виконує розрахунки складу сухої та горючої маси палива, а також теплоти його згоряння

export function calculateFuelProperties(formData) {
    const { hydrogen, carbon, sulfur, nitrogen, oxygen, moisture, ash } = formData

    const KPC = 100 / (100 - parseFloat(moisture));
    const KPG = 100 / (100 - parseFloat(moisture) - parseFloat(ash));

    const HC = parseFloat(hydrogen) * KPC;
    const CC = parseFloat(carbon) * KPC;
    const SC = parseFloat(sulfur) * KPC;
    const NC = parseFloat(nitrogen) * KPC;
    const OC = parseFloat(oxygen) * KPC;
    const AC = parseFloat(ash) * KPC;

    const HG = parseFloat(hydrogen) * KPG;
    const CG = parseFloat(carbon) * KPG;
    const SG = parseFloat(sulfur) * KPG;
    const NG = parseFloat(nitrogen) * KPG;
    const OG = parseFloat(oxygen) * KPG;

    const QPH = (339 * parseFloat(carbon) + 1030 * parseFloat(hydrogen) - 108.8 * (parseFloat(oxygen) - parseFloat(sulfur)) - 25 * parseFloat(moisture)) / 1000;
    const QCH = (QPH + 0.025 * parseFloat(moisture)) * (100 / (100 - parseFloat(moisture)));
    const QGH = (QPH + 0.025 * parseFloat(moisture)) * (100 / (100 - parseFloat(moisture) - parseFloat(ash)));
    
    return {
        KPC, KPG, HC, CC, SC, NC, OC, AC, HG, CG, SG, NG, OG, QPH, QCH, QGH
    };
}
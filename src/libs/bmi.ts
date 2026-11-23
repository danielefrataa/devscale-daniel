// Perhitungan lewat Metrik (Kg & Cm) & (lb & inch)




export function BodyMassMetrik(weight: number, height: number) :number { 
    const heightInMeter = height / 100; 
    const heightSquared = heightInMeter ** 2
    const resultBmi = weight / heightSquared

    return resultBmi;
}


export function BodyMassImperial(weight: number, height: number) :number { 
    return (weight / height) * 703;
}

console.log(BodyMassImperial(70, 178));

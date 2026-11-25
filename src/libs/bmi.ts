export function BodyMassMetrik(weight: number, height: number) :number { 
    const heightInMeter = height / 100; 
    const heightSquared = heightInMeter ** 2
    const resultBmi = weight / heightSquared

    return resultBmi;
}


export function BodyMassImperial(weight: number, height: number) :number { 
   return (weight / (height ** 2)) * 703;
}

export function getBmiCategory(bmi: number): string {
  if (bmi < 18.5) return "Kurus (Underweight)";
  if (bmi < 25) return "Normal (Sangat bagus!)";
  if (bmi < 30) return "Gemuk (Overweight)";
  return "Obesitas";
}

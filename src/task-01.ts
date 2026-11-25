// Revisi dari Devscale
import {number, select} from '@inquirer/prompts'
import {BodyMassMetrik, BodyMassImperial} from './libs/bmi'

const beratBadan = await select ({ 
    message: "Pilih Satuan", 
    choices: [ 
        {name: "Kilogram & Centimeter",  value: "Metric" },
        {name: "lb & inch",  value: "Imperial" }
    ]
})

const isImperial = beratBadan === "Imperial";

const weightMessage = isImperial ? 'Weight (lb)': 'Weight (Kg)'
const heightMessage = isImperial ? 'Height (Inch)' : 'Height(Cm)'


const weight = await number ({ 
    message: weightMessage,
    required: true
})


const height = await number ({ 
    message: heightMessage,
    required: true
})

if (weight === undefined || height === undefined) {
  console.log("Input tidak valid.");
  process.exit(1);
}

const result =
  beratBadan === "Metric"
    ? BodyMassMetrik(weight, height)
    : BodyMassImperial(weight, height);
const rounded = Math.round(result * 10) / 10;

console.log(`Body Mass Kamu ${rounded}`);
if (rounded < 18.5) {
  console.log("Kategori: Kurus (Underweight)");
} else if (rounded < 25) {
  console.log("Kategori: Normal (Sangat bagus!)");
} else if (rounded < 30) {
  console.log("Kategori: Gemuk (Overweight)");
} else {
  console.log("Kategori: Obesitas");
}
// Body Mass Index: Berat Badan / Tinggi Badan m2  
import {number, select} from '@inquirer/prompts'
import {BodyMassMetrik} from './libs/bmi'

const beratBadan = await select ({ 
    message: "Pilih Satuan", 
    choices: [ 
        {name: "Kilogram & Centimeter",  value: "Metric" },
        {name: "lb & inch",  value: "Imperial" }
    ]
})

const weight = await number ({ 
    message: 'Berat Badan (kg)',
    required: true, 
    validate: (value) => (value > 0 && value !== undefined)
})


const height = await number ({ 
    message: 'Tinggi Badan (cm)',
    required: true, 
    validate: (value) => (value !== undefined && value > 0)
})


const result = BodyMassMetrik(weight, height)
const rounded = Math.round(result * 10) / 10

console.log(`Body Mass Kamu ${rounded}`);


if (rounded < 20) { 
    console.log("Body mass indeks kamu sudah sangat bagus");
    
} else { 
    console.log("Bisa di latih kembali");
    
}






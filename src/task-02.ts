// Currency conventer 
import {currencyConverter, type Currency} from './libs/currency'
import {number, select} from '@inquirer/prompts'


const choices: { name: string; value: Currency }[] = [
    { name: "Dollar (USD)", value: "USD" },
    { name: "Rupiah (IDR)", value: "IDR" },
    { name: "Yen (JPY)", value: "JPY" },
    { name: "Euro (EUR)", value: "EUR" },
]

const from = await select ({
    message: "Pilih mata uang",
    choices
})


const to = await select ({
    message: "Pilih mata uang tujuan",
    choices
})

if (from === to) {
    console.log("Mata uang asal dan tujuan sama, tidak perlu dikonversi.")
    process.exit(0)
}


const amount = await number({ 
    message: "Masukan jumlah uangnya",
    required: true,
    validate: (value) => (value !== undefined && value > 0)
})


const converted = currencyConverter(amount!, from, to)

console.log(`${amount} ${from} = ${converted.toFixed(4)} ${to}`)
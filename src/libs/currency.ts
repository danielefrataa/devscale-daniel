// Buat 4 Konversi Mata Uang 
// Buat acuan mata uang dulu trus export 
const rates = { 
    USD: 1, 
    IDR: 16_000,
    EUR: 0.9,
    JPY: 150,
}


export type Currency = keyof typeof rates

export function currencyConverter(amount: number, from: Currency, to: Currency): number {
    const amountInUsd = amount / rates[from]
    return amountInUsd * rates[to];
}

console.log(currencyConverter(1600000, "IDR", "USD"));

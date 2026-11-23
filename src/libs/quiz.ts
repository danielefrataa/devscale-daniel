export interface Question { 
    question: string
    choices: string []
    answer: number
}

export const questions : Question[] = [
    {
        question: "Ibu kota dari uruguay apa hayo!?",
        choices: ["Buenos Aires", "Montevideo", "Asunción", "Santiago"],
        answer: 1
    },
    {
        question: "Ibu kota dari Indonesia!?",
        choices: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        answer: 1
    },
    {
        question: "Ibu kota dari malaysia apa hayo!?",
        choices: ["Johor Bahru", "Penang", "Kuala Lumpur", "Putrajaya"],
        answer: 1
    },
    {
        question: "Ibu kota dari zambia apa hayo!?",
        choices: ["Harare", "Lusaka", "Nairobi", "Lilongwe"],
        answer: 1
    }
] 


export function checkAnswer (question: Question, picked: number) :boolean { 
    return picked === question.answer

}

export function getResultMessage (score: number, total: number) :String { 
    const percent = (score / total) * 100
    if (percent >= 80) { 
        return "Kamu keren sekali!"
    } else if (percent >= 50) { 
        return "Kamu cukup keren"
    } else { 
        return `Jangan menyerah by Dmasiv`
    }
}
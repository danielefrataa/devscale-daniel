// Kuis
import { select } from '@inquirer/prompts'
import { questions, checkAnswer, getResultMessage } from './libs/quiz'

let score = 0

for (const quest of questions) {
    const picked = await select({
        message: quest.question,
        choices: quest.choices.map((text, index) => ({ name: text, value: index })),
    })

    if (checkAnswer(quest, picked)) {
        score++
    }
}

console.log(`Skor kamu: ${score} dari ${questions.length}`)
console.log(getResultMessage(score, questions.length))
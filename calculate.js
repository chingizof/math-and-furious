function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

let questions = []

for (let i=0; i<20; i++) {
    let first = generateRandomInteger(30)
    let second = generateRandomInteger(30)
    let question={}
    question["first"] = first
    question["sign"]='*'
    question['second']=second
    question['answer']=first*second
    questions.push(question)
}

for (let i=0;i<20;i++) {
    console.log(questions[i], ',')
}
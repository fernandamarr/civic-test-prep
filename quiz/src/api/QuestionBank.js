const qBank = [
    {
        question: "What is the supreme law of the land?",
        answers: ["The Bible", "The Constitution", "The Government", "The President"],
        correct: ["The Constitution"],
        questionId: "1"
    },
    {
        question: "What does the Constitution do?",
        answers: ["Sets up the government, defines the government and protects the basic rights of Americans", "Announces our independence, gives the President rights, and provides schooling and education"],
        correct: ["Sets up the government, defines the government and protects the basic rights of Americans"],
        questionId: "2"
    },
    {
        question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
        answers: ["We the Citizens", "We the Americans", "We the People"],
        correct: ["We the People"],
        questionId: "3"
    }
]

export default (n = 100) => 
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
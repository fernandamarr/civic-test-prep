const qBank = [
    {
        question: "What is the supreme law of the land?",
        answers: ["The Government", "The President", "The Constitution"],
        correct: ["The Constitution"],
        questionId: 1
    },
    {
        question: "What does the Constitution do?",
        answers: ["Sets up the government, defines the government and protects the basic rights of Americans", "Announces our independence, gives the President rights, and provides schooling and education"],
        correct: ["Sets up the government, defines the government and protects the basic rights of Americans"],
        questionId: 2
    },
    {
        question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
        answers: ["We the Citizens", "We the Americans", "We the People"],
        correct: ["We the People"],
        questionId: 3
    },
        {
        question: "What is an amendment?",
        answers: ["A change or addition to the Constitution", "A change to the name of a U.S. state", "An addition to the U.S. Senate"],
        correct: ["A change or addition to the Constitution"],
        questionId: 4
    },
    {
        question: "What do we call the first ten amendments to the Constitution?",
        answers: ["The Ten Amendments", "The Bill of Rights", "The Constitution"],
        correct: ["The Bill of Rights"],
        questionId: 5
    },
    {
        question: "What is one right or freedom from the First Amendment?",
        answers: ["Speech", "Law", "Education"],
        correct: ["Speech"],
        questionId: 6
    },
    {
        question: "How many amendments does the Constitution have?",
        answers: ["Fifty", "Thrity-seven", "Twenty-seven"],
        correct: ["Twenty-seven"],
        questionId: 7
    },
    {
        question: "What did the Declaration of Independence do?",
        answers: ["Declared Columbus Day a National Holiday", "Announced our independence from Great Britain", "Announced our alliance to South America"],
        correct: ["Announced our independence from Great Britain"],
        questionId: 8
    },
    {
        question: "What are three rights in the Declaration of Independence?",
        answers: ["Liberty, freedom of speech, right to travel","Life, religion, pursuit of wealth", "Life, liberty, pursuit of happiness"],
        correct: ["Life, liberty, pursuit of happiness"],
        questionId: 9
    }, 
    {
        question: "What is freedom of religion?",
        answers: ["You can petition the government to practice any religion", "You can practice or not practice any religion", "You can practice Christianity"],
        correct: ["You can practice or not practice any religion"],
        questionId: 10
    }
]

export default (n = 10) => 
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
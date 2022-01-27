import Question from "./Question";

function QuizScreen() {
    return (
        <div className='quiz-screen'>
            <img src="images/blob-yellow.svg" alt="" className="yellow-blob"/>
            <img src="images/blob-blue.svg" alt="" className="blue-blob"/>
            <div className='questions'>
                <Question />
                <Question />
                <Question />
                <Question />
                <button className="btn small">Check answers</button>
            </div>
        </div>
    );
}

export default QuizScreen;
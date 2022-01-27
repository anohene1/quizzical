import './App.css';
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import {useState} from "react";

function App() {

    const [started, setStarted] = useState(false);

    function startQuiz() {
        setStarted(true);
    }

    return (
    <div className="App">
        {
            started ? <QuizScreen /> : <StartScreen onStart={startQuiz} />
        }
    </div>
  );
}

export default App;

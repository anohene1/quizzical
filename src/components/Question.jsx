import Option from "./Option";

function Question() {
    return (
        <div className='question'>
            <p className="question--text">How would one say goodbye in Spanish?</p>
            <Option selected={true} />
            <Option />
            <Option />
            <Option />
        </div>
    );
}

export default Question;
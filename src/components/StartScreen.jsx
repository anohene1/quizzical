function StartScreen(props) {
    return (
        <div className='start-screen'>
            <img src="images/blob-yellow.svg" alt="" className="yellow-blob"/>
            <img src="images/blob-blue.svg" alt="" className="blue-blob"/>
            <div>
                <h2 className="title">Quizzical</h2>
                <button className="btn big" onClick={props.onStart}>Start quiz</button>
            </div>
        </div>
    );
}

export default StartScreen;
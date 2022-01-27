function Option(props) {
    return (
        <button className={`option ${props.selected && 'selected'}`}>Adios</button>
    );
}

export default Option;
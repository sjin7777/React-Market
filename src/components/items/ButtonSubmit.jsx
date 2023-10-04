function ButtonSubmit(props) {
    
    const { text } = props;
    const handleClick = (event) => {
        
    }

    return (
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}

export default ButtonSubmit;
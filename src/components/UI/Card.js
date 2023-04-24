import '../style/Card.css';

// Sending a classes variable to be able to pass in any prop of class in our Card component
const Card = (props) => {
    const classes = props.className;

    return <div className={classes}>{props.children}</div>
}

export default Card;
import CartIcon from "../Cart/Carticon";
import classes from "./HeaderCartButton.module.css";

const HeadCartButton = props => {
    return (
        <button className = {classes.button}>
            <span className= {classes.icon}> <CartIcon></CartIcon> </span>
            <span>Your Cart</span>
            <span className= {classes.badge}>3</span>
        </button>
    )
}

export default HeadCartButton;
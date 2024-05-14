function Cart(){
    return (
        <div className="cartDiv">
            <p className="cart">Cart</p>
            <input type="number" readOnly value="0" className="counter"></input>
        </div>
    )
}

export default Cart;
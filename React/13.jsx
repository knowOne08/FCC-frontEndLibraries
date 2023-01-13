// React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. 
const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line
  ShoppingCart.defaultProps = {
    items: 0
  };
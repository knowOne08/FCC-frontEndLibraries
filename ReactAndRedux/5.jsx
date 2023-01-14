// mapStateToProps() and mapDispatchToProps().
// In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch. Once these functions are in place, you'll see how to use the React Redux connect method to connect them to your components
const state = [];

// Change code below this line

const mapStateToProps = (state)=>{
  return {
    messages: state
  }
}
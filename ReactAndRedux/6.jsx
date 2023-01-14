// The mapDispatchToProps() function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store. It's similar in structure to the mapStateToProps() function
// each property returns a function that calls dispatch with an action creator and any relevant action data.
const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  // Change code below this line
  const mapDispatchToProps = (dispatch) => {
      return {
          submitNewMessage: (message)=>{
              dispatch(addMessage(message))
          }
      }
  }
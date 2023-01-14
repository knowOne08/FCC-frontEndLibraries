// connect() method takes two optional arguments, mapStateToProps() and mapDispatchToProps(). They are optional because you may have a component that only needs access to state but doesn't need to dispatch any actions, or vice versa.
// syntx: connect(mapStateToProps, mapDispatchToProps)(MyComponent)

const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  const mapStateToProps = (state) => {
    return {
      messages: state
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message));
      }
    }
  };
  
  class Presentational extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h3>This is a Presentational Component</h3>
    }
  };
  
  const connect = ReactRedux.connect;
  // Change code below this line
  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps) (Presentational)
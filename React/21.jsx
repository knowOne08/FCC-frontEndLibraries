// React provides a method for updating component state called setState
// this.setState(), passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data
// React expects you to never modify state directly, instead always use this.setState() when state changes occur
// setState method can be asynchronous.

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Change code below this line
        this.setState({
          name: "React Rocks!"
        });
      // Change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };

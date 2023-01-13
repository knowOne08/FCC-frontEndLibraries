// Use && for a More Concise Conditional
// Syntax {condition && <p>markup</p>}
// If the condition is true, the markup will be returned. If the condition is false, the operation will immediately return false after evaluating the condition and return nothing.
// You can include these statements directly in your JSX and string multiple conditions together by writing && after each one. This allows you to handle more complex conditional logic in your render() method without repeating a lot of code.
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      // Change code below this line
  
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           {this.state.display &&  <h1>Displayed!</h1>}
         </div>
      );
  
    }
  };
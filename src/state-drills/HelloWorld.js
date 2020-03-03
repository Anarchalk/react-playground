import React, {Component} from 'react';

class HelloWorld extends Component {
 state = { 
     who: 'world'
 }

 handleClick =(e) => {
     console.log(e.currentTarget.name)
     this.setState(
         {
             who:e.currentTarget.name
         }
     )
 }

    // handleClick =(e) => {
    //     console.log(e.currentTarget.name)
    //     this.setState({
    //         who: e.currentTarget.name
    //     }

    //     )
    // }

    render() {
      return (
          <div className='App'>
              <p>Hello {this.state.who}</p>
              <button name='World' onClick={this.handleClick}>World</button>
              <button name='Friend' onClick={this.handleClick}>Friend</button>
              <button name='React' onClick={this.handleClick}>React</button>
          </div>
    //     <div className="App">
    //         <p>Hello {this.state.who}</p>
    //         <button name='World' onClick={this.handleClick}>World</button>
    //         <button name='Friend' onClick={this.handleClick}>Friend</button>
    //         <button name='React' onClick={this.handleClick}>React</button>
    //    </div>
      );
    }
  }
  
  export default HelloWorld;
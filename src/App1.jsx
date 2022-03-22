import React, { Component } from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';
import './App1.css';

class App1 extends Component  {
  render()  {
    return(
      <div className="App">
        <Form inline>
          <h1>Enter Your Birthday Here</h1>
          <FormControl type="date">
          </FormControl>
          {' '}
          <button>
            Submit
          </button>
        </Form>
      </div>
    )
  }
}

export default App1;
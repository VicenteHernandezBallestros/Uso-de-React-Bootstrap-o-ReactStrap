import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup'






class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  render() {
    return (
      
      <div>

       <Alert className='primary text-center'><h1>Tareas por hacer</h1></Alert>

       <Form onSubmit={this.handleSubmit} className="pt-4 w-25 mx-auto text-center">      
          <Form.Label htmlFor="new-todo">
            <h3>¿Qué necesita hacer?</h3>
          </Form.Label>
            
          <input type={'text'} className="form-control " placeholder='Nueva tarea para agregar' 
            id='new-todo' onChange={this.handleChange}
            value={this.state.text}>
          </input>

          <div className='pt-3'>
          <button className='btn btn-lg btn-primary'>
           Añadir tarea #{this.state.items.length + 1}
         </button>
          </div>
        
         
        </Form>

        <TodoList items={this.state.items} />
      </div>

    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });   
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  
  }
}
class TodoList extends React.Component {
  render() {
    return (

      <><ListGroup className='pt-4 w-25 mx-auto'>
        <ListGroup.Item variant='success' className='p-t1'>{this.props.items.map(item => (<li key={item.id}>{item.text}</li>))}</ListGroup.Item>
      </ListGroup>
      </>

    );
  }
}

ReactDOM.render(
    <TodoApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

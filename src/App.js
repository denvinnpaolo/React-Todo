import React from 'react';
import ToDoList from "./components/TodoComponents/TodoList";


const list2Do=[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      list2Do
    };
  };

  toggleTask = TaskID =>{
    this.setState({
      list2Do: this.state.list2Do.map(task =>{
        if(task.id===TaskID){
          return{...task, completed: !task.completed};
        }
        {
          return task;
        }
      })
    });
  };

  addItem = ( e, itemName ) => {
    e.preventDefault();

    const newItem={
      task: itemName,
      id: Date.now(),
      completed:false
    };
    console.log(newItem)
    this.setState=({
      list2Do: [...this.state.list2Do, newItem]
    });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>To DO List</h2>
        </div>
        <div className="mainContent">
          <ToDoList 
          list={this.state.list2Do} 
          toggleItem={this.toggleItem} 
          addItem={this.addItem}
          />
        </div>
      </div>
    );
  }
}

export default App;

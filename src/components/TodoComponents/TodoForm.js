import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            toDoItem:""
        };
    }

    handleChanges = e => {
        this.setState({toDoItem : e.target.value})
    };

    handleSubmit = e => {
        this.props.addItem(e, this.state.toDoItem)
        this.setState({ toDoItem : "" })
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.toDoItem}
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        );
    }
};

export default TodoForm;
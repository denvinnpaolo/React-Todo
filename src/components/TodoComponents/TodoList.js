// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const ToDoList = props =>{
    
    return(
        <div className>
            <div className="todoContainer">
                {props.list.map(task=>(
                    <Todo key={task.id} task={task} toggleItem={props.toggleTask}/>
                ))}
            </div>
            <div className="todoFormContainer">
                <TodoForm addItem={props.addItem}/>
            </div>
        </div>

    )
};

export default ToDoList;

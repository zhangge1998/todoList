/**
 * Created by ubuntu on 5/8/18.
 */
import React from 'react'
import TodoItem from './todoItem'
class TodoMain extends React.Component{
    isChecked() {
        this.setState()
    }
    render(){
        if(this.props.todos.length == 0) {
            return null
        }
        else{
            const todos = this.props.todos;
            var todoItems = todos.map(function(todo, index){
                return(
                    <TodoItem key={index} text={todo.text} isDone={todo.isDone}/>
                )
            });
            return(
                <ul>{todoItems}</ul>
            )
        }
    }
}
export default TodoMain
/**
 * Created by ubuntu on 5/8/18.
 */
import React from 'react'
import TodoItem from './todoItem'
class TodoMain extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        if(this.props.todos.length == 0) {
            return null
        }
        else{
            let todos = this.props.todos;
            let handleFinish = this.props.changeFinish;
            let handleDelete = this.props.changeDelete;
            let todoItems = todos.map(function(todo, index){
                return(
                    <TodoItem key={index} text={todo.text} isDone={todo.status} changeFinish={handleFinish} changeDelete={handleDelete}/>
                )
            });
            return(
                <ul id="list">{todoItems}</ul>
            )
        }
    }
}
export default TodoMain
/**
 * Created by ubuntu on 5/7/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'
import TodoMain from './todoMain'
import Footer from './footer'
class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos:[]
        };
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(item) {
        this.setState(function(prevState) {
            let newTodos = prevState.todos;
            newTodos.push(item);
            return(
            {todos: newTodos}
            )
        })
    }
    render() {
        return(
            <div>
                <Header addTodo={this.addTodo}/>
                <TodoMain todos={this.state.todos} />
                <Footer />
            </div>
        )
    }
}


ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
);
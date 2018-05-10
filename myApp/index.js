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
            todos:[],
            finished: 0
        };
        this.addTodo = this.addTodo.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAll = this.handleAll.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.clearDone = this.clearDone.bind(this);
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
    handleFinish(obj) {
        var num = 0;
        this.setState(this.state.todos.map((item)=>{
            if(item.text === obj.text) {
                item.status =obj.status;
            }
            if(item.status === 1){
                num++;
            }
            this.setState({finished: num});
        }))
    }
    handleDelete(obj) {
        this.setState((prevState)=>{
            var newtodos = prevState.todos.filter((item) => {
                return item.text !== obj.text
            });
            var num = 0;
            newtodos.map(item=>{
                if(item.status === 1) {
                    num++;
                }
            });
            return ({todos: newtodos,finished: num});
        });
    }
    handleAll() {
        this.setState((prevState)=>{
            return({
                todos: prevState.todos,
                finished: prevState.finished
            })
        })
    }

    handleActive() {
        // this.setState((prevState)=>{
        //     var active = prevState.todos.filter((item)=>{
        //         return item.status === 0
        //     });
        //     return({
        //         todos: active
        //     })
        // })
    }
    handleCompleted() {
        // this.setState((prevState)=>{
        //     var completed = prevState.todos.filter((item)=>{
        //         return item.status === 1
        //     });
        //     return({
        //         todos: completed
        //     })
        // })
    }
    clearDone() {
        var newTodos = this.state.todos.filter(item =>{
            return item.status === 0
        });
        var finished = newTodos.filter(item=>{
            return item.status === 1
        });
        this.setState({todos: newTodos, finished: finished.length})
    }


    render() {
        return(
            <div>
                <Header addTodo={this.addTodo}/>
                <TodoMain todos={this.state.todos} changeFinish={this.handleFinish}
                          changeDelete={this.handleDelete}/>
                <Footer todos={this.state.todos} finished={this.state.finished} showAll={this.handleAll}
                        showActive={this.handleActive} showCompleted={this.handleCompleted} clearDone={this.clearDone}
                />
            </div>
        )
    }
}


ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
);
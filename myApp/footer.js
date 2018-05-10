/**
 * Created by ubuntu on 5/8/18.
 */
import React from 'react'
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.showAll = this.showAll.bind(this);
        this.showCompleted = this.showCompleted.bind(this);
        this.showActive = this.showActive.bind(this);
        this.clearDone = this.clearDone.bind(this);

    }
    showAll() {
        this.props.showAll();
    }
    showCompleted() {
        this.props.showCompleted();
    }
    showActive() {
        this.props.showActive();
    }
    clearDone() {
        this.props.clearDone();
        // console.log(this.props.todos);
    }
    render() {
        let left = this.props.todos.length - this.props.finished;
        return(
            <div>
                <span id="left">{left} item left</span>
                <button onClick={this.showAll} id="all">All</button>
                <button onClick={this.showCompleted} id="completed">Completed</button>
                <button onClick={this.showActive} id="active">Active</button>
                <button onClick={this.clearDone} id="clear">clearDone</button>
            </div>
        )
    }
}

export default Footer
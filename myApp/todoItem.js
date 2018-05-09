/**
 * Created by ubuntu on 5/8/18.
 */
import React from 'react'
import ReactDom from 'react-dom'
class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOver = this.handleOver.bind(this);
        this.handleOut = this.handleOut.bind(this);
    }
    handleClick() {
        var status = this.props.isDone;
        console.log(status);
        if(status === 0){
            status = 1;
        }
        else{
            status = 0;
        }
        var obj = {
            text: this.props.text,
            status: status
        };
        this.props.changeFinish(obj);
    }
    handleDelete(){
        var status = this.props.isDone;
        var obj = {
            text: this.props.text,
            status: status
        };
        this.props.changeDelete(obj);
    }
    handleOver() {
        var Btn = document.getElementsByClassName('destroy');
        ReactDom.findDOMNode(Btn).style.display = 'block';
    }
    handleOut() {

    }
    render() {
        return(
            <li onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
                <input type="checkBox" checked={this.props.isDone} onClick={this.handleClick.bind(this)}/>
                {this.props.text}
                <button className="destroy" onClick={this.handleDelete.bind(this)}>X</button>
            </li>
        )
    }
}
export default TodoItem
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
    componentDidMount() {

    }
    handleClick() {
        let status = this.props.isDone;
        if(status === 0){
            status = 1;
            // this.refs.text.className = 'choose';
        }
        else{
            status = 0;
            // this.refs.text.className = '';
        }
        let obj = {
            text: this.props.text,
            status: status
        };
        this.props.changeFinish(obj);
    }
    handleDelete(){
        // this.refs.text.className = '';
        let status = this.props.isDone;
        let obj = {
            text: this.props.text,
            status: status
        };
        this.props.changeDelete(obj);
    }
    handleOver() {
        this.refs.des.style.display = 'block';
    }
    handleOut() {
        this.refs.des.style.display = 'none';
    }
    render() {
        return(
            <li onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
                <input type="checkBox" className="fu" checked={this.props.isDone} onClick={this.handleClick.bind(this)}/>
                <span ref="text">{this.props.text}</span>
                <button className="destroy" ref="des" onClick={this.handleDelete.bind(this)}></button>
            </li>
        )
    }
}
export default TodoItem
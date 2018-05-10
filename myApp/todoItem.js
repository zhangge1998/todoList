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
        // this.handleOver = this.handleOver.bind(this);
        // this.handleOut = this.handleOut.bind(this);
    }
    componentDidMount() {

    }
    handleClick() {
        let status = this.props.isDone;
        if(status === 0){
            status = 1;
        }
        else{
            status = 0;
        }
        let obj = {
            text: this.props.text,
            status: status
        };
        this.props.changeFinish(obj);
    }
    handleDelete(){
        let status = this.props.isDone;
        let obj = {
            text: this.props.text,
            status: status
        };
        this.props.changeDelete(obj);
    }
    render() {
        return(
            <li>
                <input type="checkBox" checked={this.props.isDone} onClick={this.handleClick.bind(this)}/>
                {this.props.text}
                <button className="destroy" onClick={this.handleDelete.bind(this)}></button>
            </li>
        )
    }
}
export default TodoItem
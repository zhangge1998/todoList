/**
 * Created by ubuntu on 5/8/18.
 */
import React from 'react'
class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleClick() {
        var status = this.props.isDone;
        status = (status === 0 ? 1 : 0);
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
    render() {
        return(
            <li>
                <input type="checkBox" onClick={this.handleClick.bind(this)}/>
                {this.props.text}
                <button onClick={this.handleDelete.bind(this)}>X</button>
            </li>
        )
    }
}
export default TodoItem
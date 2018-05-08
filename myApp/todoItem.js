/**
 * Created by ubuntu on 5/8/18.
 */
import React from 'react'
class TodoItem extends React.Component {
    handleChange(event) {
        var isChecked = event.target.checked;
    }

    render() {
        return(
            <li>
                <input type="checkBox" checked={this.props.isDone} onChange={this.handleChange.bind(this)}/>
                {this.props.text}
                <button>X</button>
            </li>
        )
    }
}
export default TodoItem
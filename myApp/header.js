/**
 * Created by ubuntu on 5/8/18.
 */
import React from 'react'
class Header extends React.Component {
    handleChange(event) {
        if(event.keyCode == 13) {
            let item = event.target.value;
            if(item != ''){
                let newtodo = {
                    text: item,
                    status: 0
                };
                event.target.value = '';
                this.props.addTodo(newtodo);
            }

        }
    }
    render(){
        return (
            <div>
                <h1>todos</h1>
                <input id="text" type="text" placeholder="What should to be done?" onKeyDown={this.handleChange.bind(this)} autoFocus="autoFocus"/>
            </div>
        )
    }
}
export default Header
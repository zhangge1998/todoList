/**
 * Created by ubuntu on 5/8/18.
 */
import React from 'react'
class Footer extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <button onClick={this.props.showAll.bind(this)}>All</button>
                <button onClick={this.props.showCompleted.bind(this)}>Completed</button>
                <button onClick={this.props.showActive.bind(this)}>Active</button>
            </div>
        )
    }
}

export default Footer
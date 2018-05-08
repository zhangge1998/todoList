/**
 * Created by ubuntu on 5/8/18.
 */
import React from 'react';
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nameValue: '',
            assayValue: '',
            flavor: 'coconut'
        };
        this.handleAssayChange = this.handleAssayChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFlavorChange = this.handleFlavorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event) {
        this.setState({nameValue: event.target.value});
    }
    handleAssayChange(event) {
        this.setState({assayValue: event.target.value});
    }
    handleFlavorChange(event) {
        this.setState({flavor: event.target.value})
    }
    handleSubmit(event) {
        alert('name: ' + this.state.nameValue + '\n' + 'assay:' + this.state.assayValue + '\n' + 'flavor: ' + this.state.flavor);
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.nameValue} onChange={this.handleNameChange}/>
                </label>
                <br/>
                <label>
                    Essay:
                    <textarea type="text" value={this.state.assayValue} onChange={this.handleAssayChange}/>
                </label>
                <br/>
                <label>
                    Flavor:
                    <select value={this.state.flavor} onChange={this.handleFlavorChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default NameForm;
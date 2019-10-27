import React, { Component } from 'react';

class addName extends Component {
    constructor() {
        super();
        this.state = { formValid:false};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
        if(target.type === 'text' && target.value == ''){
            console.log(target.value);
this.setState({ formValid:false});
this.setState({message:'please enter a name'});
        }
        else{
            this.setState({ formValid:true});
            this.setState({message:''});
        }
        console.log(this.state); 
    }
    handleSubmit(event) {
        
        console.log(this.state);
        event.preventDefault();
        this.setState({message:'Submitted successfully!'});
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <div className="result">{ this.state.message }</div>
                <input type="hidden" value=''/>
                <label>Enter the name
                    <input type="text" name='name'  onChange={this.handleChange}></input>
                </label>
                <label>Select Gender
                <select  name='gender' onChange={this.handleChange}>
            <option value="select">select</option>
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select>
                </label>
                <input disabled={!this.state.formValid} type="submit" value="submit"></input>
            </form>
        )
    }

}
export default addName;

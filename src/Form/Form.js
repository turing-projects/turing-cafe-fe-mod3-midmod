import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: '',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Name' 
                    name='name'
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.name}  
                />
                <input 
                    type='text' 
                    placeholder='Date (mm/dd)'
                    name='date'  
                    onChange={(event) => this.handleChange(event)} 
                    value={this.state.date}
                    />
                <input 
                    type='text' 
                    placeholder='Time'
                    name='time'  
                    onChange={(event) => this.handleChange(event)} 
                    value={this.state.time}
                    />
                <input 
                    type='text' 
                    placeholder='Number of Guests'
                    name='number'  
                    onChange={(event) => this.handleChange(event)} 
                    value={this.state.number}
                    />
                <button>Make Reservation</button>
            </form>
        )
    }
}

export default Form;
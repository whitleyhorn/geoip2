import React, { Component } from 'react';

class LatLongGetter extends Component {
    constructor(props) {
        super(props);
        this.state = {ip: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();

        // request options
        const options = {
            method: 'POST',
            body: JSON.stringify({ip: this.state.ip}),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('../../post', options)
            .then(res => res.json())
            .then(this.handleResponse)
            .catch(err => alert(err))

        this.setState({ip: ''});
    }

    handleResponse(res){
        if(res.hasOwnProperty('error')){
            alert("Error: " + res.error);
        } else {
            const {latitude, longitude} = res;
            alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
        }
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="ip">IP: </label>
                <input type="text" id="ip" name="ip" value={this.state.ip} onChange={this.handleChange} />
                <button disabled={this.state.ip.length === 0}>Submit</button>
            </form>
        );
    }
}

export default LatLongGetter;

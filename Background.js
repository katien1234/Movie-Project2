import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


var userInput;


class Background extends Component {
    constructor() {
        super();
        this.state = {
            movies: "example"
        }

        this.update = () => {
            userInput =document.getElementById("InputId").value
            console.log(userInput);

            axios({
                method: 'get',
                url: 'http://www.omdbapi.com/?s=' + userInput + '&apikey=e99ef3cf',
                responseType: 'json'

            })

                .then(response => this.setState({ movies: response.data.search }));



        }
    }

    render() {
        return (
            <div className="Background">
                <header className="App-Header">
                     <input id="InputId"type="text"/>
                    <button onClick={this.update}>AppButton</button>
                    <p>
                        {this.state.movies[0].Title}
                    </p>
                </header>
            </div>
        );
    }
}

export default Background;




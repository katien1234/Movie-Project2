import React, { Component } from 'react';
import axios from 'axios';

var userInput;
var data;


class Search extends Component {
    constructor() {
        super();
        
        this.state = {
            moreinformation: "example"
        }
        this.update = () => {

            axios({
                method: 'get',
                url: 'http://www.omdbapi.com/?s=' + this.props.searchID + '&apikey=e99ef3cf',
                responseType: 'json'
            })
                .then(response => this.setState({ moreinformation: response.data.Search }));
        }
              
    }

    render() { 
        return (
            <div className="Search">
                <header>
                  <button onClick={this.update}>Search for more information</button>
                  <p>
                      {this.state.moreinformation[0].Title}
                      </p>
                </header>
            </div>
        );
    }
}

export default Search;



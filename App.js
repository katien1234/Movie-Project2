import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header.js';



var userInput;
var data;

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            movies: "example"
        }

        this.update = () => {
            userInput = document.getElementById("userInput").value
            console.log(userInput);

            axios({
                method: 'get',
                url: 'http://www.omdbapi.com/?s=' + userInput + '&apikey=e99ef3cf',
                responseType: 'json'
            })
                .then(response =>{
                  if(response.data.Search !== undefined){
                    this.setState({ 
                  
                  
                last5: this.state.last4, 
                last4: this.state.last3,   
                last3: this.state.last2,  
                last2: this.state.last, 
                last: this.state.movies[0].Title,
                movies: response.data.Search 
                });
                  }
              else {
                alert("Enter a movie title");
              }

                  });


        }
    }

    render() {
        return (
            <div className="App">
              <Header/>
                <header className="App-Header">
                  <div>
                    <input id="userInput" type="text" placeholder="Enter Movie Name"/>
                    </div>
                  <button onClick={this.update}>Search</button>
                  <p>
                        {this.state.movies[0].Title} <br/><br/>
                        {this.state.movies[0].Year} <br/><br/>
                        {this.state.movies[0].imdbID}<br/><br/>
                      
                    </p>
                    <img src={this.state.movies[0].Poster}/><br/><br/>
             
              Previous movies: <br/><br/>
              {this.state.last}<br/><br/>
              {this.state.last2}<br/><br/>
              {this.state.last3}<br/><br/>
              {this.state.last4}<br/><br/>
              {this.state.last5}<br/><br/>
                </header>
            
              
            </div>
        );
    }
}

export default App;



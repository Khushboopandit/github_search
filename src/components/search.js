import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./suggestions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserRepo from "./user_repo";
//puting api link as a value of const
const api = `https://api.github.com/search/users?q=`;
const repo_api = `https://api.github.com/search/repositories?q=`;

// the main serach component is creating here
class Search extends Component {
  // give the state here whoc can always change
  state = {
    query: "", // query value will store here whenever
    results: [], // result data will stored here
    user_query: "",
    user_result: []
  };

  getInfo = () => {
    //
    axios.get(`${api}${this.state.query}`).then(({ data }) => {
      if (this.state.query == data) {
        this.setState({
          results: data.items
        });
      }
      console.log(data.items);
    });
  };

  // function name inputhandler here where the quesry search value is stored
  inputHandler = () => {
    this.setState({ query: this.search.value });
    if (this.state.query.length > 1) {
      this.getInfo()

    }
  };
  // that data which we want to display in clientside
  render() {
    console.log(this.getRepo);
    return (
      <Router>
        <div>
          <input
            type="text"
            placeholder="search here..."
            ref={input => (this.search = input)}
            onChange={this.inputHandler}
          />
          <div>
            <Route
              exact
              path="/"
              render={props => (
                <Suggestions
                  onClick={this.inputHandler}
                  results={this.state.results}
                />
              )}
            />
            <Route
              exact
              path="/userrepos"
              render={props => (
                <UserRepo
                  onClick={this.inputHandler}
                  results={this.state.results}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}
export default Search;

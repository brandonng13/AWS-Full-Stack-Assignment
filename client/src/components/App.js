import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavigationBar from './NavBar';
import Graph from './Graph';
import Map from './Map';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
	render() {
		return (
      <div>
          <NavigationBar />
          <BrowserRouter className="container">
						<Route exact path="/" component={Map} />
						<Route path="/Graph" component={Graph} />
				</BrowserRouter>
      </div>
		);
	}
}

export default connect(null, actions)(App);
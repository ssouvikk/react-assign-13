import React, { Component } from "react";
import "./App.css";
import { Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage/MainPage";

export default class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="blue">
					<Route exact path="/" render={() => <Redirect to="/videoWatch/1" />} />
					<Route path={"/videoWatch/:id"} component={MainPage} />
				</div>
			</BrowserRouter>
		);
	}
}

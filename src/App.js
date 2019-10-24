import React, { Component } from "react";
import "./App.scss";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";

class App extends Component {
  constructor() {
    super();
    let userDetailsLocal;
    if (localStorage.getItem("userDetails") !== null) {
      this.userDetailsLocal = localStorage.getItem("userDetails");
      this.userDetailsLocal = JSON.parse(userDetailsLocal);

      console.log(this.userDetailsLocal);
      this.state = {
        userDetails: this.userDetailsLocal,
        isUserLoggedIn: true
      };
    } else {
      this.state = {
        userDetails: {},
        isUserLoggedIn: false
      };
    }
  }
  responseGoogle = response => {
    if (!response.error) {
      localStorage.setItem("isUserLoggedIn", "true");
      var loggedInstate = localStorage.getItem("isUserLoggedIn");
      localStorage.setItem("userDetails", JSON.stringify(response.profileObj));

      //console.log(loggedInstate);

      this.setState({
        userDetails: response.profileObj,
        isUserLoggedIn: true
      });
    }
    console.log(response);
  };
  logout = () => {
    localStorage.clear();
    this.setState({
      isUserLoggedIn: false
    });
  };
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        {" "}
        {!this.state.isUserLoggedIn && (
          <GoogleLogin
            clientId="446819204925-vab6anm4a5ahsqbgbu8571a046hrg49g.apps.googleusercontent.com" //TO BE CREATED
            render={renderProps => (
              <button
                className="button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Log in with Google{" "}
              </button>
            )}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        )}{" "}
        {this.state.isUserLoggedIn && (
          <div className="userDetails-wrapper">
            <div className="details-wrapper">
              <GoogleLogout
                clientId="446819204925-vab6anm4a5ahsqbgbu8571a046hrg49g.apps.googleusercontent.com" //TO BE CREATED
                render={renderProps => (
                  <button
                    className="logout-button"
                    onClick={renderProps.onClick}
                  >
                    Log Out{" "}
                  </button>
                )}
                onLogoutSuccess={this.logout}
              />
              <div className="image">
                <img src={this.state.userDetails.imageUrl} />{" "}
              </div>{" "}
              <div className="name">
                Welcome Mr. {this.state.userDetails.givenName}{" "}
                {this.state.userDetails.familyName}{" "}
              </div>{" "}
              <div className="email">
                {" "}
                <i> {this.state.userDetails.email} </i>
              </div>
            </div>{" "}
            <div className="bar" />
            <div className="stand"> welcome to Name search App! </div>{" "}
          </div>
        )}{" "}
      </div>
    );
  }
}

export default App;

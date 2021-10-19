import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // usually used only to initialize the state
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null,
      errorMsg: "",
    };
  }

  componentDidMount() {
    // this method is invoked only when the component is rendered
    // for the first time
    console.log("the component is rendered");

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        // this setTimeout is used only to display the spinner
        setTimeout(() => {
          this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        }, 1000);
      },
      (err) => {
        this.setState({
          errorMsg: err.message,
        });
      }
    );
  }

  componentDidUpdate() {
    // this is called every time the component is updated
    console.log("component has re-rendered");
  }

  renderContent() {
    let component;

    if (this.state.errorMsg && !this.state.lat) {
      component = <div>{this.state.errorMsg}</div>;
    } else if (!this.state.errorMsg && this.state.lat) {
      component = <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    } else {
      component = <Spinner message="Please accept location request" />;
    }

    return component;
  }

  render() {
    return (
      // if the parent requires certain properties, then we can wrap our component with that div
      // then call that component inside this wrapped div
      <div className="common-properties">{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

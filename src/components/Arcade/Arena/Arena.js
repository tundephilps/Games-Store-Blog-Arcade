import React from "react";
import Games from "../Games/Games";
import "./Arena.css";

class Arena extends React.Component {
  state = {
    showComponent: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showComponent: true });
    }, 5000);
  }

  render() {
    return (
      <>
        {!this.state.showComponent && (
          <div>
            <div className="preloader">
              <h2 className="load-text">LOADING</h2>
              <div className="bar"></div>
            </div>
          </div>
        )}
        {this.state.showComponent && <Games />}
      </>
    );
  }
}

export default Arena;

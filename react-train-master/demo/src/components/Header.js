import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        " https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories "
    };
  }

  handelAll = () => {
    this.setState(() => ({
      url:
        "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories"
    }));
    console.log("all");
  };

  handelJavaScript = () => {
    this.setState(() => ({
      url:
        "https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories "
    }));
    console.log("javaScript", this.state.url);
  };

  handelRuby = () => {
    this.setState(() => ({
      url:
        "https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories "
    }));
  };

  handelCSS = () => {
    this.setState(() => ({
      url:
        "https://api.github.com/search/repositories?q=stars: %3E1+language:css&sort=stars&order=desc&type=Repositories "
    }));
  };

  handelPython = () => {
    this.setState(() => ({
      url:
        "https://api.github.com/search/repositories?q=stars: %3E1+language:java&sort=stars&order=desc&type=Repositories "
    }));
  };

  render() {
    return (
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <li>
          {/* eslint-disable-next-line react/button-has-type */}
          <button
            style={{
              color: "red",
              padding: "1px 6px",
              backgroundColor: "#fff",
              fontWeight: "700",
              fontSize: "18px",
              border: "0"
            }}
            onClick={this.handelAll}
          >
            All
          </button>
        </li>
        <li>
          {/* eslint-disable-next-line react/button-has-type */}
          <button
            style={{
              padding: "1px 6px",
              backgroundColor: "#fff",
              fontWeight: "700",
              fontSize: "18px",
              border: "0"
            }}
            onClick={this.handelJavaScript}
          >
            JavaScript
          </button>
        </li>
        <li>
          {/* eslint-disable-next-line react/button-has-type */}
          <button
            style={{
              padding: "1px 6px",
              backgroundColor: "#fff",
              fontWeight: "700",
              fontSize: "18px",
              border: "0"
            }}
            onClick={this.handelRuby}
          >
            Ruby
          </button>
        </li>
        <li>
          {/* eslint-disable-next-line react/button-has-type */}
          <button
            style={{
              padding: "1px 6px",
              backgroundColor: "#fff",
              fontWeight: "700",
              fontSize: "18px",
              border: "0"
            }}
            onClick={this.handelCSS}
          >
            CSS
          </button>
        </li>
        <li>
          {/* eslint-disable-next-line react/button-has-type */}
          <button
            style={{
              padding: "1px 6px",
              backgroundColor: "#fff",
              fontWeight: "700",
              fontSize: "18px",
              border: "0"
            }}
            onClick={this.handelPython}
          >
            Python
          </button>
        </li>
      </ul>
    );
  }
}
export default Header;

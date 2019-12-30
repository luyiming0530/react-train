import React from "react";
import axios from "axios";
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import Card from "./Card";
import Loading from "./Loadding";
import styles from "../style/Content.css"
import 'font-awesome/css/font-awesome.min.css'

class Content extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = {
      arr: [],
      // eslint-disable-next-line react/no-unused-state
      loading: true,
      // eslint-disable-next-line react/no-unused-state
      color: "all"
    };
  }

  // eslint-disable-next-line react/sort-comp
  fetchData = async url => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      loading: true
    });
    // eslint-disable-next-line react/no-access-state-in-setstate
    const urls = ` https://api.github.com/search/repositories?q=stars:%3E1${url}&sort=stars&order=desc&type=Repositories `;
    const res = await axios.get(urls);
    this.setState({
      arr: res.data.items,
      // eslint-disable-next-line react/no-unused-state
      loading: false
    });
  };

  componentDidMount() {
    const url = "";
    this.fetchData(url);
  }

  handelAll = () => {
    this.setState(() => ({
      color: "all"
    }));
    const url = "";
    this.fetchData(url);
    console.log("all", this.state.color);
  };

  handelJavaScript = () => {
    this.setState(() => ({
      color: "javaScript"
    }));
    const url = "+language:javascript";
    this.fetchData(url);
    console.log("javaScript", this.state.color);
  };

  handelRuby = () => {
    this.setState(() => ({
      color: "ruby"
    }));
    const url = "+language:ruby";
    this.fetchData(url);
    console.log("ruby", this.state.color);
  };

  handelCSS = () => {
    this.setState(() => ({
      color: "css"
    }));
    const url = "+language:css";
    this.fetchData(url);
    console.log("css", this.state.color);
  };

  handelPython = () => {
    this.setState(() => ({
      color: "java"
    }));
    const url = "+language:java";
    this.fetchData(url);
    console.log("handelPython", this.state.color);
  };

  render() {
    return (
      <div>
        <ul style={{ display: "flex", justifyContent: "center" }}>
          <li>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
              className={styles.contentbutton}
              style={{color: this.state.color === "all" ? "red" : "black"}}
              onClick={this.handelAll}
            >
              All
            </button>
          </li>
          <li>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
              className={styles.contentbutton}
              style={{
                color: this.state.color === "javaScript" ? "red" : "black"
              }}
              onClick={this.handelJavaScript}
            >
              JavaScript
            </button>
          </li>
          <li>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
              className={styles.contentbutton}
              style={{
                color: this.state.color === "ruby" ? "red" : "black"
              }}
              onClick={this.handelRuby}
            >
              Ruby
            </button>
          </li>
          <li>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
              className={styles.contentbutton}
              style={{
                color: this.state.color === "css" ? "red" : "black"
              }}
              onClick={this.handelCSS}
            >
              CSS
            </button>
          </li>
          <li>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
              className={styles.contentbutton}
              style={{
                color: this.state.color === "java" ? "red" : "black"
              }}
              onClick={this.handelPython}
            >
              Python
            </button>
          </li>
        </ul>
        {this.state.loading ? <Loading /> : <Card arr={this.state.arr} />}
      </div>
    );
  }
}

export default Content;

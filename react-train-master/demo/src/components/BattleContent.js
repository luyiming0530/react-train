import React from "react";
import icon from "../assets/battle-one.svg";

class BattleContent extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center"
        }}
      >
        <div style={{ marign: "100px 0" }}>
          <h3
            style={{ fontWeight: "normal", fontSize: "28px", margin: "10px" }}
          >
            Enter two Github users
          </h3>
          <div>
            <img style={{ width: "140px" }} src={icon} alt="" />
          </div>
        </div>
        <div>
          <h3
            style={{ fontWeight: "normal", fontSize: "28px", margin: "10px" }}
          >
            Battle
          </h3>
          <div>
            <img style={{ width: "140px" }} src={icon} alt="" />
          </div>
        </div>
        <div>
          <h3
            style={{ fontWeight: "normal", fontSize: "28px", margin: "10px" }}
          >
            See the winner
          </h3>
          <div>
            <img style={{ width: "140px" }} src={icon} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default BattleContent;

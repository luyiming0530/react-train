import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ul style={{ display: "flex", fontWeight: "700" }}>
          <li
            style={{
              paddingRight: "10px",
              cursor: "pointer",
              color: "rgb(187, 46, 31)"
            }}
          >
            Popular
          </li>
          <li style={{ cursor: "pointer" }}>Battle</li>
        </ul>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji,react/button-has-type */}
        <button
          style={{
            border: "none",
            background: "transparent",
            fontSize: "30px"
          }}
        >
          🔦
        </button>
      </div>
    );
  }
}
export default Navbar;

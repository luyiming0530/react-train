import React from 'react';
import Icon from '../assets/logo.jpg';
import styles from "../style/card.css";

class BattleCard extends React.Component {
    render() {
        return (
          <div style={{display:'flex',justifyContent: 'space-evenly'}}>
            <div className={styles.card}>
              <h3>Winner</h3>
              <img className={styles.cardimg} src={Icon} alt="" />
              <span className={styles.cardh2}>Score:20</span>
              <h4 className={styles.cardh2}>123</h4>
              <ul className={styles.cardul}>
                <li>
                  <i
                    className={["fa fa-exclamation-triangle",styles.cardi]}
                    aria-hidden="true"
                  />
                  <a href="#" style={{ color: "#333" }}>
                        123123   open issues
                  </a>
                </li>
                <li>
                  <i
                    className={["fa fa-exclamation-triangle",styles.cardi]}
                    aria-hidden="true"
                  />
                  <a href="#" style={{ color: "#333" }}>
                          open issues
                  </a>
                </li>
                <li>
                  <i
                    className={["fa fa-exclamation-triangle",styles.cardi]}
                    aria-hidden="true"
                  />
                  <a href="#" style={{ color: "#333" }}>
                          open issues
                  </a>
                </li>
                <li>
                  <i
                    className={["fa fa-exclamation-triangle",styles.cardi]}
                    aria-hidden="true"
                  />
                  <a href="#" style={{ color: "#333" }}>
                      open issues
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Winner</h3>
              <img className={styles.cardimg} src={Icon} alt="" />
              <span className={styles.cardh2}>Score:20</span>
              <h4 className={styles.cardh2}>123</h4>
              <ul className={styles.cardul}>
                <li>
                  <i
                    className={["fa fa-exclamation-triangle",styles.cardi]}
                    aria-hidden="true"
                  />
                  <a href="#" style={{ color: "#333" }}>
                              open issues
                  </a>
                </li>
                <li>
                  <i
                    className={["fa fa-exclamation-triangle",styles.cardi]}
                    aria-hidden="true"
                  />
                  <a href="#" style={{ color: "#333" }}>
                              open issues
                  </a>
                </li>
                <li>
                  <i
                    className={["fa fa-exclamation-triangle",styles.cardi]}
                    aria-hidden="true"
                  />
                  <a href="#" style={{ color: "#333" }}>
                              open issues
                  </a>
                </li>
                <li>
                  <i
                    className={["fa fa-exclamation-triangle",styles.cardi]}
                    aria-hidden="true"
                  />
                  <a href="#" style={{ color: "#333" }}>
                              open issues
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );

    }
}

export default BattleCard;
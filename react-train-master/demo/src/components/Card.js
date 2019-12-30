import React from "react";
import FontAwesome from 'react-fontawesome'
import styles from "../style/card.css"

class Card extends React.Component {
  render() {
    const list = this.props.arr.map((item, key) => (
      <div
        key={key}
        className={styles.card}
      >
        <h3>#{key + 1}</h3>
        <img
          src={item.owner.avatar_url}
          alt={item.owner.login}
          className={styles.cardimg}
        />
        <h2 className={styles.cardh2}>
          <a href="#" style={{ color: "deeppink" }}>
            {item.owner.login}
          </a>
        </h2>
        <ul className={styles.cardul}>
          <li>
            <FontAwesome
              className="fa fa-user"
              aria-hidden="true"
              style={{fontSize: '23px',
                color: '#ffc06d',
                width: '42px',
                height: '25px',
                textAlign: 'center'}}
            />
            <a href="#" style={{ color: "#333" }}>
              {item.owner.login}
            </a>
          </li>
          <li>
            <FontAwesome
              className="fa fa-star"
              aria-hidden="true"
              style={{fontSize: '23px',
                color: '#ffc06d',
                width: '42px',
                height: '25px',
                textAlign: 'center'}}
            />
            <a href="#" style={{ color: "#333" }}>
              {item.stargazers_count} stars
            </a>
          </li>
          <li>
            <FontAwesome
              className="fa fa-code-fork"
              aria-hidden="true"
              style={{fontSize: '23px',
                color: '#ffc06d',
                width: '42px',
                height: '25px',
                textAlign: 'center'}}
            />
            <a href="#" style={{ color: "#333" }}>
              {item.forks_count} forks
            </a>
          </li>
          <li>
            <FontAwesome
              className="fa fa-exclamation-triangle"
              aria-hidden="true"
              style={{fontSize: '23px',
                color: '#ffc06d',
                width: '42px',
                height: '25px',
                textAlign: 'center'}}
            />
            <a href="#" style={{ color: "#333" }}>
              {item.open_issues_count} open issues
            </a>
          </li>
        </ul>
      </div>
    ));
    return (
      <div className={styles.cardmain}>
        {list}
      </div>
    );
  }
}
export default Card;

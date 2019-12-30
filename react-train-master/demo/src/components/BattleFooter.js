import React from "react";
import {withRouter} from 'react-router-dom';
import styles from '../style/BattleFooter.css'
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import BattleItem  from "./BattleItem";

class BattleFooter extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    // eslint-disable-next-line react/no-unused-state
    this.state = {msgOne:0,msgTwo:0,count:0}
    
  }

   getMsgOne = (result,msg)=>{
       this.setState({
           msgOne:msg
       })
  }

  getMsgTwo = (result,msg)=>{
        this.setState({
            // eslint-disable-next-line react/no-unused-state
            msgTwo:msg
        })
    }

    handelBattle = ()=>{
        this.props.history.push({pathname:"/Battle/card" });
    }



  render() {
    return (
      <div>
        <div className={styles.battlemain}>
          <h2 style={{ fontWeight: "normal", margin: "20px" }}>Players</h2>
        </div>
        <div className={styles.battlebuju}>
          <div style={{ width: "50%" }}>
            <p>Player One</p>
            <BattleItem parent={this} />
          </div>
          <div style={{ width: "50%" }}>
            <p>Player Two</p>
            <BattleItem parentTwo={this} />
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          <input
            type="button"
            style={{fontSize:"20px",background:"black",padding:"10px 20px",color:"#fff",visibility:((this.state.msgOne+this.state.msgTwo)===2)?"visible":"hidden"}}
            value="BATTLE"
            onClick={this.handelBattle}
          />
        </div>
      </div>
    );
  }
}
export default (withRouter(BattleFooter));

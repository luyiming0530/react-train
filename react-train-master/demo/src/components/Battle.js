import React from "react";
import BattleHeader from "./BattleHeader";
import BattleContent from "./BattleContent";
import BattleFooter from "./BattleFooter";

class Battle extends React.Component {
  render() {
    return (
      <div>
        <BattleHeader /> <BattleContent /> <BattleFooter />
      </div>
    );
  }
}
export default Battle;

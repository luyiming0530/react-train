import React from 'react'
import styles from "../style/BattleFooter.css";

class BattleItem extends React.Component {
    constructor(props) {
        super(props)
        // eslint-disable-next-line react/no-unused-state
        this.state = {bgcOne: false, cardOne: false,target:'',img:'',count:0}
    }

    changeOne = (e) => {
        if (e.target.value === '') {
            this.setState({
                bgcOne: false
            })
        } else {
            this.setState({
                bgcOne: true,
                target:e.target.value
            })
        }
    }

    // eslint-disable-next-line consistent-return
    handelOne =  () => {
        // eslint-disable-next-line react/no-access-state-in-setstate
        const img = `https://avatars0.githubusercontent.com/u/${this.state.target}?v=4`
        this.setState({
            // eslint-disable-next-line react/no-unused-state
            cardOne: true,
            img
        })
        // eslint-disable-next-line no-undef
        const getInput = document.getElementById("input")
        if(getInput.value===''){
            this.setState({
                // eslint-disable-next-line react/no-unused-state
                cardOne: false,
                img:''
            })
        }
        if(this.props.parent){
            this.props.parent.getMsgOne(this,1)
            console.log("1")
        }else {
            this.props.parentTwo.getMsgTwo(this,1)
            console.log("2")
        }

    }

    handelBack = (e) => {
        this.setState({
            // eslint-disable-next-line react/no-unused-state
            cardOne: false,
            bgcOne: false
        })
        e.target.value = ''
        if(this.props.parent){
            this.props.parent.getMsgOne(this,0)
            console.log("1")
        }else {
            this.props.parentTwo.getMsgTwo(this,0)
            console.log("2")
        }
    }

    render() {
        if (!this.state.cardOne) {
            return (
              <div> <input
                id="input"
                className={styles.battleinput}
                type="text"
                placeholder="github username"
                onChange={this.changeOne}
              />
                <input
                  style={
            {
                background:this.state.bgcOne ? "#333" : "#f2f2f2"
            }
        }
                  className={styles.battlebutton}
                  type="button"
                  value="SUBMIT"
                  onClick={this.handelOne}
                />
              </div>
)
        } 
            return (
              <div style={{
                    height: "50px",
                    width: "95%",
                    background: "#ccc",
                    display: 'flex',
                    justifyContent: "space-between"
                }}
              >
                <div>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    style={{
                            height: "35px",
                            width: "35px",
                            verticalAlign: "middle",
                            marginLeft: "10px",
                            borderRadius: "50%"
                        }}
                    src={this.state.img}
                  />
                  <span style={{lineHeight: "50px"}}>{this.state.target}</span>
                </div>
                <input style={{width: "50px", borderRadius: "50%", background: "#f2f2f2"}} type="button" onClick={this.handelBack} value="X" />
              </div>

            )
        
    }
}

export default BattleItem;
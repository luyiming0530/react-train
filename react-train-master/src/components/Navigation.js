import React from 'react';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menNum:1
        };
    }

    onClickNav=(num)=>{
        this.setState({
            menNum:num
        });
    };

    render() {
        const {nowcolor,color}=this.state;
        // css样式变量style
        const style = {
            div: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', paddingTop: '20px', fontSize: '18px', fontWeight: 'bold' },
            ul: { display: 'flex', flexDirection: 'row', listStyle: 'none', padding: '0px' },
            li: { padding: '10px' },
            button: { fontSize: '30px', border: 'none', background: 'transparent' },
        };
        return (
        <div style={style.div}>
            <ul style={style.ul}>
                <li style={style.li}><a href="#" className={this.state.menNum === 1 ? 'nowcolor':'color'} onClick={this.onClickNav.bind(this,1)}>Popular</a></li>
                <li style={style.li}><a href="#" className={this.state.menNum === 2 ? 'nowcolor':'color'} onClick={this.onClickNav.bind(this,2)}>Battle</a></li>
            </ul>
            <button style={style.button}>🔦</button>
        </div>
        );
    }
}
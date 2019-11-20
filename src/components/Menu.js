import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menNum:1
        };
    }

    onClickMenu = (API,num) => {
        this.setState({
            menNum:num
        });
        this.props.clickMenu(API); 
    };

    render() {
        const All = "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories";
        const Javascript = "https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories";
        const Ruby = "https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories";
        const Java = "https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories";
        const CSS = "https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories";
        const Python = "";
        // css样式变量style
        const style = {
            div: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', maxWidth: '1200px', margin: '0 auto', padding: '10px', fontSize: '18px', fontWeight: 'bold' },
            ul: { display: 'flex', flexDirection: 'row', listStyle: 'none', padding: '0px' },
            li: { padding: '10px', },
            a:{}
        };
        return (
        <div style={style.div}>
            <ul style={style.ul}>
                <li style={style.li}><a href="#" className={this.state.menNum === 1 ? 'nowcolor':'color'} onClick={this.onClickMenu.bind(this,All,1)}>All</a></li>
                <li style={style.li}><a href="#" className={this.state.menNum === 2 ? 'nowcolor':'color'} onClick={this.onClickMenu.bind(this,Javascript,2)}>JavaScript</a></li>
                <li style={style.li}><a href="#" className={this.state.menNum === 3 ? 'nowcolor':'color'} onClick={this.onClickMenu.bind(this,Ruby,3)}>Ruby</a></li>
                <li style={style.li}><a href="#" className={this.state.menNum === 4 ? 'nowcolor':'color'} onClick={this.onClickMenu.bind(this,Java,4)}>Java</a></li>
                <li style={style.li}><a href="#" className={this.state.menNum === 5 ? 'nowcolor':'color'} onClick={this.onClickMenu.bind(this,CSS,5)}>CSS</a></li>
                <li style={style.li}><a href="#" className={this.state.menNum === 6 ? 'nowcolor':'color'} onClick={this.onClickMenu.bind(this,Python,6)}>Python</a></li>
            </ul>
        </div>
        );
    }
}
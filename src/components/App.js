import React from 'react';
import Content from './Content';
import Menu from './Menu';
import Navigation from './Navigation';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempAPI:"https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories"
        };
    }
    clickMenu=(API)=>{
        this.setState({tempAPI:API});
    }
    render() {
        return (
        <div>
            <Navigation/>
            <Menu clickMenu={this.clickMenu.bind(this)}/>
            <Content API={this.state.tempAPI} monitor={true}/>
        </div>
        );
    }
}
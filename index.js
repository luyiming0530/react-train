

const styles = {
    center: {
        textAlign: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 0,
        margin: 0,
        minHeight: '100vh'
    },
    nav: {
        display: 'flex',
        listStyleType: 'none',
        flexDirection: 'row',
        
    },
    navItem: {
        display: 'inline-flex',
        padding: '8px 16px'
    },
    header: { 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',

    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: '48px'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '48px',
        backgroundColor: '#bfa'
    },
    card: {
        boxSizing: 'border-box',
        width: '23%',
        padding: '24px',
        marginTop: '10px',
        marginBottom: '10px',
        borderRadius: '8px',
        backgroundColor: '#bfa',
    },
    avatar: {
        width: '50%'
    },
    cardTitle: {
        display: 'flex',
        flexDirection: 'row',
        height: '36px',
        justifyContent: 'center'
    },
    icon: {
        display: 'inline-flex',
        width: '16px',
        justifyContent: 'center'
    }
};

class Loading extends React.Component {
    render() {
        return <div style={styles.center}>
            正在加载.....
        </div>;
    }
}


// 这里是所有普通的Components组件
class Menu extends React.Component {
    render() {
        const {onClick, current} = this.props;
        const links = [
            {
                title: 'All',
                query: 'stars:>1'
            },
            {
                title: 'JavaScript',
                query: 'stars:>1+language:javascript'
            },
            {
                title: 'Ruby',
                query: 'stars:>1+language:ruby'
            },
            {
                title: 'Java',
                query: 'stars:>1+language:java'
            },
            {
                title: 'CSS',
                query: 'stars:>1+language:css'
            }
        ];

        // 现在样式变内联了，如何实现:hover, :active的功能？
        const children = links.map((item, key) =>
            <li style={styles.navItem}><a href="#" onClick={() => onClick(item.query)} style={current == item.query ? {'color': 'red'} : {color: 'black'}}>{item.title}</a></li>
        );
        return <ul style={styles.nav}>
        {children}
        </ul>
    }
}

class Card extends React.Component {
    render() {
        const { index, source } = this.props;

        if (!source)
            return <div>没有卡片</div>;
        return <div style={styles.card}>
            <h2 style={styles.center}>#{index}</h2>
            <div style={styles.center}>
                <img src={source.owner.avatar_url} alt={source.name} style={styles.avatar} />
            </div>
            <h4 style={styles.cardTitle}><a href={source.html_url} target="_blank">
                {source.full_name}
            </a></h4>
            <div>
                <i class="fa fa-user" style={{...styles.icon, color: 'rgb(255, 215, 0)'}}></i><a href={source.owner.html_url} target="_blank">
                {source.name}
                </a>
            </div>
            <div>
                <i class="fa fa-star" style={{...styles.icon, color: 'rgb(255, 215, 0)' }}></i>{source.stargazers_count} stars
        </div>
            <div>
                <i class="fa fa-code-fork" style={{...styles.icon, color: 'rgb(255, 215, 0)' }}></i>{source.forks} forks
        </div>
            <div>
                <i class="fa fa-warning" style={{...styles.icon, color: 'rgb(255, 215, 0)' }}></i>{source.open_issues} Open issues
        </div>
        </div>
    }
}

// 下面是Header, Content, Footer这三个Layout组件
class Header extends React.Component {
    render() {
        const {onClick, current} = this.props;
        return <div style={styles.header}>
            <Menu onClick={onClick} current={current}/>
        </div>;
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            items: []
        };
    }
    componentDidMount() {
        this.search();
    }
    componentDidUpdate (prevProps) {
        if (this.props.query != prevProps.query) {
            this.search();
        }
    }
    search = async () => {
        const {query} = this.props;
        const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories`;
        console.log('url', url);
        this.setState({ loading: true })
        try {
            const res = await axios.get(url)
            console.log('res', res.data)
            this.setState({
                items: res.data.items
            })
        } catch (e) {
            console.log('error', e)
        }
        this.setState({ loading: false });
    }
    render() {
        const { items, loading } = this.state;
        const cards = items.map((item, key) =>
            <Card key={key} source={item} index={key + 1}></Card>
        );
        return <div style={styles.content}>
            {loading ? <Loading></Loading> : cards}
        </div>;
    }
}



class Footer extends React.Component {
    render() {
        return <div style={styles.footer}>
            版权所有 &copy; master
        </div>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { query: 'stars:>1' };
    }
    onClick = (query) => {
        console.log('query', query)
        this.setState({
            query
        })
    }
    render() {
        const { query } = this.state;

        return <div style={styles.container}>
            <Header onClick={this.onClick} current={query}></Header>
            <Content query={query}></Content>
            <Footer></Footer>
        </div>;
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
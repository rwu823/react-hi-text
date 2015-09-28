var HiText = require('../dist/react-hi-text')

var Person = React.createClass({
    componentDidMount(){

    },
    render(){
        return (
            <div>
                <HiText
                    html={this.props.text}

                />
            </div>
        )
    }
})

var App = React.createClass({
    getInitialState(){
        return {
            hi1: 'ja'
        }
    },

    componentDidMount(){
        setTimeout(()=>{
            this.setState({async: 'ja'})
        }, 2000)
    },
    render(){
        var html = `
            <h1>JavaScript</h1> (/ˈdʒɑːvəˌskrɪpt/[5]) is a high level, dynamic, untyped, and interpreted programming language.[6]
            It has been standardized in the ECMAScript language specification.
        `

        var text = 'Hello highlight text!!!!'

        return (
            <div id="app">
                <h1>HiText testing</h1>
                <h2>basic</h2>
                <HiText ref="hi1" text={html} hi={this.state.hi1} />
                <h2>Case sensitive</h2>
                <HiText ref="hi2" text={html} hi={this.state.hi1} case-sensitive />
                <h2>With Async</h2>
                <HiText ref="hi3" text={html} hi={this.state.async} />
            </div>
        )
    }
})

React.render(<App />, document.body)
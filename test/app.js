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
            hi1: 'a'
        }
    },

    componentDidMount(){
        setTimeout(()=>{
            this.setState({async: 'ja'})
            this.refs.hi1.clean()
        }, 2000)
    },
    render(){
        var html = `
            JavaScript (/ˈdʒɑːvəˌskrɪpt/[5]) is a high level, dynamic, untyped, and interpreted programming language.[6]
            It has been standardized in the ECMAScript language specification.
        `

        var text = 'Hello highlight text!!!!'

        return (
            <div id="app">
                <h1>HiText testing</h1>
                <h2>basic</h2>
                <HiText ref="hi1" hi={this.state.hi1}>
                    {html}
                </HiText>
                <h2>Case sensitive</h2>
                <HiText ref="hi2" hi={this.state.hi1} case-sensitive>
                    {html}
                </HiText>
                <h2>With Async</h2>
                <HiText ref="hi3" hi={this.state.async}>
                    {html}
                </HiText>
            </div>
        )
    }
})

React.render(<App />, document.body)
'use strict'

var ass = chai.assert
var doc = document

describe('#React HiText', function (){

    var text = 'React HiText testing!!!'

    var style = document.createElement('style')
    style.textContent = '.highlight {background:yellow}'
    doc.head.appendChild(style)

    beforeEach(()=>{

    })

    afterEach(()=>{

    })

    it('have <body>',  ()=>{
        ass.ok(doc.body)
    })

    it('have React ReactHiText', ()=>{
        ass.ok(React)
        ass.ok(ReactHiText)
    })

    describe('#Render ReactHiText', ()=>{
        var HiText = ReactHiText
        var App
        var AppVdom
        beforeEach(()=>{
            App = React.createClass({
                getInitialState(){
                    return {
                        asyncText: '',
                        hi: 't',
                    }
                },

                componentDidMount(){

                },
                render(){
                    return (
                        <div id="app">
                            <div id="test1">
                                <h2>Test with basic: t</h2>
                                <HiText ref="hi1" hi={this.state.hi}>{text}</HiText>
                            </div>

                            <div id="test2">
                                <h2>Test with case-sensitive: t</h2>
                                <HiText hi="t" case-sensitive>{text}</HiText>
                            </div>

                             <div id="test3">
                                <h2>Test with async</h2>
                                <HiText ref="hi3" hi="t">{this.state.asyncText}</HiText>
                            </div>
                        </div>
                    )
                }
            })
            AppVdom = React.render(<App />, doc.body)
        })

        it('Test with basic: t', function (){
            var highlights = doc.querySelectorAll('#test1 .highlight')
            ass.lengthOf(highlights, 5)
        })

        it('Test with case-sensitive: t', function (){
            var highlights = doc.querySelectorAll('#test2 .highlight')
            ass.lengthOf(highlights, 4)
        })

        it('Test with clean', function (done){
            setTimeout(() =>{
                AppVdom.refs.hi1.clean()
                var highlights = doc.querySelectorAll('#test1 .highlight')
                ass.lengthOf(highlights, 0)
                done()
            }, 1000)
        })

        it('Test with async', function (done){
            setTimeout(()=>{
                AppVdom.setState({asyncText: text})
                var highlights = doc.querySelectorAll('#test3 .highlight')
                ass.lengthOf(highlights, 5)

                AppVdom.refs.hi3.clean()
                var highlights = doc.querySelectorAll('#test3 .highlight')
                ass.lengthOf(highlights, 0)
                done()
            }, 1000)
        })

        it('Test with clean and re set highlight', function (){
            AppVdom.refs.hi1.clean()
            AppVdom.setState({hi: 'react'})
            var highlights = doc.querySelectorAll('#test1 .highlight')
            ass.lengthOf(highlights, 1)
        })

    })

})
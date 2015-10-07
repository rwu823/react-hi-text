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

    describe('#Render <ReactHiText />', ()=>{
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
                                <h2>Test match with basic word "t"</h2>
                                <HiText ref="hi1" hi={this.state.hi}>{text}</HiText>
                            </div>

                            <div id="test2">
                                <h2>Test match with basic word "t" wit case-sensitive</h2>
                                <HiText hi="t" case-sensitive>{text}</HiText>
                            </div>

                             <div id="test3">
                                <h2>Test with async</h2>
                                <HiText ref="hi3" hi="t">{this.state.asyncText}</HiText>
                            </div>

                            <div id="test4">
                                <HiText ref="hi4" hi="t" className="hitext">
                                    Test with different class name
                                </HiText>
                            </div>
                        </div>
                    )
                }
            })
            AppVdom = React.render(<App />, doc.body)
        })

        it('Test match with basic word "t"', function (){
            var highlights = doc.querySelectorAll('#test1 .highlight')
            ass.lengthOf(highlights, 5)
        })

        it('Test match with basic word "t" wit case-sensitive', function (){
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

        it('Test with different class name', function (){
            var hitexts = doc.querySelectorAll('#test4 .hitext')
            ass.lengthOf(hitexts, 4)
        })

    })

    describe('#Render <ReactHiText /> with sub <tag>', function (){
        var HiText = ReactHiText
        var AppVdom

        beforeEach(()=>{
            var App = React.createClass({

                componentDidMount(){

                },
                render(){
                    return (
                        <div id="app">
                            <div id="test1">
                                <HiText ref="hi1" hi="t">
                                    React <b>HiText</b> is testing!!
                                </HiText>
                            </div>
                            <div id="test">
                                <HiText ref="hi2" hi="">
                                    React <b>HiText</b> is testing!!
                                </HiText>
                            </div>
                            <div id="test3">
                                <HiText ref="hi3" hi="javascript">
                                    Test with cross tag <b>Java</b>Script!!!
                                </HiText>
                            </div>
                        </div>
                    )
                }
            })
            AppVdom = React.render(<App />, doc.body)
        })

        it('Test with word "t"', function (){
            var highlights = doc.querySelectorAll('#test1 .highlight')
            ass.lengthOf(highlights, 5)
        })

        it('Test with `hasMatched`', function (){
            ass.equal(AppVdom.refs.hi1.hasMatched, true)
        })

        it('Test with empty word', function (){
            var highlights = doc.querySelectorAll('#test2 .highlight')
            ass.lengthOf(highlights, 0)
        })

        it('Test with clean()', function (){
            AppVdom.refs.hi1.clean()
            var highlights = doc.querySelectorAll('#test1 .highlight')
            ass.lengthOf(highlights, 0)
        })

        it('Test `hasMatched` after clean()', function (){
            AppVdom.refs.hi1.clean()
            ass.equal(AppVdom.refs.hi1.hasMatched, false, 'should be false')
        })

        //it('Test match word with cross <tag>', function (){
        //    var highlights = doc.querySelectorAll('#test3 .highlight')
        //    ass.lengthOf(highlights, 1)
        //})
    })

})
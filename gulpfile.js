var gu = require('gulp')
var webpack = require('webpack')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var _ = require('lodash')

var pack = function (cfg, cb){
    cfg = _.merge({
        output: {
            filename: '[name].js'
        },
        module: {
            loaders: [
                {
                    test: /\.(jsx?|es6)$/,
                    loader: 'babel'
                }
            ]
        },
    }, cfg)

//console.log(JSON.stringify(cfg, null, 2))
    webpack(cfg, function (err, st){
        console.log(st.toString({
            colors: true
        }))
        if(cb) cb()
    })
}

gu
    .task('dev', function (){
        pack({
            entry: {
                'react-hi-text': [
                    './index.js'
                ]
            },

            output: {
                path: 'dist',
                library: 'ReactHiText',
                libraryTarget: 'umd'
            },
            watch: true
        })
    })
    .task('test', function (){
        pack({
            entry: {
                'app.pack': [
                    './test/app.js'
                ]
            },
            output: {
                path: 'test'
            },
            watch: true
        })
    })
    .task('build', function (){
        pack({
            entry: {
                'react-hi-text': [
                    './index.js'
                ]
            },
            output: {
                path: 'dist',
                library: 'ReactHiText',
                libraryTarget: 'umd'
            },
        }, function (){
            gu.src('dist/react-hi-text.js')
                .pipe(uglify())
                .pipe(rename({
                    suffix: '.min'
                }))
                .pipe(gu.dest('dist'))
        })
    })
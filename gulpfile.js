'use strict'

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

var buildConf = {
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
}
gu
    .task('dev', function (){
        pack(_.merge(buildConf, {watch: true}))
    })
    .task('ava', function (){
        var ava = require('gulp-ava')
        var files = ['test/index.js']

        gu.src(files).pipe(ava())

        gu.watch(files).on('change', (f)=>{
            gu.src(f.path).pipe(ava())
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
        pack(buildConf, function (){
            gu.src('dist/react-hi-text.js')
                .pipe(uglify())
                .pipe(rename({
                    suffix: '.min'
                }))
                .pipe(gu.dest('dist'))
        })
    })
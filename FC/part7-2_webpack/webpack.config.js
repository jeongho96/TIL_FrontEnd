// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { rule } = require('postcss')


// export

module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    // 다만 절대경로가 필요하므로 path를 import
    output: {
        // 경로를 합쳐서 생성(아래 두 값은 사실상 default, 필요하면 수정)
        // path: path.resolve(__dirname, 'dist'),
        // filename : 'main.js',
        // 기존 생성값 클리어
        clean: true
    },

    module: {
        rules :[
            {
                // s가 있을수도 있고 없을 수도 있고 css로 끝나는 파일에 대해
                // css, scss 둘다
                test: /\.s?css$/,
                // 순서 중요
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
            test: /\.js$/,
            use:[
                'babel-loader'
            ]
            }
        ]
    },

    // 번들링 후 결괌ㄹ의 처리 방식 등 다양한 플러그인들을 설정
    plugins : [
        new HtmlPlugin({
            template: './index.html'
        }),
        // static 폴더 경로의 내용이 복사되서 빌드시 dist 내부에 사용
        new CopyPlugin({
            patterns: [
                {from : 'static'}
            ]
        })
    ],

    devServer:{
        host: 'localhost'
    }

}
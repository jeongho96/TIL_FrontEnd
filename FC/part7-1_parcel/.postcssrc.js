// nodejs에서는 ESM 방식대신, CommonJS를 사용하므로 import export가 조금 다르다.

// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

// export {
//     plugins: [
//         autoprefixer
//     ]
// }
// module.exports = {
//     plugins: [
//         autoprefixer
//     ]
// }


// 위 방식 간략화
module.exports = {
    plugins : [
        require('autoprefixer')
    ]
}
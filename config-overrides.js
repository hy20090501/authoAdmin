const { override, fixBabelImports } = require('customize-cra');
console.log('*********** process.env **********');
console.log(`>>>>>>>>>>> ${process.env.REACT_APP_ENV || 'dev'}`);
console.log('*********** process.env **********');
let webpackConfig = config =>{
    // console.log(JSON.stringify(config))
    return config
}
module.exports = override(
    webpackConfig,
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    })
);

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        "eslint:recommended"
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        "linebreak-style": ["error", "windows"]
            /*eslint linebreak-style: ["error", "unix"]*/
            /*eslint linebreak-style: ["error", "windows"]*/
    },
};
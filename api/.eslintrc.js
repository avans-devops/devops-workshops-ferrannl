module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
    },
    "rules": {
        "linebreak-style": ["error", "windows"],
        "comma-dangle": ["error", "always-multiline"],
        "no-console": "off",
    },
};
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "eqeqeq": "warn",
        "no-shadow": "warn",
        "no-trailing-spaces": "warn",
        'no-unused-vars': ['warn', {
            args: 'none',
            ignoreRestSiblings: true
        }],
        "no-implied-eval": "warn",
        "no-self-compare": "warn",
        "no-throw-literal": "error",
        "no-unused-expressions": "warn",
        "semi": "error",
        "no-self-compare": "warn",
        "no-param-reassign": "warn",
        "no-lonely-if": "warn",
        "no-tabs": "error",
        "strict": ["error", "global"]
    }
};


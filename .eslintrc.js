module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-console": "off",
        "no-constant-condition" : 1,
        "no-undef": 1,
        "no-unused-vars": 1,
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called"
            }
        ]
    }
};

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/prop-types': 'off',
        indent: ['error', 4],
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': 'off',
        'react/jsx-wrap-multilines': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'object-curly-newline': ['error', { multiline: true, minProperties: 7 }],
        'no-param-reassign': [2, { props: false }],
        'no-plusplus': 'off',
        'import/prefer-default-export': 'off',
        'max-len': 'off',
        'no-class-assign': 'off',
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'jsx-a11y/label-has-for': [2, { required: { every: ['id'] } }],
        'react/forbid-prop-types': 0,
        'no-console': 'off',
        'linebreak-style': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-confusing-arrow': 'off',
    },
};

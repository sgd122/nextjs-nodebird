module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        "airbnb",
        "airbnb-typescript",
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    ignorePatterns: ["node_modules/", ".next/*", ".eslintrc.js", "next.config.js"],
    rules: {
        // ESLint 규칙을 지정합니다. extends에서 지정된 규칙을 덮어 쓸수도 있습니다.
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        "react/function-component-definition": [2, { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }],
        "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }], //should add ".ts" if typescript project
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/anchor-is-valid": "off",
    },
    settings: {
        react: {
            version: 'detect', // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지합니다.
        },
    },
};

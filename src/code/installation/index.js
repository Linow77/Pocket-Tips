export const settingsCode = `{
  // does not render single space between words
  "editor.renderWhitespace": "boundary",
  // vertical rule after 80 charachter
  "editor.rulers": [80],
  // turns off validations that VSCode
  "javascript.validate.enable": false,
  // tab = 2 spaces
  "editor.tabSize": 2,
  // allow prettier to fix eslint 
  // "eslint.autoFixOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}`

export const prettierCode = `{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "endOfLine": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "parser": "babel"
}`

export const eslintCode = `{
  "parser": "babel-eslint",
  "plugins": ["prettier"],
  "extends": ["eslint:recommended", "plugin:react/recommended", "prettier"],
  "env": { "browser": true, "node": true, "jest": true },
  "rules": {
    "prettier/prettier": ["warn"],    
    "no-unused-vars": 1,
    "react/react-in-jsx-scope": 0,
    "react/display-name": 1,
    "react/jsx-key": 1,
    "react/jsx-no-comment-textnodes": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-target-blank": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-children-prop": 1,
    "react/no-danger-with-children": 1,
    "react/no-deprecated": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-find-dom-node": 1,
    "react/no-is-mounted": 1,
    "react/no-render-return-value": 1,
    "react/no-string-refs": 1,
    "react/no-unescaped-entities": 1,
    "react/no-unknown-property": 1,
    "react/prop-types": 1,
    "react/require-render-return": 1
  }
}`

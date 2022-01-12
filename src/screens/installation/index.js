import React from 'react'
import styled from 'styled-components'

//Components
import Title from '../../components/title'
import Screen from '../../components/screen'
import Text from '../../components/text'
import Section from '../../components/section'
import Logo from '../../components/logo'
import CodeArea from '../../components/codeArea'

//Images
import NodeJs from '../../assets/nodeJsLogo.svg'
import VSCode from '../../assets/VSCode.svg'
import AutoRenameTag from '../../assets/autoRenameTagLogo.jpg'
import BetterComments from '../../assets/betterCommentsLogo.png'
import Prettier from '../../assets/prettierLogo.png'
import Eslint from '../../assets/eslintLogo.png'
import ReactLogo from '../../assets/reactLogo.png'
import styledComponentsLogo from '../../assets/styledComponentLogo.png'

//Code Files
// import * as data from '../../code/installation/settings.json'

const Installation = () => {
  const code = `{
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

  const code2 = `{
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

  const code3 = `{
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

  return (
    <Screen>
      <Title type='Page'>Install tools and init the project</Title>
      <Section>
        <Text>
          First of all, you need to install NodeJs and a code editor. We will
          use VSCode in this tutorial.
        </Text>
        <ImageContainer>
          <Logo
            type='Redirect'
            src={NodeJs}
            width='2.5rem'
            url='https://nodejs.org/en/'
          />
          <Logo
            type='Redirect'
            src={VSCode}
            width='2.5rem'
            url='https://code.visualstudio.com/'
          />
        </ImageContainer>
        <Text type='Section'>Then, you need to create the project :</Text>
        <Text type='InlineCode'>npx create-react-app my-app</Text>
        <CodeArea
          language='powershell'
          codeString='npx create-react-app mon-app'
        />
        <Text type='Section'>
          Now, you can open your project with VSCode and execute it :
        </Text>
        <CodeArea language='powershell' codeString='cd my-app' />
        <CodeArea language='powershell' codeString='npm start' />
        <Text type='Section'>
          Thanks to VSCode, we can use extension that can increase our
          productivity and help us while programming. Here are those I
          personnaly use:
        </Text>

        <ExtensionContainer>
          <Logo type='WithLegend' src={AutoRenameTag} width='2.5rem' />
          <Text type='Section'>
            <b>Auto Rename Tag :</b> Allow us to modify simultaneously opening
            and closing name of an HTML Tag
          </Text>
        </ExtensionContainer>
        <ExtensionContainer>
          <Logo type='WithLegend' src={BetterComments} width='2.5rem' />
          <Text type='Section'>
            <b>Better comments :</b> Allow specific colorization in comments
          </Text>
        </ExtensionContainer>
        <ExtensionContainer>
          <Logo type='WithLegend' src={Prettier} width='2.5rem' />
          <Text type='Section'>
            <b>Prettier :</b> Format for our files
          </Text>
        </ExtensionContainer>
        <ExtensionContainer>
          <Logo type='WithLegend' src={Eslint} width='2.5rem' />
          <Text type='Section'>
            <b>Eslint :</b> Check for any erros in files
          </Text>
        </ExtensionContainer>
        <ExtensionContainer>
          <Logo type='WithLegend' src={ReactLogo} width='2.5rem' />
          <Text type='Section'>
            <b>Reactjs code snippets :</b> Snippets for React functions
          </Text>
        </ExtensionContainer>
        <ExtensionContainer>
          <Logo type='WithLegend' src={styledComponentsLogo} width='2.5rem' />
          <Text type='Section'>
            <b>vscode-styled-components :</b> For those who whill use
            styled-components, you will need this extension (Explication later)
          </Text>
        </ExtensionContainer>

        <Text type='Section'>
          In order to use those extension correctly you need to create several
          configuration files.
          <br />
          First, create a folder named .vscode and create a file named
          settings.json :
        </Text>
        <CodeArea language='json' codeString={code} />
        <Text type='Section'>Then, create a file named .prettierrc : </Text>
        <CodeArea language='json' codeString={code2} />
        <Text type='Section'>
          Finally, create a file named .eslintrc.json :
        </Text>
        <CodeArea language='json' codeString={code3} />
        <Text type='Section'>
          You are now ready to create your website with React.
        </Text>
      </Section>
    </Screen>
  )
}

Installation.propTypes = {}

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`

const ExtensionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`

export default Installation

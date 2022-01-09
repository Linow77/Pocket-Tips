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

const Installation = () => {
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
            type='Clickable'
            src={NodeJs}
            width='2.5rem'
            url='https://nodejs.org/en/'
          />
          <Logo
            type='Clickable'
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
          <br />
          Auto Rename Tag : Allow us to modify simultaneously opening and
          closing name of an HTML Tag
          <br />
          Better comments : Allow specific colorization in comments
          <br />
          Brackets pair colorizer : Colorize by pair each Brackets
          <br />
          Prettier : Format for our files
          <br />
          Eslint : Check for any erros in files
          <br />
          Reactjs code snippets : Snippets for React functions
          <br />
          vscode-styled-components : For those who whill use styled-components,
          you will need this extension (Explication later)
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
export default Installation

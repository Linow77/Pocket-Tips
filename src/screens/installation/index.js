import React from 'react'
import styled from 'styled-components'

//Components
import Title from '../../components/title'
import Screen from '../../components/screen'
import Text from '../../components/text'
import Section from '../../components/section'
import Logo from '../../components/logo'
import CodeArea from '../../components/codeArea'
import SubTitle from '../../components/subTitle'

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
import { settingsCode, prettierCode, eslintCode } from '../../code/installation'

const Installation = () => {
  return (
    <Screen>
      <Title type='Page'>Install tools and init the project</Title>
      <Section>
        <SubTitle type='Page'>Install NodeJs and VSCode</SubTitle>
        <ImageContainer>
          <Logo type='WithLegend' src={NodeJs} width='2.5rem' />
          <Text type='Section'>
            <b>NodeJs :</b> Allow to build scalable applications
          </Text>
        </ImageContainer>
        <ImageContainer>
          <Logo type='WithLegend' src={VSCode} width='2.5rem' />
          <Text type='Section'>
            <b>VSCode :</b> Code Editor with extensions
          </Text>
        </ImageContainer>

        <SubTitle type='Page'>Create the project</SubTitle>
        <CodeArea
          language='powershell'
          codeString='npx create-react-app mon-app'
        />
        <CodeArea language='powershell' codeString='cd my-app' />
        <CodeArea language='powershell' codeString='npm start' />
        <Text type='Section'>Installation of packages :</Text>
        <CodeArea
          language='powershell'
          codeString='npm i babel-eslint prettier-eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react --save-dev'
        />

        <SubTitle type='Page'>VSCode Extension</SubTitle>
        <ImageContainer>
          <Logo type='WithLegend' src={AutoRenameTag} width='2.5rem' />
          <Text type='Section'>
            <b>Auto Rename Tag :</b> Allow us to modify simultaneously opening
            and closing name of an HTML Tag
          </Text>
        </ImageContainer>
        <ImageContainer>
          <Logo type='WithLegend' src={BetterComments} width='2.5rem' />
          <Text type='Section'>
            <b>Better comments :</b> Allow specific colorization in comments
          </Text>
        </ImageContainer>
        <ImageContainer>
          <Logo type='WithLegend' src={Prettier} width='2.5rem' />
          <Text type='Section'>
            <b>Prettier :</b> Format for our files
          </Text>
        </ImageContainer>
        <ImageContainer>
          <Logo type='WithLegend' src={Eslint} width='2.5rem' />
          <Text type='Section'>
            <b>Eslint :</b> Check for any erros in files
          </Text>
        </ImageContainer>
        <ImageContainer>
          <Logo type='WithLegend' src={ReactLogo} width='2.5rem' />
          <Text type='Section'>
            <b>Reactjs code snippets :</b> Snippets for React functions
          </Text>
        </ImageContainer>
        <ImageContainer>
          <Logo type='WithLegend' src={styledComponentsLogo} width='2.5rem' />
          <Text type='Section'>
            <b>vscode-styled-components :</b> For those who whill use
            styled-components, you will need this extension (Explication later)
          </Text>
        </ImageContainer>

        <SubTitle type='Page'>Configuration of theses extension</SubTitle>
        <Text>
          At the root, create a .vscode folder and a settings.json file inside:
        </Text>
        <CodeArea language='json' codeString={settingsCode} />
        <Text type='Section'>At the root, create a .prettierrc file : </Text>
        <CodeArea language='json' codeString={prettierCode} />
        <Text type='Section'>At the root, create a .eslintrc.json file :</Text>
        <CodeArea language='json' codeString={eslintCode} />
      </Section>
    </Screen>
  )
}

Installation.propTypes = {}

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`

export default Installation

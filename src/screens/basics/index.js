import React from 'react'
import Screen from '../../components/screen'
import SubTitle from '../../components/subTitle'
import Title from '../../components/title'
import Text from '../../components/text'
import CodeArea from '../../components/codeArea'

//Code
import {
  routerCode,
  commonCode,
  lightCode,
  themeCode,
  styleComponentCode
} from '../../code/basics'

const Basics = () => {
  return (
    <Screen>
      <Title type='Page'>Basics of the project</Title>
      <SubTitle type='Page'>VSCode Snippets</SubTitle>
      <Text type='Section'>Create a basic component</Text>
      <CodeArea langage='powershell' codeString='rsc' />
      <Text type='Section'>Create a basic component with props</Text>
      <CodeArea langage='powershell' codeString='rscp' />

      <SubTitle type='Page'>React router dom</SubTitle>
      <CodeArea
        langage='powershell'
        codeString='npm install react-router-dom'
      />
      <Text type='Section'>Basic configuration</Text>
      <CodeArea language='javascript' codeString={routerCode} />

      <SubTitle type='Page'>Styled Components - Create a theme</SubTitle>
      <Text type='Section'>Image de l architecture des fichiers</Text>
      <CodeArea language='javascript' codeString={commonCode} />
      <CodeArea language='javascript' codeString={lightCode} />
      <CodeArea language='javascript' codeString={themeCode} />

      <SubTitle type='Page'>Styled Components - Style a component</SubTitle>
      <CodeArea language='javascript' codeString={styleComponentCode} />
    </Screen>
  )
}

Basics.propTypes = {}

export default Basics

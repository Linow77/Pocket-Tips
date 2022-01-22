import React from 'react'
import Screen from '../../components/screen'
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
import Collapsible from '../../components/collapsible'

const Basics = () => {
  return (
    <Screen>
      <Title type='Page'>Basics of the project</Title>
      <Collapsible title='VSCode Snippets'>
        <Text type='Section'>Create a basic component</Text>
        <CodeArea langage='powershell' codeString='rsc' />
        <Text type='Section'>Create a basic component with props</Text>
        <CodeArea langage='powershell' codeString='rscp' />
      </Collapsible>

      <Collapsible title='React router dom'>
        <CodeArea
          langage='powershell'
          codeString='npm install react-router-dom'
        />
        <Text type='Section'>Basic configuration</Text>
        <CodeArea language='javascript' codeString={routerCode} />
      </Collapsible>

      <Collapsible title='Styled Components - Create a theme'>
        <Text type='Section'>Image de l architecture des fichiers</Text>
        <CodeArea language='javascript' codeString={commonCode} />
        <CodeArea language='javascript' codeString={lightCode} />
        <CodeArea language='javascript' codeString={themeCode} />
      </Collapsible>

      <Collapsible title='Styled Components - Style a component'>
        <CodeArea language='javascript' codeString={styleComponentCode} />
      </Collapsible>
    </Screen>
  )
}

Basics.propTypes = {}

export default Basics

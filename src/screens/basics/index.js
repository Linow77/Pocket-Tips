import React from 'react'
import Screen from '../../components/screen'
import SubTitle from '../../components/subTitle'
import Title from '../../components/title'
import Text from '../../components/text'
import CodeArea from '../../components/codeArea'

//Code
import { routerCode } from '../../code/basics'

const Basics = () => {
  return (
    <Screen>
      <Title type='Page'>Basics of the project</Title>
      <SubTitle type='Page'>Create a multipage website</SubTitle>
      <Text type='Section'>
        In order to have several page on your website and nagivates between
        them, you need react-router-dom
      </Text>
      <CodeArea
        langage='powershell'
        codeString='npm install react-router-dom'
      />
      <Text type='Section'>
        You need to create a Router that will reference all your pages and path
      </Text>
      <CodeArea language='javascript' codeString={routerCode} />
    </Screen>
  )
}

Basics.propTypes = {}

export default Basics

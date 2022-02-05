import React from 'react'
import Screen from '../../components/screen'
import Title from '../../components/title'
import SubTitle from '../../components/subTitle'
import CodeArea from '../../components/codeArea'
import Logo from '../../components/logo'
import Text from '../../components/text'
import Collapsible from '../../components/collapsible'
import styled from 'styled-components'

//images
import apiTree from '../../assets/treeApi.png'
import postmanLogo from '../../assets/postmanLogo.png'

//code
import { api } from '../../code/nodeJs'
import MyLink from '../../components/myLink'

const NodeJS = () => {
  return (
    <Screen>
      <Title type='Page'>Create a REST API with nodeJs</Title>
      <SubTitle type='Page'>Init the project</SubTitle>
      <CodeArea codeString='npm init' language='console' />

      <SubTitle type='Page'>Install npm depedencies</SubTitle>
      <CodeArea
        codeString='npm i express morgan body-parser dotenv'
        language='console'
      />
      <Text type='Section'>
        <b>Express :</b> Essential package to create API with nodeJs
      </Text>
      <Text type='Section'>
        <b>Morgan :</b> HTTP request logger middleware for node.js
      </Text>
      <Text type='Section'>
        <b>BodyParser :</b> Middleware which parse incoming request bodies in a
        middleware before your handlers, available under the req.body property.
      </Text>
      <Text type='Section'>
        <b>Dotenv :</b> Module that loads environment variables from a .env file
        into process.env
      </Text>

      <SubTitle type='Page'>Install development npm depedencies</SubTitle>
      <CodeArea codeString='npm i nodemon --dev' language='console' />
      <Text type='Section'>
        <b>Nodemon :</b> Tool that helps develop node.js based applications by
        automatically restarting the node application when file changes in the
        directory are detected.
      </Text>

      <SubTitle type='Page'>Organization of the project</SubTitle>
      <Logo type='Basic' src={apiTree} width='8rem' />
      <Text type='Section'>
        VsCode Extension (.vscode, .prettierrc and.eslintrc.json) are explained
        in page :
        <MyLink to='/installation'>
          Installation (ajouter l&apos;ancre vers la partie concernée)
        </MyLink>
      </Text>
      <Text type='Section'> API : Controllers / models / routes</Text>
      <Text type='Section'>config : env file and connection to database</Text>

      <SubTitle type='Page'>Testing the API</SubTitle>
      <ImageContainer>
        <Logo type='WithLegend' src={postmanLogo} width='2.5rem' />
        <Text type='Section'>
          <b>Postman :</b> API platform for building and using APIs
        </Text>
      </ImageContainer>
      <Collapsible title='App.js'>
        <CodeArea codeString={api} language='javascript' />
      </Collapsible>
    </Screen>
  )
}

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`
export default NodeJS

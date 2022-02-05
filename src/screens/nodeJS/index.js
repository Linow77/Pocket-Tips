import React from 'react'
import Screen from '../../components/screen'
import Title from '../../components/title'
import SubTitle from '../../components/subTitle'
import CodeArea from '../../components/codeArea'
import Logo from '../../components/logo'
import Text from '../../components/text'
import Collapsible from '../../components/collapsible'

//images
import apiTree from '../../assets/treeApi.png'
import postmanLogo from '../../assets/postmanLogo.png'
import styled from 'styled-components'

//code
import { api } from '../../code/nodeJs'

const NodeJS = () => {
  return (
    <Screen>
      <Title type='Page'>Create a REST API with nodeJs</Title>
      <SubTitle type='Page'>Init the project</SubTitle>
      <CodeArea codeString='npm i' language='console' />

      <SubTitle type='Page'>Install npm depedencies</SubTitle>
      <Text type='Section'>
        express / morgan / bodyParser / dotenv / mongoose / http / nodemon en
        dev
      </Text>
      <ImageContainer>
        <Logo type='WithLegend' src={postmanLogo} width='2.5rem' />
        <Text type='Section'>
          <b>Express :</b> Allow us to modify simultaneously opening and closing
          name of an HTML Tag
        </Text>
      </ImageContainer>

      <SubTitle type='Page'>Organization of the project</SubTitle>
      <Logo type='Basic' src={apiTree} width='8rem' />
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

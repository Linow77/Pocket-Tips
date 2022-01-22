import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Logo from '../logo'
import SubTitle from '../subTitle'

import Arrow from '../../assets/arrow.png'

const Collapsible = props => {
  const { children, title } = props
  const [open, setOpen] = useState(false)

  return (
    <StyledCollapsible>
      <StyledSpan onClick={() => setOpen(!open)}>
        <Logo type='Move' width='1rem' src={Arrow} move={open}></Logo>
        <SubTitle type='Page'>{title}</SubTitle>
      </StyledSpan>
      <CollapsibleBody open={open}>{children}</CollapsibleBody>
      <BorderLine></BorderLine>
    </StyledCollapsible>
  )
}

Collapsible.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string.isRequired
}

const StyledCollapsible = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const CollapsibleBody = styled.div`
  max-height: ${({ open }) => (open ? '1000px' : '1px')};
  overflow: hidden;
  transition: all 0.7s ease;
`

const BorderLine = styled.div`
  margin-top: 0.5rem;
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.primaryBackgroundColor};
`

export default Collapsible

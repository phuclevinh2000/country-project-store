import React from 'react'
import HeaderRight from './HeaderRight/HeaderRight'
import HeaderLeft from './HeaderLeft/HeaderLeft'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Header:React.FC = () => {
  return (
    <Title>
      <Link to={`/`} style={{textDecoration: 'none', display: 'flex'}}>
       <HeaderLeft />
      </Link>
      <HeaderRight />
    </Title>
  )
}

export default Header

const Title = styled.div`
  height: 60px;
  background: #464444; //#464444
  display: flex;
  align-items: center;
  padding: 0 20px;
`

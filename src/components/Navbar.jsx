import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


//Main container
const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  alaign-items: center;
  justify-content: space-between;
`


//Left container
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`



//Center container
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`



//Right container
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const CartWidget = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`



//Navbar
const Navbar = () => {
  return (

    <Container>

      <Wrapper>

        <Left>
          <Language>EN</Language>
            <SearchContainer>
              <Input />
              <SearchIcon />
            </SearchContainer>
        </Left>

        <Center><Logo>FONTENLA.</Logo></Center>

        <Right>
          <CartWidget>REGISTER</CartWidget>
          <CartWidget>SIGN IN</CartWidget>
          <CartWidget>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </CartWidget>
        </Right>

      </Wrapper>
      
    </Container>
  )
}


export default Navbar;
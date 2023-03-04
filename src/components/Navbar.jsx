import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { mobile } from "../responsive";


//Main container
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;


//Left container
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile ( { display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px", marginRight:"5px"})};
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px"})};
`;



//Center container
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  ${ mobile({ fontSize: "1.2rem" })};
`;



//Right container
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const CartWidget = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "5px" })};
`



//Navbar
const Navbar = () => {
  return (

    <Container>

      <Wrapper>

        <Left>
          <Language>EN</Language>
            <SearchContainer>
              <Input placeholder='Search'/>
              <SearchIcon />
            </SearchContainer>
        </Left>

        
        <Center>
          <Logo>FONTENLA.</Logo>
        </Center>

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
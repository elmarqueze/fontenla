import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import ItemDetailContainer from './ItemDetailContainer';


const Container = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.div`
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 40px;
  margin-left: 20px;
`

const Categories = styled.a`
  display: flex;
  padding: 0px 30px;
  cursor: pointer;
  color: black;
  font-weight: bold;
  text-decoration: none;
`



const ItemListContainer = (props) => {
  

  return (

    <Container>

      <TextContainer>
        <Categories>Jackets</Categories>
        <Categories>Pants</Categories>
      </TextContainer>

      <ItemDetailContainer />

    </Container>
  )
}

export default ItemListContainer
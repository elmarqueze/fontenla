import styled from 'styled-components'

const Container = styled.div`
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
`


const ItemListContainer = (props) => {
  return (
    <Container>
        <Categories>{props.categorie1}</Categories>
        <Categories>{props.categorie2}</Categories>
        <Categories>{props.categorie3}</Categories>
    </Container>
  )
}

export default ItemListContainer
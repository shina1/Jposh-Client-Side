import React from 'react'
import styledComponents from 'styled-components'
const Container = styledComponents.div`
border:2px solid red;
width:30%;
margin:10px 5px;
padding:20px;
`
const Image = styledComponents.img``
const InfoCont = styledComponents.div``
const Title = styledComponents.h2``
const ItemCat = styledComponents.h3``
const Button = styledComponents.button``
const CategoryItem = ({category}) => {
  return (
    <Container>
            <Image src={category.img} alt='categories'/>
            <InfoCont>
                <Title>{category.title}</Title>
                <ItemCat>{category.cat}</ItemCat>
                <Button>SHOP NOW</Button>
            </InfoCont>
    </Container>
  )
}

export default CategoryItem

import React from 'react'
import styledComponents from 'styled-components'
import { categories } from '../../data'
import CategoryItem from './CategoryItem'


const Container = styledComponents.div`
border:2px solid red;
    diplay:flex;
    flex-direction: row;
    height: auto;
    margin-bottom:10px;
    width:100%;
`

const Categories = () => {
  return (
    <Container>
      {
          categories.map(category => (
              <CategoryItem  category={category}/>
          ))
      }
    </Container>
  )
}

export default Categories

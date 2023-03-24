import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/navbar'


export const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting= {"Bienvenidos a mi pagina de Skincare" } />
    </div>
  )
}


export default App 
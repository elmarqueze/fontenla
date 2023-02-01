import React from 'react'
import Announcement from '../components/Announcement';
import ItemListContainer from '../components/ItemListContainer';
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <ItemListContainer categorie1= 'KIDS' categorie2= 'MEN' categorie3= 'ACCESORIES'/>
    </div>

  )
}

export default Home;
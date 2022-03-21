import React from 'react';
import Carousel from '../../components/Carousel/Carousel'
import Historia from '../../components/Historia/Historia';
import Cuartel from '../../components/Cuartel/Cuartel';
import Donaciones from '../../components/Donaciones/Donaciones';
import './styles.css'

const Home = () => {
    return (
        <>
            <Carousel />
            <Historia />
            <Donaciones />
            <Cuartel />
        </>
    )
}

export default Home;
import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Skills from '../Skills';

function Home () {
    return (
        <>
        <MainSection />
        <Skills />
        <Cards />
        <Footer />
        </>
    )
}

export default Home;
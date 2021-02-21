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
        <Cards />
        <Skills />
        <Footer />
        </>
    )
}

export default Home;
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { SelectedPage } from '../Navbar/enumerates';
import Explore from '../Explore/Explore';
import Footer from '../Footer/Footer';

const HomePage = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='bg-[#e4e4e4]'>
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Explore/>
            <Footer/>
        </div>
    )
}

export default HomePage
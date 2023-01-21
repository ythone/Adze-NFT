import React, { useState } from 'react'
import Links from './Links';
import { SelectedPage } from './enumerates';
import useMediaQuery from '../hooks/useMediaQuery';
import { IoMenu,IoClose } from "react-icons/io5";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    return (
        <nav>
            <div className="fixed top-0 z-50 w-full py-6">
                <div className={`${navbarBackground} ${flexBetween}`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    {/*Left side*/}
                    {isAboveMediumScreens ? (<div className={`${flexBetween} w-full gap-16`}>
                        <p className='text-2xl font-bold text-[#2a2a2c]'>Adwe.<span className='text-sm font-semibold text-[#d9be94]'>CONSULTING</span></p>
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} pt-3 gap-8 font-semibold text-sm`}>
                                <Links
                                    page="Explore"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Links
                                    page="Activity"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Links
                                    page="How it works"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                            {/*Right side*/}
                            <button
                                type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="text-center w-1/6 px-3 py-5 bg-[#121416] text-white hover:text-[#121416] text-xs hover:bg-[#e4e4e4] hover:shadow-lg focus:bg-[#e4e4e4] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e4e4e4] active:shadow-lg transition duration-150 ease-in-out"
                            >Connect Wallet</button>
                        </div>
                    </div>) : (<button
                        className="rounded-full bg-[#121416] p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <IoMenu className="h-6 w-6 text-white" />
                    </button>)}
                </div>
                </div>
            </div>

            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <IoClose className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Links
                            page="Explore"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Links
                            page="Activity"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Links
                            page="How it works"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
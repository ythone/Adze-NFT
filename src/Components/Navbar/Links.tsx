import React from 'react'
import { SelectedPage } from './enumerates';
type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
  };
  
const Links = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
      <p
        className={`${selectedPage === lowerCasePage ? "text-[#d9be94]" : ""}
          transition duration-500 hover:text-[#d9be94]
        `}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </p>
    );
}

export default Links
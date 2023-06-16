import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {

    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

    const handleClickedHamburger = () => {
        setIsHamburgerClicked(preValue => !preValue)
    }

    return ( 
       <div className="py-4 px-[5%] flex gap-7 justify-between items-center shadow-md">
        {/* logo */}
          <div className="justify-self-center">
            <img src="img/Logo/logo1-removebg.png" alt="logo" className="w-[150px]" />
          </div>
          <div>
            {/* hamburger menu icon */}
            <div onClick={handleClickedHamburger} className={`relative ${isHamburgerClicked ? "z-10" : ""}`}>
                <div className={`h-1 w-[27px] bg-black  duration-500 ${isHamburgerClicked ? "translate-x-[-4.5px] translate-y-[6px] rotate-[-405deg] " : ""} `}></div>
                <div className={`h-1 w-[27px] bg-black mt-2 duration-500 ${isHamburgerClicked ? "translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg]" : ""}`}></div>
            </div>
             {/* NavBar */}
            <div className={` transition-all duration-500 ${isHamburgerClicked ? "h-[100vh] w-[60%] absolute top-0 bg-white right-[0%]" : "right-[-100%]"}`}>
                <div className={`${isHamburgerClicked ? "flex items-center" : "hidden"}`}>
                    <ul className="text-lg font-bold flex flex-col justify-between mt-[50px] p-4">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Login'}>Sign in</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
          </div>
       </div> 
    );
}

export default Header;
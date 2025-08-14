import {Link} from "react-router-dom"
import React,{useState} from 'react'
function NavBar(){
    const [isopen,setIsopen] = useState(false)
return(
    <nav className="h-14 md:h-16 md:w-full px-4 bg-[#29292f] text-white flex justify-between items-center">
        <div>
            <Link className="font-sans md:text-3xl md:ml-3.5 font-bold text-lime-400" to="/">Movie app</Link>
        </div>
    <div className="md:hidden block cursor-pointer" onClick={()=>setIsopen(!isopen)}>
            {isopen?'X':'☰'}
        </div>

        <div className={`${isopen?'block':'hidden'} absolute top-14 gap-2.5 md:gap-1 md:top-0 right-0 sm: bg-[#29292f] p-4 w-[30%] md:flex md:justify-around text-[1rem] font-sans font-semibold grid grid-cols`}>
    
            <Link className="hover:text-lime-200 active:text-lime-400" to="/">Home</Link>
            <Link className="hover:text-lime-200 active:text-lime-400" to="/favorites">Favorites</Link>
        </div>
    </nav>
)
}
export default NavBar
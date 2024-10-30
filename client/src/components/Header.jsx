import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore"
import { useState } from "react"
import {Flame,User,LogOut,Menu} from "lucide-react";

const Header = () => {
    const{authUser,logout} = useAuthStore();
    const[dropdownOpen,setDropdownOpen] = useState(false);
    const[mobileMenuOpen,setMobileMenuOpen] =useState(false);
    const  dropdownRef = useRef(null);
  return (
     <header className="bg-gradient-to-r from bg-yellow-500 via-yellow-600 to-yellow-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
                <Link to="/" className=" flex items-center space-x-2">
                  <Flame className="w-8 h-8 text-white"/>
                  <span className="text-2xl font-bold text-white hidden sm:inline">
                    SoulSync
                  </span>
                </Link>      
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    {authUser ? (
                        <div className="relative" ref={dropdownRef}>
                            <button
                            onClick={() =>  setDropdownOpen(!dropdownOpen)}
                            className="flex items-center space-x-2 focus:outline-none">
                              <img
                              src={authUser.image || "/avatar.png"}
                              className="h-10 w-10 object-cover rounded-full border-2 border-white"
                              alt="User image"
                              />
                              <span className="text-white font-medium">
                                 {authUser.name}
                              </span>
                            </button>
                        </div>
                    ) : (
                        <>
                        <Link 
                        to="/login"
                        className=" text-white hover:text-yellow-200 transition duration-150 ease-in-out">
                        Login
                        </Link>
                        <Link
                        to="/register"
                        className="bg-white text-yellow px-4 py-2 rounded-full font-medium hover:bg-yellow-100
                        transition duration-150 ease-in-out">
                            Sign Up
                        </Link>
                        </>
                    )}
                </div>
                <div className="md:hidden">
                    <button
                    onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-white focus:outline-none">
                    <Menu className="size-6"/>
                    </button>
                </div>
          </div>        
        </div>
     </header> 
  )
}

export default Header
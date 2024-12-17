import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useState, useRef, useEffect } from "react";
import { Flame, User, LogOut, Menu } from "lucide-react";

const Header = () => {
  const { authUser, logout } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(()=> {
  const handleClickOutside = (event) =>{
    if(dropdownOpen.current && !dropdownRef.current.contains(event.target)){
      setDropdownOpen(false);
    }
  }
  document.addEventListener('mousedown',handleClickOutside);
},[])
  

  return (
    <header className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Flame className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white hidden sm:inline">
                SoulSync
              </span>
            </Link>
          </div>

          {/* Links and User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {authUser ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    src={authUser.image || "/profile.png"}
                    className="h-10 w-10 object-cover rounded-full border-2 border-white"
                    alt="User avatar"
                  />
                  <span className="text-white font-medium">
                    {authUser.name}
                  </span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-yellow-200 transition duration-150 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  to="/auth"
                  className="bg-white text-yellow-600 px-4 py-2 rounded-full font-medium hover:bg-yellow-100 transition duration-150 ease-in-out"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            {authUser ? (
              <>
                <Link
                  to="/profile"
                  className="block text-white py-2 px-4 hover:bg-yellow-600"
                  onClick={()=>setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="block text-white py-2 px-4 hover:bg-yellow-600 w-full text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="block text-white py-2 px-4 hover:bg-yellow-600"
                >
                  Login
                </Link>
                <Link
                  to="/auth"
                  className="block text-white py-2 px-4 hover:bg-yellow-600"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
 





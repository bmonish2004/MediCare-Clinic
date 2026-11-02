import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import hamburger from '../../assets/hamburger.png'
import { useState, useRef, useEffect } from "react"

export function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div ref={menuRef} className="sticky top-0 z-50 bg-[#f8fafc]">
                <div className="flex justify-between border-b-2 p-4 border-gray-300 w-full items-center shadow-sm mx-0">
                    <div className="flex gap-2 items-center">
                        <Link to="/">
                            <img src={logo} alt="logo" className="bg-[#E85D75] w-15 border-0 rounded-xl p-2  cursor-pointer invert" /></Link>
                        <div>
                            <h1 className="font-bold text-xl tracking-wide">MEDICARE</h1>
                            <p className="text-sm text-gray-500">Clinic & Wellness</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <ul className="hidden md:flex items-center gap-6 ">
                            <li className="text-gray-500 hover:text-teal-700"><Link to="/">Home</Link></li>
                            <li className=" text-gray-500 hover:text-teal-700"><Link to="/about">About</Link></li>
                            <li className=" text-gray-500 hover:text-teal-700"><Link to="/doctors">Doctors</Link></li>
                            <li className=" text-gray-500 hover:text-teal-700"><Link to="/services">Services</Link></li>
                            <li className=" text-gray-500 hover:text-teal-700"><Link to="/contact-us">Contact</Link></li>
                        </ul>
                    </div>
                    <button type="button"
                        className="md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)} >
                        <img src={hamburger} alt="ham"
                            className="md:hidden p-2 border-0 rounded hover:bg-gray-200 w-11 cursor-pointer shadow-2xl" />
                    </button>
                </div>
                {menuOpen && (<nav>
                    <ul className="md:hidden border-t border-gray-200 bg-teal-300/20 px-5 py-3 w-full">
                        <li className="block py-3 text-gray-600 hover:text-teal-700 hover:underline"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li className="block py-3 text-gray-600 hover:text-teal-700 hover:underline"><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li className="block py-3 text-gray-600 hover:text-teal-700 hover:underline"><Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link></li>
                        <li className="block py-3 text-gray-600 hover:text-teal-700 hover:underline"><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                        <li className="block py-3 text-gray-600 hover:text-teal-700 hover:underline"><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>)}
            </div>
        </>
    )
}
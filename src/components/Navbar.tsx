import { useState } from 'react';
import logo from '../assets/legal-blogs-logo-light.png';
import { Link, NavLink } from 'react-router-dom';
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<string>('block');
  const [menuClose, setMenuClose] = useState<string>('hidden');
  const [navLink, setNavLink] = useState<string>('hidden');

  const handleOpenMenu = (): void => {
    setMenuOpen('hidden');
    setMenuClose('block');
    setNavLink('flex');
  };

  const handleCloseMenu = (): void => {
    setMenuClose('hidden');
    setMenuOpen('block');
    setNavLink('hidden');
  };
  return (
    <>
      <header className='px-4 md:py-2 py-4'>
        <nav className='grid grid-cols-12 gap-2 font-bold'>
          <h1 className='col-span-3 '>
            <Link to='/'>
              <img src={logo} alt='legal blogs by rohan logo' />
            </Link>
          </h1>
          <ul
            className={`col-span-9 text-2xl md:flex ${navLink} md:flex-row flex-col justify-evenly items-center md:relative absolute md:top-auto top-0 md:right-auto right-0 md:bg-transparent bg-[--primary-bg-color] md:h-auto h-screen md:w-auto w-1/2 animate-slide-from-right`}
          >
            <NavLink to='/'>
              <li>Home</li>
            </NavLink>
            <NavLink to='#posts'>
              <li>Posts</li>
            </NavLink>
            <NavLink to='/about'>
              <li>About</li>
            </NavLink>
            <NavLink to='/contact'>
              <li>Contact</li>
            </NavLink>
            <NavLink to='/Login'>
              <li>Login</li>
            </NavLink>
            <NavLink to='/write'>
              <li>Write</li>
            </NavLink>

            <ul className='flex gap-5'>
              <li>
                <i className='fa-brands fa-x-twitter'></i>
              </li>
              <li>
                <i className='fa-brands fa-linkedin-in'></i>
              </li>
              <li>
                <i className='fa-brands fa-instagram'></i>
              </li>
            </ul>
          </ul>
          <div className='menu cursor-pointer absolute right-0 mr-2'>
            <i
              className={`fa-solid fa-bars text-4xl absolute right-0 md:hidden ${menuOpen}`}
              onClick={handleOpenMenu}
            ></i>
            <i
              className={`fa-solid fa-xmark text-4xl absolute right-0 ${menuClose}`}
              onClick={handleCloseMenu}
            ></i>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;

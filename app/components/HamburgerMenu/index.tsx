'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='nav-menu'>
      <button
        className={`${showMenu && 'bg-transparent'} bg-black bg-opacity-50 w-8 h-8 rounded-md absolute top-0 right-0 z-50`}
        onClick={() => setShowMenu((prevState: boolean) => !prevState)}
      >
        {showMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
      <nav
        className={`${
          showMenu ? 'transform translate-x-0' : 'transform translate-x-full'
        } transition duration-500 ease flex flex-col align-end w-32 bg-black bg-opacity-50 h-screen w-max z-40 top-0 right-0 fixed p-3 pt-10 text-right`}
      >
        <ul>
          <li>
            <Link href='/' onClick={() => setShowMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/berlin' onClick={() => setShowMenu(false)}>
              Berlin
            </Link>
          </li>
          <li>
            <Link href='/freiburg' onClick={() => setShowMenu(false)}>
              Freiburg
            </Link>
          </li>
          <li>
            <Link href='/hamburg' onClick={() => setShowMenu(false)}>
              Hamburg
            </Link>
          </li>
          <li>
            <Link href='/munich' onClick={() => setShowMenu(false)}>
              Munich
            </Link>
          </li>
          <li>
            <Link href='/nuremberg' onClick={() => setShowMenu(false)}>
              Nuremberg
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HamburgerMenu;

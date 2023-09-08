'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure } from '@chakra-ui/react';

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <header className='nav-menu'>
      {!isOpen && (
        <Button className='bg-black text-white bg-opacity-50 w-8 h-8 rounded-md absolute top-0 right-0 z-50`' ref={btnRef} onClick={onOpen}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      )}
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <ul className='pt-12'>
              <li className='text-right'>
                <Link href='/'>Home</Link>
              </li>
              <li className='text-right'>
                <Link href='/berlin'>Berlin</Link>
              </li>
              <li className='text-right'>
                <Link href='/freiburg'>Freiburg</Link>
              </li>
              <li className='text-right'>
                <Link href='/hamburg'>Hamburg</Link>
              </li>
              <li className='text-right'>
                <Link href='/munich'>Munich</Link>
              </li>
              <li className='text-right'>
                <Link href='/nuremberg'>Nuremberg</Link>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default HamburgerMenu;

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Container from '../components/Container';
import Logo from '../components/Logo';
import NavigationMenu from '../components/NavigationMenu';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative bg-white dark:bg-dark">
        <Container>
          <div className="flex w-full flex-wrap items-center justify-between py-3">
            <div className="flex w-full items-center justify-between gap-4 md:w-max">
              <Logo variant="light" />
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center justify-center rounded border border-gray-700 p-1 text-sm text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:border-gray-200 dark:text-gray-200 dark:hover:text-gray-400 md:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              </button>
            </div>
            <NavigationMenu openState={open} />
          </div>
        </Container>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;

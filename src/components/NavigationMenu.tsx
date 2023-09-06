import { MouseEvent } from 'react';
import { twJoin } from 'tailwind-merge';

import CVDownloadButton from './CVDownloadButton';
import ThemeSwitcher from './ThemeSwitcher';

type MenuItem = {
  id: number;
  itemName: string;
  path: string;
};
const menuItems: MenuItem[] = [
  {
    id: 1,
    itemName: 'About',
    path: '#about',
  },
  {
    id: 2,
    itemName: 'Projects',
    path: '#projects',
  },
  {
    id: 3,
    itemName: 'Contact',
    path: '#contact',
  },
];

const NavigationMenu = ({ openState }: { openState: boolean }) => {
  const handelNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const path = (e.target as HTMLAnchorElement).getAttribute('href');
    if (!path) return;
    document.querySelector(path)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden items-center gap-2 md:flex">
        <ThemeSwitcher className="mr-8" />
        <ul className="flex gap-2">
          {menuItems.map(item => (
            <li key={item.id}>
              <a
                href={item.path}
                className="rounded-md px-4 py-2 font-medium text-dark transition-colors duration-200 ease-linear hover:bg-gray-700 hover:text-white dark:text-white"
                onClick={handelNavigation}
              >
                {item.itemName}
              </a>
            </li>
          ))}
        </ul>
        <CVDownloadButton />
      </nav>
      {/* Mobile Navbar */}
      <nav
        className={twJoin(
          'mt-3 grid w-full overflow-hidden rounded-md bg-white-full px-3 transition-[grid-template-rows]  duration-300 ease-linear dark:bg-dark-700 md:hidden',
          !openState ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]',
        )}
      >
        <div
          className={twJoin(
            'min-h-0 transition-[visibility] duration-300',
            !openState ? 'invisible' : 'visible',
          )}
        >
          <ul className="mt-1 flex flex-col gap-1 py-6">
            <>
              {menuItems.map(item => (
                <li key={item.id} className="flex">
                  <a
                    href={item.path}
                    onClick={handelNavigation}
                    className="transition-color relative w-full rounded bg-white py-2 text-center font-medium text-dark duration-1000 ease-linear hover:bg-gray-300 dark:bg-dark-900 dark:text-white dark:hover:bg-dark-800"
                  >
                    {item.itemName}
                  </a>
                </li>
              ))}
            </>
          </ul>
          <div className="mb-3 flex items-center justify-between">
            <ThemeSwitcher />
            <CVDownloadButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;

import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';

import Button from './Button';
import ThemeSwitcher from './ThemeSwitcher';

type MenuItem = {
  id: number;
  itemName: string;
  path: string;
};
const menuItems: MenuItem[] = [
  {
    id: 1,
    itemName: 'Skills',
    path: '#skills',
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
  const downloadFile = () => {
    const element = document.createElement('a');
    element.href = '/Lakshmikanta.pdf';
    element.download = 'Lakshmikanta.pdf';
    document.body.appendChild(element);
    element.click();
  };

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
      <nav className="hidden items-center gap-4 md:flex">
        <ThemeSwitcher />
        <ul className="flex gap-4">
          {menuItems.map(item => (
            <li key={item.id}>
              <a
                href={item.path}
                className="font-medium text-white"
                onClick={handelNavigation}
              >
                {item.itemName}
              </a>
            </li>
          ))}
        </ul>
        <Button onClick={downloadFile}>Download CV</Button>
      </nav>
      {/* Mobile Navbar */}
      <nav className="w-full px-3 md:hidden">
        {openState && (
          <>
            <ul
              className={twJoin(
                `mt-1 flex flex-col gap-1 py-6 transition-all duration-500`,
                !openState && 'h-0 w-0 scale-y-0',
                openState && 'h-full w-full origin-top scale-y-100',
              )}
            >
              <>
                {menuItems.map(item => (
                  <Link to={item.path}>
                    <li
                      key={item.id}
                      className="transition-color relative rounded bg-gray-800 py-2 text-center font-medium text-white duration-1000 ease-linear hover:bg-gray-700"
                    >
                      {item.itemName}
                    </li>
                  </Link>
                ))}
              </>
            </ul>
            <div className="flex items-center justify-between">
              <ThemeSwitcher />
              <Button onClick={downloadFile}>Download CV</Button>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default NavigationMenu;

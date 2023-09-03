import clsx from 'clsx';
import { Link } from 'react-router-dom';

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
    itemName: 'About Me',
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
  const downloadFile = () => {
    const element = document.createElement('a');
    element.href = '/Lakshmikanta.pdf';
    element.download = 'Lakshmikanta.pdf';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden items-center gap-4 md:flex">
        <ThemeSwitcher />
        <ul className="flex gap-4">
          {menuItems.map(item => (
            <li key={item.id}>
              <Link to={item.path} className="font-medium text-white">
                {item.itemName}
              </Link>
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
              className={clsx(
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

import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES_CONFIG } from '../../ImportExport';

const Header = () => {
    const navLinkStyles = {
        base: 'block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:text-green-500  lg:border-0 ',
        active: 'text-orange-700',
        inactive: 'text-gray-700',
      };
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://th.bing.com/th/id/OIP.TeB6xuVdwSh_Y9A8ogdgLgHaF7?rs=1&pid=ImgDetMain"
              className="mr-3 h-12"
              alt="Logo"
            />
          </NavLink>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
             className={({isActive })=>
                `${navLinkStyles.base} ${(isActive ||  location.pathname === '/')? navLinkStyles.active:navLinkStyles.inactive} `
                }
                  to={ROUTES_CONFIG.CURRENCY_CONVERTER}
                >
                  Convert Currency
                </NavLink>
              </li>
              <li>
                <NavLink
                className={({isActive})=>
                `${navLinkStyles.base} ${isActive ?navLinkStyles.active:navLinkStyles.inactive}`
                }
                  to={ROUTES_CONFIG.PASSWORD_GENERATOR}
                >
                  Generate Password
                </NavLink>
              </li>
              <li>
                <NavLink
               className={({isActive})=>
                `${navLinkStyles.base} ${isActive ?navLinkStyles.active:navLinkStyles.inactive}`
                }
                  to={ROUTES_CONFIG.BG_CHANGER}
                >
                  Change Background
                </NavLink>
              </li>
              <li>
                <NavLink
               className={({isActive})=>
                `${navLinkStyles.base} ${isActive ?navLinkStyles.active:navLinkStyles.inactive}`
                }                
                to={ROUTES_CONFIG.COUNTER}
                >
                  Counter App
                </NavLink>
              </li>
              <li>
                <NavLink
               className={({isActive})=>
                `${navLinkStyles.base} ${isActive ?navLinkStyles.active:navLinkStyles.inactive}`
                }                
                to={ROUTES_CONFIG.GITHUB}
                >
                  My Git
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

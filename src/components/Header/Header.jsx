import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES_CONFIG } from '../../ImportExport';

const Header = () => {
  const navLinkStyles = {
    base: 'block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:text-green-500 lg:border-0 ',
    active: 'text-orange-700',
    inactive: 'text-gray-700',
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <ul className="flex font-medium space-x-4">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${navLinkStyles.base} ${(isActive || location.pathname === '/') ? navLinkStyles.active : navLinkStyles.inactive}`
                  }
                  to={ROUTES_CONFIG.CURRENCY_CONVERTER}
                >
                  Convert Currency
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${navLinkStyles.base} ${isActive ? navLinkStyles.active : navLinkStyles.inactive}`
                  }
                  to={ROUTES_CONFIG.PASSWORD_GENERATOR}
                >
                  Generate Password
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${navLinkStyles.base} ${isActive ? navLinkStyles.active : navLinkStyles.inactive}`
                  }
                  to={ROUTES_CONFIG.BG_CHANGER}
                >
                  ChangeBG
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${navLinkStyles.base} ${isActive ? navLinkStyles.active : navLinkStyles.inactive}`
                  }
                  to={ROUTES_CONFIG.COUNTER}
                >
                  CounterAPp
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${navLinkStyles.base} ${isActive ? navLinkStyles.active : navLinkStyles.inactive}`
                  }
                  to={ROUTES_CONFIG.NUMBER_GAME}
                >
                  NumberGuss
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${navLinkStyles.base} ${isActive ? navLinkStyles.active : navLinkStyles.inactive}`
                  }
                  to={ROUTES_CONFIG.TEXT_UTILS}
                >
                  TextUtils
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${navLinkStyles.base} ${isActive ? navLinkStyles.active : navLinkStyles.inactive}`
                  }
                  to={ROUTES_CONFIG.GITHUB}
                >
                  PROFILE
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

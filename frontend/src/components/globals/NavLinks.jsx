import links from '@/utils/links';
import { NavLink } from 'react-router-dom';

function NavLinks({ toggleSidebar }) {
  const navLinkStyles =
    'flex items-center  py-4 pl-10 capitalize transition-pl duration-300 ease-in-out hover:pl-12 ';

  return (
    <div className="pt-8 flex flex-col">
      {links.map(({ text, path, icon }) => (
        <NavLink
          key={text}
          to={path}
          className={({ isActive }) =>
            isActive
              ? `${navLinkStyles} text-primary`
              : `${navLinkStyles} text-secondary-foreground hover:text-primary`
          }
          onClick={toggleSidebar}
          end
        >
          <span className="mr-4 grid place-items-center text-[1.5rem]">
            {icon}
          </span>
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;

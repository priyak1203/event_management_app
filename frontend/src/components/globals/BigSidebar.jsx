import { useSelector } from 'react-redux';
import Logo from './Logo';
import NavLinks from './NavLinks';

function BigSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  console.log(isSidebarOpen);

  const sidebarStyles = isSidebarOpen
    ? 'bg-muted min-h-[100vh] h-[100%] w-[250px] transition-ml duration-300 ease-in-out ml-[-250px] '
    : 'bg-muted min-h-[100vh] h-[100%] w-[250px] transition-ml duration-300 ease-in-out ml-0';

  return (
    <aside className="hidden lg:block shadow-lg">
      <div className={sidebarStyles}>
        <div className="sticky top-0">
          <header className="h-[6rem] flex items-center pl-20">
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
}

export default BigSidebar;

import { FaTimes } from 'react-icons/fa';
import { Button } from '../ui/button';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '@/features/user/userSlice';

function SmallSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  const sidebarStyles = isSidebarOpen
    ? 'fixed inset-0 bg-transparent flex justify-center items-center transition duration-300 ease-in-out z-[99] opacity-100 visible'
    : 'fixed inset-0 bg-transparent flex justify-center items-center transition duration-300 ease-in-out z-[-1] opacity-0 invisible';

  return (
    <aside className="lg:hidden">
      <div className={sidebarStyles}>
        <div className="bg-muted w-[90vw] h-[95vh] rounded-sm py-16 px-8 relative flex items-center flex-col">
          <Button
            type="button"
            size="icon"
            className="bg-transparent border-transparent absolute top-[10px] left-[10px] text-destructive hover:bg-transparent hover:border-transparent"
            onClick={toggle}
          >
            <FaTimes />
          </Button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </aside>
  );
}

export default SmallSidebar;

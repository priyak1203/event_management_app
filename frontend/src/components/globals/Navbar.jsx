import { Button } from '../ui/button';
import { FaAlignRight } from 'react-icons/fa';
import Logo from './Logo';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/features/user/userSlice';
import LogoutContainer from './LogoutContainer';

function Navbar() {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <nav className="h-[6rem] bg-muted flex items-center justify-center shadow-md lg:sticky top-0">
      <div className="w-[90vw] flex items-center justify-between lg:w-[90%]">
        <Button
          type="button"
          size="icon"
          className="bg-transparent border-transparent text-primary flex items-center hover:text-primary-foreground"
          onClick={toggle}
        >
          <FaAlignRight />
        </Button>
        <div>
          <span className="lg:hidden">
            <Logo />
          </span>
          <h4 className="hidden lg:block text-lg md:text-xl lg:text-3xl capitalize text-primary font-semibold">
            dashboard
          </h4>
        </div>
        <div className="flex items-center mr-8">
          <LogoutContainer />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

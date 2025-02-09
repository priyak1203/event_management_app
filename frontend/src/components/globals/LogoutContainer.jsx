import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { FaUser } from 'react-icons/fa';
import { TbLogout2 } from 'react-icons/tb';
import { logoutUser } from '@/features/user/userSlice';

function LogoutContainer() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          type="button"
          variant="outline"
          className="capitalize text-primary border-primary flex py-5 justify-between"
        >
          <Avatar className="p-1">
            <AvatarImage />
            <AvatarFallback>
              <FaUser />
            </AvatarFallback>
          </Avatar>
          {user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Button
          className="w-full flex items-center"
          type="button"
          onClick={() => dispatch(logoutUser('logged out'))}
        >
          <span>
            <TbLogout2 />
          </span>
          Logout
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LogoutContainer;

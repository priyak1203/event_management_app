import { FaCalendarDays } from 'react-icons/fa6';
import { FaCalendarPlus } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa';

const links = [
  {
    text: 'all events',
    path: '.',
    icon: <FaCalendarDays />,
  },
  {
    text: 'add event',
    path: 'add-event',
    icon: <FaCalendarPlus />,
  },
  {
    text: 'events',
    path: 'events',
    icon: <FaCalendarCheck />,
  },
];

export default links;

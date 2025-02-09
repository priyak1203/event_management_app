import { BigSidebar, SmallSidebar, Navbar } from '@/components/globals';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-[auto,_1fr]">
      <BigSidebar />
      <SmallSidebar />
      <div>
        <Navbar />
        <div className="border w-[90vw] mx-auto py-8 lg:w-[90%]">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default DashboardLayout;

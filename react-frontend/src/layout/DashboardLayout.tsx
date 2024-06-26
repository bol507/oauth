import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import style from './dashboardLayout.module.css';

interface DashboardLayoutProps {
  //
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div className={style.dashboardLayout}>
      <div className="col-span-2 row-span-1">
        <Header />
      </div>
      <aside className="sm:row-start-2 sm:row-span-1 hidden sm:block">
        <Sidebar />
      </aside>
      <main className="col-start-2 col-span-1">
        <Outlet />
      </main>
      <div className="col-span-2">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;

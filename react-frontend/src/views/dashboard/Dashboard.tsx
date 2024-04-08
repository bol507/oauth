import { Outlet } from 'react-router-dom';

interface DashboardProps {
  //
}

const Dashboard = (props: DashboardProps) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Dashboard;

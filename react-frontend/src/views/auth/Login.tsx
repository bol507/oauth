import { Outlet } from 'react-router-dom';
interface LoginProps {
  //
}
const Login = (props: LoginProps) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Login;

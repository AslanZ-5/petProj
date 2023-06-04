import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthSuccess } from 'hooks/useAuthSuccess';
import { Role } from '../../types/AuthDTO/AuthDTO';
import type { PrivateRouteProps } from './types';

const PrivateRoute = ({ necessaryRole }: PrivateRouteProps): JSX.Element | null => {
  const { role, localToken } = useAuthSuccess();
  const location = useLocation();

  if (necessaryRole?.includes(role)) {
    return <Outlet />;
  }

  if (role !== Role.UNVERIFIED_CLIENT) {
    return (
      <div>
        <h2>
          {`Ваша роль ${role}.`}
        </h2>
        <h2>
          {`Для доступа на данную страницу требуется следующая роль ${necessaryRole.join(' или ')}. `}
        </h2>
        <Link to="/sign-in" state={{ from: location }} replace>Сменить учетную запись</Link>
      </div>
    );
  }

  if (!localToken) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return null;
};

export default PrivateRoute;

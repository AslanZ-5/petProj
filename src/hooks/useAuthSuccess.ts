import { useNavigate } from 'react-router-dom';
import { pushAuth } from 'features/userSlice/userSlice';
import { IAuthResponse, Role } from 'types/AuthDTO/AuthDTO';
import { useAppDispatch, useAppSelector } from './redux';

interface IUseAuthSuccess {
  dispatchAuth: (payload: IAuthResponse) => void;
  redirect: (payload: IAuthResponse) => void;
  isAuth: boolean;
  role: Role;
  localToken: string | null;
}

export const useAuthSuccess = (): IUseAuthSuccess => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dispatchAuth = (payload: IAuthResponse) => dispatch(pushAuth(payload));
  const redirect = ({ role }: IAuthResponse) => {
    const path = role.toLocaleLowerCase();
    navigate(`/${path}`);
  };
  const { user } = useAppSelector((state) => state.authSlice);

  return {
    dispatchAuth,
    redirect,
    isAuth: !!user,
    role: user ? user.role : Role.UNVERIFIED_CLIENT,
    localToken: localStorage.getItem('token'),
  };
};

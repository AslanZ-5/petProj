import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from 'features/landing/Landing';
import Header from 'widgets/HeaderWidget';
import Footer from 'widgets/FooterWidget';
import { Role } from 'types/AuthDTO/AuthDTO';
import { useAuthSuccess } from 'hooks/useAuthSuccess';
import { useLazyRequestRoleQuery } from 'services/Auth/AuthAPI';
import {
  AdminPage,
  ClientPage,
  DoctorPage,
  ForumPage,
  ManagerPage,
  PetFindPage,
  SignInPage,
  SignUpPage,
  PrivateRoute,
} from 'view';

import ManagerNews from 'view/Manager/ManagerPage/ManagerNews/ManagerNews';
import cl from './App.module.scss';

function App(): JSX.Element {
  const { isAuth } = useAuthSuccess();
  const [trigger] = useLazyRequestRoleQuery();

  useEffect(() => {
    if (localStorage.getItem('token') && !isAuth) {
      trigger();
    }
  }, [isAuth, trigger]);

  return (
    <>
      <Header />
      <div className={cl.layout}>
        <div className={cl.layout_page}>
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route element={<PrivateRoute necessaryRole={[Role.ADMIN]} />}>
                <Route path="/admin" element={<AdminPage />} />
              </Route>
              <Route element={<PrivateRoute necessaryRole={[Role.CLIENT]} />}>
                <Route path="/client" element={<ClientPage />} />
                <Route path="/petFindPage" element={<PetFindPage />} />
              </Route>
              <Route element={<PrivateRoute necessaryRole={[Role.MANAGER]} />}>
                <Route path="/manager" element={<ManagerPage />} />
                <Route path="/manager/news" element={<ManagerNews />} />
              </Route>
              <Route element={<PrivateRoute necessaryRole={[Role.DOCTOR]} />}>
                <Route path="/doctor" element={<DoctorPage />} />
              </Route>
              <Route element={<PrivateRoute necessaryRole={[Role.CLIENT, Role.MANAGER, Role.DOCTOR, Role.ADMIN]} />}>
                <Route path="/forum" element={<ForumPage />} />
              </Route>
              <Route path="*" element={<h2>Page is not found</h2>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

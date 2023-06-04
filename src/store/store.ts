import { configureStore } from '@reduxjs/toolkit';
import { authApi } from 'services/Auth/AuthAPI';
import { managerNewsApi } from 'services/manager/managerNewsApi';
import { userDoctorReviewApi } from 'services/Auth/user/userDoctorReviewApi';
import { userNotificationApi } from 'services/Auth/user/userNotificationApi';
import { topicApi } from 'services/user/TopicApi';
import { medicineApi } from 'services/manager/medicineApi';
import { commentApi } from 'services/user/CommentApi';
import { petContactApi } from 'services/client/petContactApi';
import { userDoctorReviewsApi } from 'services/user/userDoctorReviewApi';
import { userProfileApi } from 'services/user/userProfileApi';
import { clientApi } from 'services/client/clientApi ';
import { managerAppearanceApi } from 'services/manager/managerAppearanceApi';
import { clientReviewApi } from 'services/client/clientReviewApi';
import { clientAppointmentCalendarApi } from 'services/client/ClientAppointmentCalendarApi';
import { dewormingApi } from 'services/client/DewormingApi';
import { petFoundApi } from 'services/client/petFoundApi';
import { petClientApi } from 'services/client/petClientApi';
import { vaccinationApi } from 'services/client/vaccinationApi';
import { ectoparaziteApi } from 'services/client/ectoparasiteApi';
import { userSlice } from 'features/userSlice/userSlice';
import { reproductionApi } from 'services/client/reproductionApi';
import { userNotificationApi as notificationApi } from 'services/user/userNotificationApi';
import authSlice from '../features/authSlice/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [managerAppearanceApi.reducerPath]: managerAppearanceApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [managerNewsApi.reducerPath]: managerNewsApi.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
    [topicApi.reducerPath]: topicApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [clientAppointmentCalendarApi.reducerPath]:
      clientAppointmentCalendarApi.reducer,
    [clientReviewApi.reducerPath]: clientReviewApi.reducer,
    [dewormingApi.reducerPath]: dewormingApi.reducer,
    [petFoundApi.reducerPath]: petFoundApi.reducer,
    [petClientApi.reducerPath]: petClientApi.reducer,
    [ectoparaziteApi.reducerPath]: ectoparaziteApi.reducer,
    [userNotificationApi.reducerPath]: userNotificationApi.reducer,
    [userDoctorReviewApi.reducerPath]: userDoctorReviewApi.reducer,
    [userDoctorReviewsApi.reducerPath]: userDoctorReviewsApi.reducer,
    [reproductionApi.reducerPath]: reproductionApi.reducer,
    [medicineApi.reducerPath]: medicineApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,
    [petContactApi.reducerPath]: petContactApi.reducer,
    [vaccinationApi.reducerPath]: vaccinationApi.reducer,
    user: userSlice.reducer,
    authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    authApi.middleware,
    userProfileApi.middleware,
    managerAppearanceApi.middleware,
    topicApi.middleware,
    clientApi.middleware,
    clientAppointmentCalendarApi.middleware,
    clientReviewApi.middleware,
    dewormingApi.middleware,
    petFoundApi.middleware,
    petClientApi.middleware,
    ectoparaziteApi.middleware,
    userDoctorReviewApi.middleware,
    userNotificationApi.middleware,
    commentApi.middleware,
    userDoctorReviewsApi.middleware,
    reproductionApi.middleware,
    medicineApi.middleware,
    notificationApi.middleware,
    managerNewsApi.middleware,
    petContactApi.middleware,
    vaccinationApi.middleware
  ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch;

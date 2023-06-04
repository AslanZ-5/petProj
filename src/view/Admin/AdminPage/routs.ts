import {
  iconComments,
  iconHistory,
  iconHome,
  iconNotification,
  iconPrivacy,
  iconProfile,
  iconSetting,
  iconSupport,
  iconTasks,
} from 'assets/AdminPage/icons';

interface IAdminRouts {
  label: string,
  icon: string,
}

const adminRouts: Array<IAdminRouts> = [
  { label: 'home', icon: iconHome },
  { label: 'doctors', icon: iconProfile },
  { label: 'notification', icon: iconNotification },
  { label: 'users', icon: iconHistory },
  { label: 'topic', icon: iconTasks },
  { label: 'comments', icon: iconComments },
  { label: 'setting', icon: iconSetting },
  { label: 'support', icon: iconSupport },
  { label: 'privacy', icon: iconPrivacy },
];

export default adminRouts;

export type TUniqueId = number;

export interface ITopicDtoPut {
  title: string;
  content: string;
}

export interface IUserInfoDto {
  id: TUniqueId;
  email: string;
  firstname: string;
  lastname: string;
}

export interface ICommentDto {
  id: TUniqueId;
  content: string;
  dateTime: string;
  likes: number;
  dislike: number;
  UserInfoDto: IUserInfoDto;
}

export interface ITopicDto {
  id: TUniqueId;
  title: string;
  content: string;
  creationDate: string;
  lastUpdateDate: string;
  topicStarter: IUserInfoDto;
  commentDtoList: ICommentDto[];
}

export interface IProfileDto {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  discordId: string;
  telegramId: string;
  discordNotify: boolean;
  emailNotify: boolean;
}

export interface ICommentDtoPut {
  content: string;
}

export interface ITopicDtoPost {
  title: string;
  content: string;
}

export interface INotificationDto {
  id: TUniqueId;
  content: string;
  eventDate: string;
  important: boolean;
}

export interface IUserNotificationDto {
  id: TUniqueId;
  user: IUserInfoDto;
  notification: INotificationDto;
  show: boolean;
}

export interface IDoctorReviewDto {
  id: TUniqueId;
  doctorId: TUniqueId;
  review: ICommentDto;
}

export type UserProfileResponse = {
  name: string;
  lastName: string;
  username: string;
  profilePicture?: string;
  location?: string;
  createdAt: string;
};

export type UserAvatarResponse = Pick<UserProfileResponse, "username" | "profilePicture">;

export type UserType = {
  nickname: string;
  level: number;
  mileage: number;
  point: number;
  current_challenge: null;
  done_challenge_id: null;
  friends: string[];
  items: null;
  id: string;
};

export type FolloweeUserType = {
  followee_id: string;
};

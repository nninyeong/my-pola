import { Challenge } from './challenge.types';
import { Item } from './Item.types';

export type UserType = {
  nickname: string;
  level: number;
  mileage: number;
  point: number;
  current_challenge_id: Challenge;
  done_challenge_id: Challenge;
  friends: string[];
  items: null;
  id: string;
  equipped_item_id: Item | null;
};

export type FolloweeUserType = {
  followee_id: string;
};

import { createClient } from './client';

export const getClientUser = async () => {
  const client = createClient();
  const { data, error } = await client.auth.getUser();
  if (error) {
    console.error('Failed to fetch client user: ', error);
  }
  return data?.user ?? null;
};

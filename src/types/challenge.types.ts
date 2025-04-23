export type Challenge = {
  id: number;
  title: string;
  description: string;
  icon_url: string;
  image_url: string;
  tip: string;
  carbon_emissions: number;
};

export type CurrentChallenge = {
  current_challenge_id: Challenge | null;
  challenge_updated_at: Date | null;
};

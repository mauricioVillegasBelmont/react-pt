export interface ResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface LocationInterface {
  id: number; //	The id of the location.
  name: string; //	The name of the location.
  type: string; //	The type of the location.
  dimension: string; //	The dimension in which the location is located.
  residents: object; //(urls)	List of character who have been last seen in the location.
  url: string; // (url)	Link to the location's own endpoint.
  created: string; //	Time at which the location was created in the database.
}


export interface APIResponse {
  info: ResponseInfo;
  results: (CharacterInterface | LocationInterface)[];
}

export interface APIError {
  error: string;
}

export type ItemType = CharacterInterface | LocationInterface;

export interface User {
  username: string;
  password: string;
  favorites: any[]; // Cambia esto según el tipo real de `favorites`
}
import {GenreEnum} from "../enumeration/genre-enum";

export interface Book {
  id: string;
  createdAt: Date;
  name: string;
  description: string;
  genre: GenreEnum;
  bestseller: boolean;
  percentageCopiesOnDisplay: number;
  authorsIds: number;
}

import {GenreEnum} from "../enumeration/genre-enum";

export interface Book {
  id: string;
  createdAt: Date;
  name: string;
  description: string;
  genre: GenreEnum;
  bestseller: boolean;
  minimumOnDisplay: number;
  authorsIds: string[];
}

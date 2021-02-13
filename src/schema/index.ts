import { buildSchema } from "graphql";
import Norris from "../controllers/norris";

export const schema = buildSchema(`
  type Query {
    categories: [String]
    joke(category: String): String
  }
`);

export const rootValue = {
  categories: async () => await Norris.getCategories(),
  joke: async (category: { [key: string]: string }) =>
    await Norris.getJokesByCategory(category),
};

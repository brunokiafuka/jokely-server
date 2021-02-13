import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema, rootValue } from "./schema";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        rootValue,
        graphiql: true,
      })
    );
  }
}

export default new App().app;

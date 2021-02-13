import fetch from "node-fetch";

interface IJoke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

class Norris {
  private baseUrl: string = "https://api.chucknorris.io/jokes";

  async getCategories(): Promise<string[]> {
    const response = await fetch(`${this.baseUrl}/categories`);
    const data = (await response.json()) as string[];

    return data;
  }

  async getJokesByCategory({
    category,
  }: {
    [key: string]: string;
  }): Promise<string> {
    const response = await fetch(`${this.baseUrl}/random?category=${category}`);
    const data = (await response.json()) as IJoke;

    return data.value;
  }
}

export default new Norris();

export const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/"
    : "";
export const APP_ENV = process.env.NODE_ENV !== "production"
  ? "dev"
  : "prod"
export const NEWS_SOURCE = [
  {
    value: "bbc.co.uk",
    name: "BBC UK"
  },
  {
    value: "techcrunch.com",
    name: "Techcrunch"
  },
  {
    value: "wired.com",
    name: "Wired"
  },
  {
    value: "thenextweb.com",
    name: "TheNextWeb"
  },
  {
    value: "lifehacker.com",
    name: "LifeHacker"
  },
  {
    value: "theverge.com",
    name:"The Verge"
  }
];
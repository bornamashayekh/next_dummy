import sql from "better-sqlite3";
import { resolve } from "styled-jsx/css";
const db = sql("meals.db");
export async function GetMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //simulting an extra  delay for getting data
  // throw new Error('failed to fetch data');
  return db.prepare("SELECT * FROM meals").all();
}
export function GetMeal(slug) {
  return db.prepare("SELECT * from meals where slug=?").get(slug);
}

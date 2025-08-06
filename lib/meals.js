import sql from "better-sqlite3";
import fs from 'node:fs';
import slugify from "slugify";
import xss from "xss";
const db = sql("meals.db");
export async function GetMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //simulting an extra  delay for getting data
  // throw new Error('failed to fetch data');
  return db.prepare("SELECT * FROM meals").all();
}
export function GetMeal(slug) {
  return db.prepare("SELECT * from meals where slug=?").get(slug);
}
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferdImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferdImage), (error) => {
    if (error) {
      throw new Error('saving image failed');
    }
  });
  meal.image = `/images/${fileName}`;
  db.prepare(`
    INSERT INTO meals (title , instructions , creator , summary , image , slug , creator_email)
    VALUES (     
      @title,
      @instructions,
      @creator,
      @summary,
      @image,
       @slug,
         @creator_email)`).run(meal);
}
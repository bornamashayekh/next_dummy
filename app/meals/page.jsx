import MealsGrid from "@/comonents/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { GetMeals } from "@/lib/meals";
export default async function MealsPage() {
  const meals = await GetMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals ,Created{" "}
          <span className={classes.highlight}>By you</span>
        </h1>
        <p>
          Choose Your Favorite Recipe And Cook It Yourself , It Is Easy And Fun
        </p>
        <p className={classes.cta}>
          <Link href="meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
          <main className={classes.main}>
              <MealsGrid meals={meals}></MealsGrid>
      </main>
    </>
  );
}

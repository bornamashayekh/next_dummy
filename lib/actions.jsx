'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {

   const meal = {
       title:formData.get('title'),
       instructions:formData.get('instructions'),
       creator:formData.get('name'),
       creator_email:formData.get('email'),
       summary:formData.get('summary'),
       image:formData.get('image'),
   };
    await saveMeal(meal);
    redirect('/meals');
}
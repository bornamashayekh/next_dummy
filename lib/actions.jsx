'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState , formData) {
    function isInvalidText(text) {
        return !text || text.trim() === '';
}
   const meal = {
       title:formData.get('title'),
       instructions:formData.get('instructions'),
       creator:formData.get('name'),
       creator_email:formData.get('email'),
       summary:formData.get('summary'),
       image:formData.get('image'),
    };
    if (isInvalidText(meal.title) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator_email) ||
        isInvalidText(meal.summary ||
            !meal.creator_email.includes('@') ||
            !meal.image || meal.image.size===0
        )) {
        return {
            message: 'Please check your inputs. All fields are required and email must be valid.',

        };
        
    }
    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
}
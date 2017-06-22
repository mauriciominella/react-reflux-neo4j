match (recipe:Recipe)<-[r*]-(:Meal)
where (recipe)<-[:BELONGS_TO]-(:Option)<-[:IS_PART_OF]-(:Meal)
or (recipe)<-[:IS_PART_OF]-(:Option)<-[:IS_PART_OF]-(:Meal)
return recipe

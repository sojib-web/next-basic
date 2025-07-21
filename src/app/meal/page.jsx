// app/meal/page.jsx
import MealsSearchInput from "./components/MealsSearchInput";

const MealsPage = async ({ searchParams }) => {
  const searchQuery = searchParams?.search || "";

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await res.json();
      return data.meals || [];
    } catch (error) {
      console.error("Failed to fetch meals:", error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-pink-100 to-purple-200">
      <MealsSearchInput />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-lg mb-3"
              />
              <h2 className="font-semibold text-lg text-purple-900">
                Meal: {meal.strMeal}
              </h2>
              <h2 className="font-semibold text-lg text-purple-900">
                Area: {meal.strArea}
              </h2>
              <h2 className="font-semibold text-lg text-purple-900">
                Category : {meal.strCategory}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-gray-700 col-span-full text-center text-2xl font-semibold">
            ❌ No meals found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MealsPage;

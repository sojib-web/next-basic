const fetchSingleMeal = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data.meals?.[0] || null; // meals array থেকে first meal নিবে
  } catch (error) {
    console.error("Failed to fetch meals:", error);
    return null;
  }
};

// ✅ Metadata setup
export async function generateMetadata({ params }) {
  const meal = await fetchSingleMeal(params.id);

  return {
    title: meal ? meal.strMeal : "Meal Not Found | NextJs",
    description: meal
      ? meal.strInstructions.slice(0, 100)
      : "No description available",
  };
}

// ✅ Main Page
const SingleMealsPage = async ({ params }) => {
  const meal = await fetchSingleMeal(params.id);

  if (!meal) {
    return (
      <div className="min-h-screen p-8 text-center text-red-500">
        Meal Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-pink-100 to-purple-200 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-purple-800">
          {meal.strMeal}
        </h1>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="rounded-lg mb-4 mx-auto"
        />
        <p className="text-gray-700">{meal.strInstructions.slice(0, 300)}...</p>
        <p className="text-gray-500 mt-4 text-sm">Meal ID: {params.id}</p>
      </div>
    </div>
  );
};

export default SingleMealsPage;

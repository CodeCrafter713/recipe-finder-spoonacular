export default function DietaryFilter({
  onFilterChange,
}: {
  onFilterChange: (filter: string) => void;
}) {
  const dietaryOptions = [
    { value: "", label: "All Diets" },
    { value: "vegan", label: "Vegan" },
    { value: "vegetarian", label: "Vegetarian" },
    { value: "gluten-free", label: "Gluten Free" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Dietary Restrictions</h3>
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="w-full p-2 border rounded"
      >
        {dietaryOptions.map((option, index: number) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

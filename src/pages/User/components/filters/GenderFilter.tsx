const GenderFilterOptions = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

interface GenderFilterProps {
  filterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const GenderFilter = ({ filterChange }: GenderFilterProps) => {
  return (
    <div className="py-4">
      <h4 className="text-lg font-medium text-gray-900">Select Gender</h4>
      <div className="mt-2 flex items-center gap-4">
        {GenderFilterOptions.map((filter) => (
          <div className="flex items-center" key={filter?.value}>
            <input
              value={filter?.value}
              name="gender"
              type="checkbox"
              onChange={filterChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 "
            />
            <label htmlFor="all" className="ml-2 block text-sm text-gray-900">
              {filter?.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

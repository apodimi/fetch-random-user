const NationalityFilterOptions = [
  { value: "au", label: "Australia" },
  { value: "br", label: "Brazil" },
  { value: "ca", label: "Canada" },
  { value: "ch", label: "Switzerland" },
  { value: "de", label: "Germany" },
  { value: "dk", label: "Denmark" },
  { value: "es", label: "Spain" },
  { value: "fi", label: "Finland" },
  { value: "fr", label: "France" },
  { value: "gb", label: "United Kingdom" },
  { value: "ie", label: "Ireland" },
  { value: "in", label: "India" },
  { value: "ir", label: "Iran" },
  { value: "mx", label: "Mexico" },
  { value: "nl", label: "Netherlands" },
  { value: "no", label: "Norway" },
  { value: "nz", label: "New Zealand" },
  { value: "rs", label: "Serbia" },
  { value: "tr", label: "Turkey" },
  { value: "ua", label: "Ukraine" },
  { value: "us", label: "United States" },
];

interface NationalityFilterProps {
  filterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NationalityFilter = ({ filterChange }: NationalityFilterProps) => {
  return (
    <div className="py-4">
      <h4 className="text-lg font-medium text-gray-900">Select Nationality</h4>
      <div className="mt-2 grid grid-cols-2 gap-4">
        {NationalityFilterOptions.map((filter) => (
          <div className="flex items-center" key={filter.value}>
            <input
              value={filter.value}
              name="nationality"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              onChange={filterChange}
            />
            <label
              htmlFor={filter.value}
              className="ml-2 block text-sm text-gray-900"
            >
              {filter.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

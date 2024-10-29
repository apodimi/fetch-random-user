import { useUser } from "../../hooks/useUser";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { FilterModal } from "./components/FilterModal";
import { useState } from "react";
import { UserCard } from "./components/UserCard";

export const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<{
    gender: string[];
    nationalities: string[];
  }>({
    gender: [],
    nationalities: [],
  });

  const { mutate, isPending, data } = useUser();

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const updateGender = (gender: string[]) => {
    setFilters((prevFilters) => ({ ...prevFilters, gender }));
  };

  const updateNationalities = (nationalities: string[]) => {
    setFilters((prevFilters) => ({ ...prevFilters, nationalities }));
  };

  const handleSearch = () => {
    mutate(filters);
    setFilters({ gender: [], nationalities: [] });
  };
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32 flex flex-col justify-center items-center gap-3 min-h-screen">
      <h1 className="text-balance text-center text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
        Discover a Random Profile with One Click!
      </h1>

      <div className="flex justify-center gap-3">
        <button
          onClick={handleSearch}
          disabled={isPending}
          className={`disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed mt-8 px-6 py-3 rounded-md font-normal text-sm flex items-center justify-center gap-5 text-white bg-button-primary hover:bg-button-primary-hover`}
        >
          Search for user
          <ChevronRightIcon className="size-4 text-white" />
        </button>
        <button
          onClick={handleOpenModal}
          className="mt-8 px-6 py-3 bg-balance text-gray-500 rounded-md font-normal text-sm border-gray-400 border hover:bg-gray-100 flex items-center justify-center gap-5 bg-white"
        >
          Filters
          <FunnelIcon className="size-4 text-inherit" />
        </button>
      </div>
      {data && <UserCard user={data} />}
      <FilterModal
        handleOpenModal={handleOpenModal}
        open={isOpen}
        updateNationalities={updateNationalities}
        updateGender={updateGender}
      />
    </div>
  );
};

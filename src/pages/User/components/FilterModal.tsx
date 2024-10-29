import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { GenderFilter } from "./filters/GenderFilter";
import { NationalityFilter } from "./filters/NationalityFilter";
import { useState, useCallback } from "react";

interface FilterModalProps {
  handleOpenModal: () => void;
  open: boolean;
  updateNationalities: (nationalities: string[]) => void;
  updateGender: (gender: string[]) => void;
}

export const FilterModal = ({
  handleOpenModal,
  open,
  updateGender,
  updateNationalities,
}: FilterModalProps) => {
  const [selectedNationalities, setSelectedNationalities] = useState<string[]>(
    []
  );
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

  const handleGenderChange = useCallback(
    ({ target: { value, checked } }: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedGender((prev) =>
        checked ? [...prev, value] : prev.filter((gender) => gender !== value)
      );
    },
    []
  );

  const handleCheckboxChange = useCallback(
    ({ target: { value, checked } }: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedNationalities((prev) =>
        checked
          ? [...prev, value]
          : prev.filter((nationality) => nationality !== value)
      );
    },
    []
  );

  const handleSave = useCallback(() => {
    updateNationalities(selectedNationalities);
    updateGender(selectedGender);
    handleOpenModal();
    setSelectedGender([]);
    setSelectedNationalities([]);
  }, [
    selectedNationalities,
    selectedGender,
    updateNationalities,
    updateGender,
    handleOpenModal,
  ]);

  return (
    <Dialog
      open={open}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={handleOpenModal}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white p-6 "
          >
            <DialogTitle
              as="h3"
              className="text-2xl font-semibold text-black flex items-center justify-start gap-3"
            >
              Filters
              <FunnelIcon className="size-6 text-inherit" />
            </DialogTitle>
            <GenderFilter filterChange={handleGenderChange} />
            <NationalityFilter filterChange={handleCheckboxChange} />
            <SaveButton onClick={handleSave} />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

const SaveButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="mt-8 px-6 py-3 bg-balance text-white rounded-md font-normal text-sm bg-black hover:bg-button-primary-hover flex items-center justify-center gap-5"
  >
    Save
  </button>
);

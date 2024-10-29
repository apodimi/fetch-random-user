import { ReactElement } from "react";

interface MainInfoProps {
  info: string;
  icon: ReactElement;
}

export const MainInfo = ({ info, icon }: MainInfoProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      {icon}
      <p className="text-gray-600">{info}</p>
    </div>
  );
};

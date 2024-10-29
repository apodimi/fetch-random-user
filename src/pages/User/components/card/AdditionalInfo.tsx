interface AdditionalInfoProps {
  title: string;
  children: React.ReactNode;
}

export const AdditionalInfo = ({ title, children }: AdditionalInfoProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold px-2 mb-2">{title}</h3>
      <div className="bg-gray-100/75 p-4 rounded-lg">{children}</div>
    </div>
  );
};

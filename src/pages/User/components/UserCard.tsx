import { useMemo } from "react";
import { User } from "../../../types/user";
import {
  InboxArrowDownIcon,
  MapIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { MainInfo } from "./card/MainInfo";
import { AdditionalInfo } from "./card/AdditionalInfo";

export const UserCard = ({ user }: { user: User }) => {
  const userInfo = useMemo(() => {
    return user?.results[0];
  }, [user]);
  return (
    <div className=" md:w-full border border-gray-200 bg-white rounded-lg p-8  shadow-sm flex gap-8 my-10 flex-col m-4 ">
      <div className="flex flex-col justify-center items-center gap-6">
        <img
          src={userInfo.picture.large}
          alt={`${userInfo.name.first} ${userInfo.name.last}`}
          className="rounded-full w-32 h-32"
        />
        <h2 className="text-3xl font-semibold ">{`${userInfo.name.first} ${userInfo.name.last}`}</h2>
      </div>
      <div className="flex flex-col md:flex-row  justify-center gap-6">
        <MainInfo
          info={userInfo?.email}
          icon={<InboxArrowDownIcon className="h-5 w-5 text-gray-600" />}
        />
        <MainInfo
          info={userInfo.phone}
          icon={<PhoneIcon className="h-5 w-5 text-gray-600" />}
        />
        <MainInfo
          info={`${userInfo.location.city}, ${userInfo.location.country}`}
          icon={<MapIcon className="h-5 w-5 text-gray-600" />}
        />
      </div>

      <AdditionalInfo title="Address">
        <p className="text-gray-600">{`${userInfo.location.street.number} ${userInfo.location.street.name}`}</p>
        <p className="text-gray-600">{`${userInfo.location.city}, ${userInfo.location.state}, ${userInfo.location.postcode}`}</p>
      </AdditionalInfo>
      <AdditionalInfo title="Date of Birth">
        <p className="text-gray-600">
          {new Date(userInfo.dob.date).toLocaleDateString()}
        </p>
      </AdditionalInfo>

      <AdditionalInfo title="Nationality">
        <p className="text-gray-600">{userInfo.nat}</p>
      </AdditionalInfo>
    </div>
  );
};

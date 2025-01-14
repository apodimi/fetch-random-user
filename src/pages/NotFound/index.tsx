import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../App";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-extrabold text-black">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <button
          onClick={() => navigate(ROUTES.user)}
          className={`disabled:bg-gray-400 disabled:text-gray-700  mt-8 px-6 py-3 rounded-md font-normal text-sm  text-white bg-button-primary hover:bg-button-primary-hover`}
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

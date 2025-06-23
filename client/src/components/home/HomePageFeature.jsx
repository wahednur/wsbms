import { Link } from "react-router-dom";

const HomePageFeature = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2">
        <img
          src="/home/about.jpg"
          alt=""
          className="w-full rounded-md max-h-[300px] md:max-h-[400px] lg:max-h-[600px] h-full object-cover object-top"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-5  h-full min-h-[300px] justify-center">
          <h1 className="sec-title dark:text-ws-pr-text-drk">
            Smarter Rental Management, Simplified.
          </h1>
          <p className="text-xl font-semibold dark:text-ws-pr-text-drk ">
            Manage all your buildings, flats, tenants, and payments from one
            powerful dashboard — anytime, anywhere.
          </p>
          <div>
            <Link className="btn btn-filled">Get Started for Free</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFeature;

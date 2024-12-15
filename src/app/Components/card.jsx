import Section from "./section";

const Card = () => {
  return (
    <>
      <Section/>
      <Child />
    </>
  );
};

const Child = () => {
  return (
    <>
    <div className="flex justify-center">
      <div className="lg:flex justify-center gap-12" id="card">
        <div className="bg-hover w-72 text-white rounded-md px-8 py-4 pb-12 mb-4">
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-clipboard"
            >
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>
            <h2 className="text-xl">Objective</h2>
          </div>
          <p className="mt-4">
          Assessment from direct teachers makes L-demy an accurate and objective platform in assessing
          </p>
        </div>
        <div className="bg-hover w-72 text-white rounded-md px-8 py-4 mb-4">
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-activity"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <h2 className="text-xl">Analysis</h2>
          </div>
          <p className="mt-4">
          improving mood and enthusiasm in learning, making L-demy a platform that is loved by many people
          </p>
        </div>
        <div className="bg-hover w-72 text-white rounded-md px-8 py-4 mb-4">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-globe"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <h2 className="text-xl">Flexible</h2>
          </div>
          <p className="mt-4">
          Access anywhere and anytime, making L-Demy a platform that makes it easier for you to learn
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;

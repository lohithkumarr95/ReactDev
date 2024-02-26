import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorMsg = useRouteError();
  return (
    <div>
      <h1>OOPS!! Something went wrong</h1>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
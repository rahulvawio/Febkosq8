import React from "react";
import { Suspense, useState } from "react";
import Loading from "./Loading";
import omg from "../assets/omg.gif";
const Fail = () => {
  console.log("Called Fail");
  document.title = "404 | Febkosq8";
  const [count, setCount] = useState(5);

  React.useEffect(() => {
    setTimeout(() => {
      window.location.pathname = "/";
    }, 5000);
    setInterval(() => {
      setCount((curr) => curr - 1);
      console.log(count);
    }, 1000);
  }, []);
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <Suspense fallback={<Loading />}>
        <img
          src={omg}
          loading="lazy"
          alt=""
          style={{
            height: "15rem",
            width: "fit-content",
          }}
        />
      </Suspense>

      <h2 className="primary-color text-center pt-3">
        You look lost, stranger. There is nothing over here!
      </h2>
      <h4 className="primary-color text-center pt-3">
        Taking you back home in {count} seconds
      </h4>
    </div>
  );
};

export default Fail;

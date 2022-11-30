import "./Loading.css";
const Loading = ({ type = "secondary", size }) => (
  <div className="Loading">
    <div className=" d-flex flex-column w-100 h-100 m-auto justify-content-center align-items-center">
      <div
        className={`spinner-border ${
          size ? "spinner-border-" + size : ""
        } text-${type}`}
        role="status"
      ></div>
      <br />
      Tidying up last night's mess
    </div>
  </div>
);
export default Loading;

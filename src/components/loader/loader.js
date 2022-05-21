import "./loader.scss";

const Loader = ({ className = "" }) => {
  return (
    <div className={`loader ${className}`}>
      <div className="ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;

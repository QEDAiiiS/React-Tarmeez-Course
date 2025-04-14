import "./SMenueBtnStyle.css";

export default function SMenueBtn({ title, children }) {
  return (
    <div>
      {title == null || title == "" ? (
        <div></div>
      ) : (
        <button className="sMenueBtn">
          {title}
          {children}
        </button>
      )}
    </div>
  );
}

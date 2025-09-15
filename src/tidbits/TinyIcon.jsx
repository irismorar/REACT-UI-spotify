export default function TinyIcon({ isActive }) {
  return (
    <button
      className="tiny-icon"
      style={{ border: isActive ? "3px solid #28C83E" : "1px solid #fff" }}
    ></button>
  );
}

export default function authLayout({ children }) {
  return (
    <div
      className="flex justify-center items-center w-full h-screen "
      style={{ backgroundColor: "white" }}
    >
      {children}
    </div>
  );
}

export default function authLayout({ children }) {
  return (
    <div
      className="flex justify-center items-center w-full h-screen "
      style={{ backgroundColor: "#D3D3D3" }}
    >
      {children}
    </div>
  );
}

export function Main({ children }) {
  return (
    <div className="px-4 md:px-16 py-3 md:py-12 flex flex-col md:flex-row md:gap-4">
      {children}
    </div>
  );
}

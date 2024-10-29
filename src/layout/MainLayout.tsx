export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        opacity: 1,
        backgroundColor: "#ffffff",
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.3) 0.5px, #ffffff 0.5px)",
        backgroundSize: "10px 10px",
      }}
    >
      {children}
    </div>
  );
};

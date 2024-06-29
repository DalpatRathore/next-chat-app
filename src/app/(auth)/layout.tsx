const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
      {children}
    </div>
  );
};
export default AuthLayout;

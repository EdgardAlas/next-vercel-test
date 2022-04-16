export const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '10px',
        borderRadius: '0.5rem',
      }}
    >
      <h3>Dark-layout</h3>
      <div>{children}</div>
    </div>
  );
};

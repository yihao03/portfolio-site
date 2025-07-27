const AppShell: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>My Application</h1>
      </header>
      <main className="app-content">
        {children}
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 Yi Hao</p>
      </footer>
    </div>
  );
}

export default AppShell;

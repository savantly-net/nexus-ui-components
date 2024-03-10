export interface ShellProps {
  className?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  sidebarClassName?: string;
  rightSidebar?: React.ReactNode;
  rightSidebarClassName?: string;
  footer?: React.ReactNode;
}

export const Shell = ({
  className,
  children,
  header,
  sidebar,
  sidebarClassName,
  rightSidebar,
  rightSidebarClassName,
  footer,
}: ShellProps) => {
  const shellClass = className || "min-h-screen min-w-screen";
  const sidebarClass = sidebarClassName || "sm:w-32";
  const rightSidebarClass = rightSidebarClassName || "sm:w-32";
  return (
    <div className={`flex flex-col ${shellClass}`}>
      {header && <header>{header}</header>}

      <div className="flex-1 flex flex-col sm:flex-row">
        <main className="flex-1">{children}</main>

        {sidebar && (
          <nav className={`order-first ${sidebarClass}`}>{sidebar}</nav>
        )}

        {rightSidebar && (
          <aside className={rightSidebarClass}>{rightSidebar}</aside>
        )}
      </div>

      <footer>{footer}</footer>
    </div>
  );
};

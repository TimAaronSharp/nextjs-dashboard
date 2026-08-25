import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/* NOTE The links that are in the sidebar <SideNav /> are handled in "app/ui/dashboard/nav-links.tsx".
          "app/ui/dashboard/sidenav" (<SideNav />) imports "nav-links.tsx" to make the links.*/}
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
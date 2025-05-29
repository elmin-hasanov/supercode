import SiteHeader from "@/components/site-header";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="flex flex-col gap-8 container mx-auto">
      <SiteHeader />
      <div className="p-6">
        {/* Im Outlet erscheinen die Unterruten. Vorstellen wie ein Loch, das wir ins Layout schneiden. */}
        <Outlet />
      </div>

      <p>Footer</p>
      <div></div>
    </div>
  );
}

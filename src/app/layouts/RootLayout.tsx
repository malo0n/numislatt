import { Header } from "@/shared/ui";
import { Footer } from "@/shared/ui";
import { Outlet } from "@tanstack/react-router";
import { AuthDialog } from "@/widgets/auth-dialog";

export function RootLayout() {
  return (
    <div className='flex min-h-[85dvh] flex-col bg-mainWhite'>
      <Header></Header>
      <div className='mt-[48px] lg:mt-[68px]'>
        <Outlet />
        <AuthDialog />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default RootLayout;

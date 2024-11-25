import { Header, Footer } from "@/shared/ui";
import { Outlet } from "@tanstack/react-router";



export function RootLayout() {
  return(
    <div className='flex min-h-[85dvh] flex-col bg-mainWhite'>
      <Header></Header>
      <div className="mt-[48px] lg:mt-[68px]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default RootLayout
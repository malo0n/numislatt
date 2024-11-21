import { Header, Footer } from "@/shared/ui";
import { Outlet } from "@tanstack/react-router";



function RootLayout() {
  return(
    <div className='flex min-h-[85dvh] flex-col bg-mainWhite'>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default RootLayout
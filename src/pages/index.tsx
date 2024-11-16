import { Header, Footer } from "@/shared/ui";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "@/shared/lib";
import { Item } from '@/pages/item/ui/Item';

function PageOutlet() {
  return (
    <div className='flex min-h-[85dvh] flex-col bg-mainWhite'>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

// function PrivateRoutes(props: { token: string }) {
//   return props.token ? <Outlet /> : <Navigate to={routes.login_page} replace />;
// }

export function Routing() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path={routes.login_page} element={<></>} />
      <Route path={routes.items_page} element={<PageOutlet />}>
        <Route path={routes.item_page} element={<Item/>} />
      </Route>
    </Routes>
  );
}

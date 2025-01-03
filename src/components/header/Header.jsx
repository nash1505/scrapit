import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import brandLogo from "@/assets/logo.png";
import { APP_ROUTES } from "@/constants/routes";

const Header = () => {
  return (
    <div className="w-inherit h-14 flex justify-between items-center bg-green-500 my-2 mx-2 rounded-xl">
      <div>
        <img src={brandLogo} className="h-14 w-14" />
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            {APP_ROUTES.map((route) => (
              <NavigationMenuItem
                key={route.path}
                className="py-2 px-6 mx-2 hover:bg-green-700 hover:rounded-xl hover:py-2 px-6 mx-2 hover:text-slate-50"
              >
                <a href="#">
                  <NavigationMenuLink>{route.name}</NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Switch from './Switch'

const MyNav = () => {
  const navData = [
    {
      name: "Home",
      list: ["Overview", "Features", "Pricing"],
    },
    {
      name: "About",
      list: ["Our Story", "Team", "Careers"],
    },
    {
      name: "Blog",
      list: ["Latest Posts", "Categories", "Archives"],
    },
    {
      name: "Contact",
      list: [
        "Email: info@example.com",
        "Phone: +1 234 567 8900",
        "Twitter: @example",
      ],
    },
    {
      name: "Register",
      list: ["Log In", "Sign Up", "As Guest"],
    },
  ];

  return (
    <nav className="flex w-[100vw] justify-between px-[15vw] sm:items-center py-5">
      <div className="flex flex-col sm:flex-row justify-start flex-1 sm:py-5">
        {navData.map((item, index) => (
          <div key={index}>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.list.map((itemList) => (
                      <NavigationMenuLink>{itemList}</NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        ))}
      </div>
      <Switch />
    </nav>
  );
};

export default MyNav;

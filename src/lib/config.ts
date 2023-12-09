import { Icons } from "@/components/custom/icons";
import { MainNavItem } from "@/types";

export const appConfig = {
    name: "Student Zone",
    logo: Icons.appLogo,
    mainNav: [
        {
          title: "Lobby",
          items: [
            {
              title: "Projects",
              href: "/products",
              description: "Find your projects",
              items: [],
            },
            {
              title: "Build a Board",
              href: "/build-a-board",
              description: "Build your own custom skateboard.",
              items: [],
            },
            {
              title: "Blog",
              href: "/blog",
              description: "Read our latest blog posts.",
              items: [],
            },
          ],
        },
      ] satisfies MainNavItem[],
}
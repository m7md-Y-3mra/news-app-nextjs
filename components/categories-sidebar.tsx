import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Boxes, ChevronDown, MapPin } from "lucide-react";
import { CATEGORIES, COUNTRIES } from "@/constant";
import Link from "next/link";
import { useMemo } from "react";

interface CategoriesSidebarProps {
  country: string;
  category: string;
}

export function CategoriesSidebar({
  country,
  category,
}: CategoriesSidebarProps) {
  const categoriesElms = useMemo(() => {
  return CATEGORIES.map((category) => (
    <CategoriesSidebarButton
      key={category}
      title={category}
      link={`/categories/${country}/${category}`}
    />
  ));
}, [country]);

const countriesElms = useMemo(() => {
  return COUNTRIES.map((country) => (
    <CategoriesSidebarButton
      key={country.code}
      title={country.name}
      link={`/categories/${country.code}/${category}`}
    />
  ));
}, [category]);

  const items = [
    {
      title: "Countries",
      icon: MapPin,
      subElms: countriesElms,
    },
    {
      title: "Categories",
      icon: Boxes,
      subElms: categoriesElms,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Collapsible Menu Item with Submenu */}
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Collapsible defaultOpen className="group/collapsible">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.title}</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          {item.subElms}
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function CategoriesSidebarButton({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <SidebarMenuSubButton asChild key={title}>
      <Link href={link}>{title}</Link>
    </SidebarMenuSubButton>
  );
}

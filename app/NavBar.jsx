"use client";
import Link from "next/link";
import { Menubar } from "primereact/menubar";

import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  const end = (
    <div className="pr-5">
      <Link href="/about">
        <i className="pi pi-shopping-bag"></i>
      </Link>
    </div>
  );

  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "Blog",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "Shop",
      icon: "pi pi-fw pi-file",
      command: () => {
        router.push("/shop");
      },
    },
    {
      label: "About",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} end={end} />
    </div>
  );
}

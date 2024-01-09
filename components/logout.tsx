"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function Logout() {
  return (
    <Button
      variant={"outline"}
      onClick={() => signOut()}
      className="transition-colors text-white hover:text-foreground/80 text-foreground/60 cursor-pointer"
    >
      Logout
    </Button>
  );
}

"use client";

import Link from "next/link";
import { LoginLink } from "./loginLink";
import { RegisterLink } from "./registerLink";
import Logout from "./logout";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function MainNav({ isUserLogged }: { isUserLogged: boolean }) {
  return (
    <div className="mr-4 hidden lg:block">
      <div className="border-b">
        <div className="flex h-16 items-center px-32">
          <div className="flex items-baseline cursor-pointer px-1">
            <h4 className="font-bold tracking-tight cursor-pointer">FormFly</h4>
            <div className="ml-8 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer">
              <Link href={"/"}>Documentation</Link>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-6 text-sm font-medium">
            {!isUserLogged && (
              <Button
                asChild
                variant={"link"}
                className="text-muted-foreground"
              >
                <Link href={"/login"}>Login</Link>
              </Button>
            )}
            {!isUserLogged && (
              <Button
                asChild
                variant={"link"}
                className="text-muted-foreground"
              >
                <Link href={"/register"}>Register</Link>
              </Button>
            )}
            {isUserLogged && <Logout />}
            <div className="flex items-center">
              <Button variant="outline" asChild>
                <Link href={"/"}>
                  <GitHubLogoIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

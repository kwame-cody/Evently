import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="event-hive logo"
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <Nav />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <SignInButton>
              <Button asChild className="rounded-full" size={"lg"}>
                <Link href={"/"}>Login</Link>
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSwitchSessionUrl="/" />
            <MobileNav />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;

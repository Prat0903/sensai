import React from "react";
import {
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const header = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default header;

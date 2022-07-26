import type { NextPage } from "next";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";

const Sidebar: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session.user?.name}</p>

        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return <div></div>;
};

export default Sidebar;

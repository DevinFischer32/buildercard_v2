import Link from "next/link";

const Sidebar = (props: any) => {
  const [navbarOpen, setNavbarOpen] = props;
  return (
    <div className="fixed  right-0 top-0 z-10 grid h-screen w-screen grid-cols-[2fr_3fr]">
      <div className=" bg-black opacity-50"></div>

      <div className=" relative flex flex-col bg-white p-2">
        <div className="mt-10 flex justify-center">
          <h1 className="mr-3 h-16 text-2xl underline underline-offset-2">
            Hello, User <span className="text-builderGreen">!</span>
          </h1>
        </div>

        <nav>
          <Link href="#why-buildercard">
            <a>Why buildercard</a>
          </Link>
          <Link href="#how-it-works">
            <a>How it works</a>
          </Link>
          <Link href="#about">
            <a>About</a>
          </Link>
        </nav>

        <div className="mt-10 flex flex-col">
          <Link href="/register">
            <a className="mb-4 h-max rounded border border-builderGreen p-1 px-3 text-center">
              sign up
            </a>
          </Link>
          <Link href="/api/auth/signin">
            <a className="h-max rounded bg-builderGreen p-1 px-3 text-center text-white">
              sign in
            </a>
          </Link>
        </div>
        <button
          className="absolute right-2 left-2 bottom-5 mt-4 rounded bg-builderBlue p-1 px-3 font-bold"
          onClick={(prev) => {
            setNavbarOpen(!prev);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-builderGreen p-3 py-4 text-white md:grid md:grid-cols-2 ">
      <section>
        <Link href="#home">
          <a className="font-Rampart text-3xl">buildercard</a>
        </Link>
        <p className="my-2 md:w-5/6">
          We asked ourselves why the largest industry in America is so
          underserved by financial institutions. The answer was simple: normal
          credit cards don’t jive well with the sometimes unpredictable nature
          of construction revenue, and banks don’t have the capacity to
          customize a product for construction firms. So, we did.
        </p>
      </section>
      <section className=" grid grid-cols-2 justify-items-center md:items-center">
        <div className="flex w-max flex-col">
          <Link href="/company">
            <a className="font-bold">Company</a>
          </Link>
          <Link href="/updates">
            <a className="py-0.5">Monthly Updates</a>
          </Link>
          <Link href="/careers">
            <a className="py-0.5">Careers</a>
          </Link>
          <Link href="/invest">
            <a className="py-0.5">Invest</a>
          </Link>
          <div className=" cursor-default text-builderGreen">secret</div>
        </div>
        <div className="flex w-max flex-col ">
          <Link href="/support">
            <a className="font-bold">Support</a>
          </Link>
          <Link href="/helpcenter">
            <a className="py-0.5">Help center</a>
          </Link>
          <Link href="/email">
            <a className="py-0.5">Email</a>
          </Link>
          <Link href="/phone">
            <a className="py-0.5">Phone</a>
          </Link>
          <Link href="/pigeon">
            <a className="py-0.5">Carrier pigeon</a>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

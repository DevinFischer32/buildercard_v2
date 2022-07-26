import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

import blueprint from "../../public/Icons/blueprints.svg";
import calculator from "../../public/Icons/calculator.svg";
import compass from "../../public/Icons/compass.svg";
import tape from "../../public/Icons/tape.svg";

import Link from "next/link";
import Image from "next/image";
import Sidebar from "../Components/sidebar";
import Footer from "../Components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>buildercard</title>
        <meta name="description" content="Buildercard Loans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />

        <header className="flex items-center p-3">
          <div className="w-1/5 text-3xl text-center" id="home">
            buildercard
          </div>
          <nav className="flex w-2/5">
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
          <div className="flex w-2/5">
            <Link href="/api/auth/signin">
              <a>Sign in</a>
            </Link>
            <div>Sign up</div>
          </div>
        </header>

        <section className="bg-builderBlue  p-3 pb-4 pt-10 md:grid md:grid-cols-2">
          <div className="md:m-auto md:h-1/2 md:pl-8">
            <h1 className="font-Playfair text-3xl">
              The credit card for{" "}
              <span className="font-bold">construction</span> firms.
            </h1>
            <p className="my-5 w-2/3">
              Pay us back only after you’ve been paid. Lowest interest rates
              around. Software to make you faster.
            </p>
            <Link href="/apply">
              <a className="rounded bg-builderGreen p-2 px-4 text-sm text-white">
                Apply now
              </a>
            </Link>
          </div>
          <div>{/* <Image src={worker} /> */}</div>
        </section>

        <section className="mt-10 p-3 py-4 md:px-8" id="why-buildercard">
          <h1 className="mb-5 font-Playfair text-3xl">Why buildercard?</h1>
          <div className="md:grid md:grid-cols-2">
            <div className="z-10 md:pl-2">
              <WhyContainer
                header="Pay us once you get paid"
                subHeader="Kiss cash flow problems good bye."
              />
              <WhyContainer
                header="2x higher credit limits"
                subHeader="We partner deep with your firm."
              />
              <WhyContainer
                header="3x lower interest rates"
                subHeader="Buildercard offers unbeatable rates, between 6.99-19.99% APR."
              />
              <WhyContainer
                header="Finance not just materials, but labor too"
                subHeader="We’re serious about enabling you to maximize leverage."
              />
            </div>
            <div className=" mt-10 md:mt-2  ">
              {/* <Image src={bulldozer} className=""  alt=""/> */}
            </div>
          </div>
        </section>

        <section className="p-3 py-4 md:p-8" id="how-it-works">
          <h1 className="mb-5 font-Playfair text-3xl">
            How buildercard works:
          </h1>
          <div className="grid grid-cols-1 justify-items-center gap-4 md:justify-items-start md:pl-2">
            <HowContainer
              number={1}
              src={calculator}
              header="Create new job"
              description="Buildercard finances individual projects. Create a new job on the online buildercard portal, and submit any document that shows how much you’ll get paid for that job."
              alt="Calculator Icon"
            />
            <HowContainer
              number={2}
              src={tape}
              header="We extend credit"
              description="Normally 70-90% of expected job revenue. For example, 
          if you’ve won a $100K job, buildercard might extend an
          $80K credit limit to be used for this specific project."
              alt="Measuring Tape Icon"
            />
            <HowContainer
              number={3}
              src={blueprint}
              header="Spend"
              description="Buy whatever materials and tools you need to get the job done. As you incur payroll costs throughout the project, we’ll pay that too."
              alt="Blueprint Icon"
            />
            <HowContainer
              number={4}
              src={compass}
              header="Get paid, pay us"
              description="You use buildercard to invoice the general contractor 
          or developer. The GC or developer pays buildercard directly, we subtract the interest fee, and send you your job income same day!"
              alt="Compass Icon"
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

type howContainerProps = {
  number: number;
  src: string;
  header: string;
  description: string;
  alt: string;
};

const HowContainer = ({
  number,
  src,
  header,
  description,
  alt,
}: howContainerProps) => {
  return (
    <div>
      <div className="flex items-center py-2 font-Playfair text-2xl">
        <Image src={src} width={48} height={48} alt={alt} />
        <h1 className="mx-2">{number}.</h1>
        <h1>{header}</h1>
      </div>
      <div className=" px-3">
        <p>{description}</p>
      </div>
    </div>
  );
};

type whyContainerProps = {
  header: string;
  subHeader: string;
};

const WhyContainer = ({ header, subHeader }: whyContainerProps) => {
  return (
    <div className="mb-4 w-11/12">
      <h1 className="mb-2 font-Playfair text-2xl">{header}</h1>
      <h1>{subHeader}</h1>
    </div>
  );
};

export default Home;

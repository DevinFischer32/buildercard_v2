import { NextPage } from "next";
import { requireAuthentication } from "../../utils/requireAuthentication";

const Loan: NextPage = (session) => {
  return <div className="text-3xl text-red-400">Access</div>;
};

export default Loan;

export async function getServerSideProps(context: any) {
  return requireAuthentication(context, ({ session }: any) => {
    return {
      props: { session },
    };
  });
}

import { withRouter } from "next/router";
import Link from "next/link";

const Jiewu = ({ router }) => {
  return (
    <>
      <div>{router.query.name}被我选择</div>
      <Link href="/router">
        <a>go home</a>
      </Link>
    </>
  );
};
export default withRouter(Jiewu);

import { withRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Jiewu = ({ router, list }) => {
  return (
    <>
      <div>{router.query.name}被我选择</div>
      <div>{list}</div>
      <Link href="/router">
        <a>go home</a>
      </Link>
    </>
  );
};

Jiewu.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios(
      "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList"
    ).then(res => {
      console.log(res);
      resolve(res.data.data);
    });
  });
  return await promise;
};

export default withRouter(Jiewu);

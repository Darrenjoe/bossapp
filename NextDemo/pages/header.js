import MyHeader from "../components/myheader";
import { Button } from "antd";
function Header() {
  return (
    <>
      <MyHeader />
      <div>Darren.com</div>
      <div>
        <Button>按钮</Button>
      </div>
    </>
  );
}

export default Header;

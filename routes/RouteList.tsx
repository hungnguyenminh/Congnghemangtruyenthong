import {ReactNode} from "react";
import {PicRightOutlined, UserOutlined} from "@ant-design/icons";

export interface IRoute {
  path: string;
  name: string;
  isSidebar: boolean;
  isLanding?: boolean;
  icon?: ReactNode;
  children?: IRoute[];
}

const routes: IRoute[] = [
  {
    path: "/login",
    name: "Đăng nhập",
    isSidebar: false,
    isLanding: true,
  },
  {
    path: "/manager_user",
    name: "Student",
    isSidebar: true,
    icon: <UserOutlined className="icon-sidebar" />,
  },
  {
    path: "/list_booking",
    name: "Class",
    isSidebar: true,
    icon: <PicRightOutlined className="icon-sidebar" />,
  },
];

export default routes;

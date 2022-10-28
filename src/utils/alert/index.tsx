import { notification } from "antd";
import { CloseOutlined, FallOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text } = Typography;

type NotificationType = "success" | "info" | "warning" | "error";

interface IAlert {
  type: NotificationType;
  message: string;
  description: string;
}

export const alertNotification = (alert: IAlert) => {
  notification[alert.type]({
    message: <Text style={{ color: "#fff" }}>{alert.message}</Text>,
    description: <Text style={{ color: "#fff" }}>{alert.description}</Text>,
    style: { background: "#faad14", color: "#fff" },
    closeIcon: <CloseOutlined style={{ color: "#fff" }} />,
    icon: <FallOutlined style={{ color: "#fff", padding: "5px" }} />,
  });
};

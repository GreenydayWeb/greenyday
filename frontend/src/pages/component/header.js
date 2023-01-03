import { Menu } from "antd";
import LOGIN from "../loginpage/login";
import SIGNUP from "../loginpage/signup";

const styles_menu = {
  fontSize: "32px",
  fontWeight: "400",
  color: "rgba(0, 0, 0, 1)",
  fontFamily: "sansneo_light",

  "text-decoration": "none",
};
const items = [
  {
    label: (
      <a
        href="/"
        style={{
          fontSize: "32px",
          fontWeight: "400",
          color: "rgba(0, 0, 0, 1)",
          fontFamily: "sansneo_light",
        }}
      >
        HOME
      </a>
    ),
    key: "alipay",
  },
  {
    label: (
      <a
        href="/"
        style={{
          fontSize: "32px",
          fontWeight: "400",
          color: "rgba(0, 0, 0, 1)",
          fontFamily: "sansneo_light",
        }}
      >
        MENU
      </a>
    ),
    key: "alipay",
  },
  {
    label: (
      <a
        href="/"
        style={{
          fontSize: "32px",
          fontWeight: "400",
          color: "rgba(0, 0, 0, 1)",
          fontFamily: "sansneo_light",
        }}
      >
        STORE
      </a>
    ),
  },
  {
    label: (
      <a
        href="/"
        style={{
          fontSize: "32px",
          fontWeight: "400",
          color: "rgba(0, 0, 0, 1)",
          fontFamily: "sansneo_light",
        }}
      >
        CONTACT
      </a>
    ),
  },
  {
    label: <SIGNUP />,
  },
  {
    label: <LOGIN />,
  },
];

function Head() {
  function getItem(label, key) {
    return {
      key,
      label,
    };
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: "20px" }}>
        <a href="/" style={styles_menu}>
          HOME
        </a>
      </div>
      <div style={{ padding: "20px" }}>
        <a href="/" style={styles_menu}>
          MENU
        </a>
      </div>
      <div style={{ padding: "20px" }}>
        <a href="/" style={styles_menu}>
          STORE
        </a>
      </div>
      <div style={{ padding: "20px" }}>
        <a href="/" style={styles_menu}>
          CONTACT
        </a>
      </div>

      <div style={{ padding: "20px" }}>
        <LOGIN />
      </div>
      <div style={{ padding: "20px" }}>
        <SIGNUP />
      </div>
    </div>

    // <Menu
    //   className="modified-item"
    //   mode="horizontal"
    //   items={items}
    //   style={{ border: "none", width: "20", height: "100%" }}
    // />
  );
}

// function Head() {
//   return (
//     <Menu mode="horizontal" onClick={() => router.push("/n")}>
//       <Menu.Item key="login">
//         <span className="nav-text">Login</span>
//       </Menu.Item>

//       <Menu.Item key="register" onClick={() => router.push("/")}>
//         <span className="nav-text">Register</span>
//       </Menu.Item>
//     </Menu>
//   );
// }

export default Head;

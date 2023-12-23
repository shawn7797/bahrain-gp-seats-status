import React from "react";
import { Row, Col } from "antd";

const NavBar = () => {
  return (
    <Row className="navbar-wrapper">
      <Col span={4}>
        <img className="bic-logo" src={"/images/bic-blue-logo.png"} />
      </Col>
      <Col span={16}>
        <img
          className="f1-logo"
          src={"https://tickets.formula1.com/assets/img/icon-F1.svg"}
        />
      </Col>
      <Col span={4}>
        <img className="anarchy-logo" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Anarchy-symbol-white.svg/800px-Anarchy-symbol-white.svg.png"} />
      </Col>
    </Row>
  );
};

export default NavBar;

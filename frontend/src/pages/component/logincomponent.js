import React, { useState } from "react";
import { Typography } from "antd";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Form, Input, Row, Col } from "antd";
import { LOG_IN_REQUEST } from "../../reducers/user";
import KakaoLogin from "../kakaologin";

const { Text } = Typography;
const fontStyle = {
  color: "rgba(48, 47, 47, 1)",
  fontSize: "18px",
  fontWeight: "700",
  fontFamily: "sansneo_light",
};

const LoginComponent = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch({ type: LOG_IN_REQUEST, values });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div>
        {}

        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{
            padding: "20px",
            borderRadius: "40px",
            background: "rgba(206, 192, 172, 1)",
          }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "올바른 이메일을 입력해 주세요.",
              },

              {
                required: true,
                message: "이메일을 입력해 주세요!",
              },
            ]}
          >
            <Input
              style={{
                borderRadius: "15px",
                background: "rgba(251, 255, 250, 1)",
              }}
              placeholder="e-mail"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해 주세요!",
              },
            ]}
          >
            <Input.Password
              style={{
                borderRadius: "15px",
                background: "rgba(251, 255, 250, 1)",
              }}
              placeholder="password"
            />
          </Form.Item>

          <Row>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "15px",
                    backgroundColor: "rgba(236, 228, 215, 1)",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    Login
                  </Text>
                </Button>
              </Form.Item>

              <Divider />
              <Col>
                <KakaoLogin></KakaoLogin>
              </Col>
              <Col type="flex" align="middle">
                <Text
                  fontSize="14px"
                  style={{ color: "rgba(116, 116, 116, 1)" }}
                >
                  아이디 찾기/ 패스워드 찾기/ 그리니데이 회원가입
                </Text>
              </Col>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};
export default LoginComponent;

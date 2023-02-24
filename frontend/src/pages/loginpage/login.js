import React, { useState } from "react";
import { Typography } from "antd";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Form, Input, Row, Col } from "antd";
import { LOG_IN_REQUEST } from "../../reducers/user";

const { Text } = Typography;
const fontStyle = {
  color: "rgba(48, 47, 47, 1)",
  fontSize: "18px",
  fontWeight: "700",
  fontFamily: "sansneo_light",
};

const Login = () => {
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
        {
          <Text
            style={{
              fontSize: 44,
              fontWeight: 700,
              fontFamily: "sansneo_light",
              color: "rgba(96, 96, 96, 1)",
            }}
          >
            로그인
          </Text>
        }
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "rgba(121, 120, 120, 1)",
            fontFamily: "sansneo_light",
            margin: "0 20px 20px 0",
          }}
        >
          환영합니다! 그리니데이의 샐러드 주문하러 가실까요?{" "}
        </div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
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
            <Input style={{ borderRadius: "0px" }} placeholder="이메일" />
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
              style={{ borderRadius: "0px" }}
              placeholder="비밀번호"
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
                    height: "57px",
                    backgroundColor: "rgba(0, 219, 61, 1)",
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(255, 255, 255, 1)",
                      fontSize: "24px",
                    }}
                  >
                    로그인
                  </Text>
                </Button>
              </Form.Item>

              <Divider />

              <Col span={24} type="flex" align="middle">
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
export default Login;

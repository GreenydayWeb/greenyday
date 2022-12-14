import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { Button, Modal } from "antd";
const { Text } = Typography;
import { Image, Divider, Form, Input, Row, Col, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { signupRequestAction } from "../../reducers/user";
import { ON_CHANGE_EMAILOVERLAP } from "../../reducers/user";
import Router from "next/router";
import { frontUrl } from "../../config/config";

const fontStyle = {
  color: "rgba(48, 47, 47, 1)",
  fontSize: "18px",
  fontWeight: "700",
  fontFamily: "sansneo_light",
};

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpDone } = useSelector((state) => state.user);
  var { emailOverLap } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const emailOnChange = (event) => {
    dispatch({ type: ON_CHANGE_EMAILOVERLAP });
  };

  const nameOnChange = (event) => {
    dispatch({ type: ON_CHANGE_EMAILOVERLAP });
  };

  const nicknameOnChange = (event) => {
    dispatch({ type: ON_CHANGE_EMAILOVERLAP });
  };

  const phoneOnChange = (event) => {
    dispatch({ type: ON_CHANGE_EMAILOVERLAP });
  };

  useEffect(() => {
    if (signUpDone) {
      Router.push(frontUrl + "/loginpage/login");
    }
  }, [signUpDone, emailOverLap]);

  const onFinish = (values) => {
    console.log("Success:", values);

    const data = {
      email: values.email,
      password: values.password,
      nickname: values.nickname,
      phone: values.phonenumber,
      username: values.name,
      birth:
        values.datepicker.$y +
        "-" +
        String(parseInt(values.datepicker.$M) + 1) +
        "-" +
        values.datepicker.$D,
    };

    dispatch(signupRequestAction(data));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        type="primary"
        onClick={showModal}
        style={{
          fontSize: "32px",
          fontWeight: "400",
          color: "rgba(0, 0, 0, 1)",
          fontFamily: "sansneo_light",
        }}
      >
        ????????????
      </div>
      <Modal
        title={
          <Text
            style={{
              fontSize: 44,
              fontWeight: 700,
              fontFamily: "sansneo_light",
              color: "rgba(96, 96, 96, 1)",
            }}
          >
            ????????????
          </Text>
        }
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "rgba(121, 120, 120, 1)",
            fontFamily: "sansneo_light",
            margin: "0 20px 20px 0",
          }}
        >
          ???????????? ??????????????? ??????????????? ????????????!{" "}
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
          {/* ????????? */}
          <div>
            {" "}
            {/* ???????????? ???????????? ??????, ?????? ???????????? ????????? ?????? */}
            {!emailOverLap ? (
              <Form.Item
                label={<Text style={fontStyle}>?????????</Text>}
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "????????? ???????????? ????????? ?????????.",
                  },

                  {
                    required: true,
                    message: "???????????? ????????? ?????????!",
                  },
                ]}
              >
                <Input
                  style={{ borderRadius: "0px" }}
                  placeholder="???) greenyday1234@gmail.com"
                />
              </Form.Item>
            ) : (
              <div>
                <Form.Item
                  label={<Text style={fontStyle}>?????????</Text>}
                  name="email"
                  validateStatus="error"
                  help="????????? ??????????????????."
                >
                  <Input
                    style={{ borderRadius: "0px" }}
                    placeholder="???) greenyday1234@gmail.com"
                    onChange={emailOnChange}
                  />
                </Form.Item>
              </div>
            )}{" "}
          </div>
          <Form.Item
            label={<Text style={fontStyle}>????????????</Text>}
            name="password"
            rules={[
              {
                required: true,
                message: "??????????????? ????????? ?????????!",
              },
            ]}
          >
            <Input.Password
              style={{ borderRadius: "0px" }}
              placeholder="??????,?????? ?????? 8-16???"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "??????????????? ?????? ??? ??????????????????!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("??????????????? ???????????? ????????????.")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              style={{ borderRadius: "0px" }}
              placeholder="??????????????? ?????? ??? ????????? ?????????!"
            />
          </Form.Item>
          <Row justify="space-between">
            <Col span={11}>
              <Form.Item
                name="name"
                label={<Text style={fontStyle}>??????</Text>}
                rules={[
                  {
                    required: true,
                    message: "????????? ????????? ?????????!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  placeholder="???) ?????????"
                  style={{ borderRadius: "0px" }}
                />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item
                name="nickname"
                label={<Text style={fontStyle}>?????????</Text>}
                rules={[
                  {
                    required: true,
                    message: "???????????? ????????? ?????????!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  placeholder="???) ?????????"
                  style={{ borderRadius: "0px" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col span={11}>
              <Form.Item
                name="datepicker"
                label={<Text style={fontStyle}>????????????</Text>}
                rules={[
                  {
                    type: "object",
                    required: true,
                    message: "??????????????? ????????? ?????????!",
                  },
                ]}
              >
                <DatePicker
                  style={{ borderRadius: "0px", width: "100%" }}
                  placeholder="0000-00-00"
                />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item
                name="phonenumber"
                label={<Text style={fontStyle}>????????? ??????</Text>}
                rules={[
                  {
                    required: true,
                    message: "??????????????? ????????? ?????????!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  placeholder="000-000-000"
                  style={{ borderRadius: "0px" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[3, 20]}>
            <Col span={24}>
              <Row gutter={[10, 10]}>
                <Col span={1}>
                  <Image src="/circle.png"></Image>
                </Col>

                <div fontSize="14px">
                  ????????????????????? ???????????? ?????? ????????? ???????????? ????????? ????????????
                  ?????????.
                  <br />
                  ???????????? ??????????????? ????????????????????? ????????? ?????? ???????????? ???
                  ?????????.{" "}
                </div>
              </Row>
            </Col>
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
                    ????????????
                  </Text>
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
export default Signup;

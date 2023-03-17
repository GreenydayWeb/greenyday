import React, { useEffect } from "react";

import {
  Divider,
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Checkbox,
  Typography,
  Button,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  kakaosignupRequestAction,
  ON_CHANGE_NICKNAMEOVERLAP,
  ON_CHANGE_PHONEOVERLAP,
} from "../../reducers/user";

import Router from "next/router";

const { Text } = Typography;

const fontStyle = {
  color: "rgba(48, 47, 47, 1)",
  fontSize: "18px",
  fontWeight: "700",
  fontFamily: "sansneo_light",
};

const KakaoSignup = () => {
  const dispatch = useDispatch();
  var { emailOverLap, nicknameOverLap, phoneOverLap, signUpDone } = useSelector(
    (state) => state.user
  );

  const nicknameOnChange = (event) => {
    dispatch({ type: ON_CHANGE_NICKNAMEOVERLAP });
  };

  const phoneOnChange = (event) => {
    dispatch({ type: ON_CHANGE_PHONEOVERLAP });
  };

  useEffect(() => {
    if (signUpDone) {
      Router.push("/loginpage/login");
    }
  }, [signUpDone, emailOverLap, nicknameOverLap, phoneOverLap]);

  const onFinish = (values) => {
    const data = {
      email: localStorage.getItem("email"),
      nickname: values.nickname,
      phone: values.phonenumber,
      username: values.name,
      birth:
        values.datepicker.$y +
        "-" +
        String(parseInt(values.datepicker.$M) + 1) +
        "-" +
        values.datepicker.$D,
      is_kaka: true,
    };

    dispatch(kakaosignupRequestAction(data));
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <>
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
        <Row justify="space-between">
          <Col span={11}>
            {/* 이름 입력 */}
            <Form.Item
              name="name"
              label={<Text style={fontStyle}>이름</Text>}
              rules={[
                {
                  required: true,
                  message: "이름을 입력해 주세요!",
                  whitespace: true,
                },
              ]}
            >
              <Input
                placeholder="예) 홍길동"
                style={{ borderRadius: "19px" }}
              />
            </Form.Item>
          </Col>
          <Col span={11}>
            {/* 닉네임 입력 */}

            <div>
              {!nicknameOverLap ? (
                <Form.Item
                  name="nickname"
                  label={<Text style={fontStyle}>닉네임</Text>}
                  rules={[
                    {
                      required: true,
                      message: "닉네임을 입력해 주세요!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="예) 홍길동"
                    style={{ borderRadius: "19px" }}
                  />
                </Form.Item>
              ) : (
                <Form.Item
                  name="nickname"
                  label={<Text style={fontStyle}>닉네임</Text>}
                  validateStatus="error"
                  help="중복된 닉네임입니다."
                >
                  <Input
                    placeholder="예) 홍길동"
                    style={{ borderRadius: "19px" }}
                    onChange={nicknameOnChange}
                  />
                </Form.Item>
              )}
            </div>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col span={11}>
            {/* 생년월일 입력 */}
            <Form.Item
              name="datepicker"
              label={<Text style={fontStyle}>생년월일</Text>}
              rules={[
                {
                  type: "object",
                  required: true,
                  message: "생년월일을 입력해 주세요!",
                },
              ]}
            >
              <DatePicker
                style={{ borderRadius: "19px", width: "100%" }}
                placeholder="0000-00-00"
              />
            </Form.Item>
          </Col>
          <Col span={11}>
            {/* 전화번호 */}
            <div>
              {!phoneOverLap ? (
                <Form.Item
                  name="phonenumber"
                  label={<Text style={fontStyle}>휴대폰 번호</Text>}
                  rules={[
                    {
                      required: true,
                      message: "전화번호를 입력해 주세요!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="010********"
                    style={{ borderRadius: "19px" }}
                  />
                </Form.Item>
              ) : (
                <div>
                  {" "}
                  <Form.Item
                    name="phonenumber"
                    label={<Text style={fontStyle}>휴대폰 번호</Text>}
                    validateStatus="error"
                    help="중복된 번호입니다."
                  >
                    <Input
                      placeholder="010********"
                      style={{ borderRadius: "19px" }}
                      onChange={phoneOnChange}
                    />
                  </Form.Item>
                </div>
              )}
            </div>
            {/* <Form.Item
              name="phonenumber"
              label={<Text style={fontStyle}>휴대폰 번호</Text>}
              rules={[
                {
                  required: true,
                  message: "전화번호를 입력해 주세요!",
                  whitespace: true,
                },
              ]}
            >
              <Input
                placeholder="010********"
                style={{ borderRadius: "19px" }}
              />
            </Form.Item> */}
          </Col>
        </Row>

        <Row gutter={[3, 20]}>
          <Col span={24}>
            <Row gutter={[10, 10]}></Row>
          </Col>
          <Col span={24}>
            <Divider />
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("이용약관에 동의 해주세요!")),
                },
              ]}
            >
              <Checkbox class="">
                <p class="text-[#404016] text-[15px] ">이용약관 동의(필수)</p>{" "}
              </Checkbox>
            </Form.Item>

            <Form.Item name="agreement2" valuePropName="checked2">
              <Checkbox class="">
                <p class="text-[#404016] text-[15px] ">이용약관 동의(선택)</p>{" "}
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "57px",
                  backgroundColor: "rgba(36, 90, 58, 1)",
                }}
              >
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: "24px",
                  }}
                >
                  가입하기
                </Text>
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default KakaoSignup;

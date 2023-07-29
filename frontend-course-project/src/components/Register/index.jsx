import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const onFinish = (values) => {
    console.log('Success:', values);
};

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="container-register">
            <h2 className='text-center'>Đăng ký</h2>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'username là trường bắt buộc!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'email là trường bắt buộc!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'password là trường bắt buộc!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm password"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'confirmPassword là trường bắt buộc!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="flex">
                    <Button type="primary" htmlType="submit">
                        Đăng ký
                    </Button>
                    <input type="button" value="Đăng nhập" className="btn-redirect-register" onClick={() => {
                        navigate('/auth/login');
                    }} />
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register;
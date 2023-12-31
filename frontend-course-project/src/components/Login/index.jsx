import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelectGlobalState } from '../../utils/hooks';
import { NameGlobalState } from '../../store/context';
import './style.scss';


const Login = () => {
    const navigate = useNavigate();
    const userInfo = useSelectGlobalState(NameGlobalState['userInfo']);
    const onFinish = (values) => {
        const payload = {
            body: values
        }
        userInfo.query(payload);
    };
    useEffect(() => {
        if (userInfo.message) {
            alert(userInfo.message);
        }
        if (userInfo.success) {
            localStorage.setItem('accessToken', userInfo.data.accessToken);
            navigate('/');
        }
    }, [userInfo])

    return (
        <div className="container-login">
            <h2 className='text-center'>Đăng nhập</h2>
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
                    name="userName"
                    rules={[{ required: true, message: 'username là trường bắt buộc!' }]}
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

                <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="flex">
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                    <input type="button" value="Đăng ký" className="btn-redirect-register" onClick={() => {
                        navigate('/auth/register');
                    }} />
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;
import React from 'react';
import { Avatar, Button, Form, Input, Upload } from 'antd';
import './styles.scss';

const MyInfo = () => {
    return (
        <div className="my-info">
            <div className="images">
                <div className="cover-photo">
                    <img src='https://images.pexels.com/photos/912469/pexels-photo-912469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                </div>
                <div className="avatar">
                    <Avatar size={250} src={<img src="https://sgv.edu.vn/uploads/images/info/doraemon-trong-tieng-trung-la-gi.png" alt="" />} />
                    <Upload >
                        <Button>Upload Image</Button>
                    </Upload>
                </div>
            </div>
            <div className="form-info">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
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
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'address là bắt buộc' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="History"
                        name="history"
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default MyInfo;
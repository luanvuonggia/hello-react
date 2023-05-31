import React, { useState, useEffect } from "react";
import { PrimaryLayout, AntLayout } from "components/Layout";
import { Space, Table, Tag, Button, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from 'react-redux'
const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Add User
    </Button>
  );
};
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Email;",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    key: "phone",
    dataIndex: "phone",
  },
];

const Users = () => {
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.users.fetchUsers();
  }, [])
  const [form] = Form.useForm();

  
  //const [dataTable, setDataTable] = useState(usersStore.listUser);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const onFinish = (user) => {
    // // Cach 2
    const newData = [...usersStore.listUser, {
      key: Math.floor(Math.random() * 10000) + 1,
      name: user.name,
      username:  user.name,
      address: "afdasfgmdas;kfgmdal;kfm",

    }]
    dispatch.users.setListUser(newData);
  }
  return (

      <div className="About">
        <div className="about-section">
          <h1>Users management</h1>
          <Button type="primary" onClick={showModal}>
            Add users
          </Button>
          <Modal
            open={open}
            title="Title"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="age"
                label="Age"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Space>
                  <SubmitButton form={form} />
                  <Button htmlType="reset">Reset</Button>
                </Space>
              </Form.Item>
            </Form>
          </Modal>
          <Table columns={columns} dataSource={usersStore.listUser} />
        </div>
      </div>

  );
};

export default Users;

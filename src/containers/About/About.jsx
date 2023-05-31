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
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const About = () => {
  const [form] = Form.useForm();

  const loggedinUser = useSelector((state) => state.auth);
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();
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
    // Cach 1
    // const newData = dataTable.concat([{
    //   key: Math.floor(Math.random() * 10000) + 1,
    //   name: user.name,
    //   age: user.age,
    //   address: "afdasfgmdas;kfgmdal;kfm",
    //   tags: ["cool", "teacher"],
    // }]);
    // // Cach 2
    const newData = [...usersStore.listUser, {
      key: Math.floor(Math.random() * 10000) + 1,
      name: user.name,
      age: user.age,
      address: "afdasfgmdas;kfgmdal;kfm",
      tags: ["cool", "teacher"],
    }]
    dispatch.users.setListUser(newData);
  }
  return (

      <div className="About">
        <div className="about-section">
          <h1>Users management</h1>
          <h1>{loggedinUser.username}</h1>
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

export default About;

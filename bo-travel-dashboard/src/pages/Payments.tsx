import React from 'react'
import ReactDOM from 'react-dom'
import { Table, Tag, Space } from 'antd'

const { Column, ColumnGroup } = Table
const data = [
    {
      id: 1,
      date: "2021-04-13",
      ammount: 79,
      status: true
    },
    {
      id: 2,
      date: "2021-04-13",
      ammount: 35,
      status: true
    }
];
function Payments (){
    return (
    <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map((tag:any) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record:any) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
  )
}

export default Payments
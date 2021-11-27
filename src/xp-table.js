import React from 'react';
import { Table, Tag, Space } from 'antd';

const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
 
    },
    {
      title: 'Goal Description',
      dataIndex: 'goalDescription',
      key: 'goalDescription',
    },
    {
      title: 'Xps',
      dataIndex: 'xp',
      key: 'xp',
    },
    {
      title: 'Running Xp count',
      key: 'xpCount',
      dataIndex: 'xpCount',
     
    },
    {
      title: 'Goal Date',
      key: 'goalDate',
      dataIndex: 'goalDate',
    },
    {
        title: 'Completed On',
        key: 'completedOn',
        dataIndex: 'completedOn',
      },
  ];


function XpTable ({dataSource}) {
    return <Table columns={columns} dataSource={dataSource} />
}
export default XpTable;
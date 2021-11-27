import React,{useState} from 'react';
import { Input,Progress,Table, Card, Avatar } from 'antd';
import './parent-section.css';
import XpTable from '../xp-table'
import {xpTableData} from '../data'
import Header from '../header'

const { Search } = Input;
const { Meta } = Card;

const reportCardColumn = [
    {
        // title: 'Type',
    dataIndex: 'subject',
        key: 'type',
    },
    { title: 1,
    dataIndex: 'marks1',
        key: 'marks1',
    },
    
    { title: 2,
    dataIndex: 'marks2',
        key: 'marks2',
    },
    { title: 3,
    dataIndex: 'marks3',
        key: 'marks3',
    },
    { title: 4,
    dataIndex: 'marks4',
        key: 'marks4',
    },
    { title: 5,
        dataIndex: 'marks5',
            key: 'marks5',
        },
    
    
]

function ParentSection () {
    const [inputText, setInputText] = useState('')
    const [data,setData] = useState(null)
    return <>
    <Header/>
        <div className="parent-container">
    <div className="input-container">
            <Search value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Student name" enterButton="Search" size="large" onSearch={() => {
             setData(xpTableData[inputText])
            }} />
        </div>
        <br/>
        
    </div>
      {data&& <> <div className="table-container">
            <XpTable dataSource={data.data} />
            <div><Progress type="circle" percent={(data.attendedClasses/data.totalClasses)*100} width="180px" />
                <p>Class Completion</p>
                <div><Progress percent={50} status="active" />
                <p>Assessment Completion</p>
                </div>
            </div>
        </div>
            <div className="report-card">
            <h1>Student report Card</h1>
                <Table pagination={false} columns={reportCardColumn} dataSource={data.reportData} />
            </div>
            <div className="card-container">
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Click here to view student content library"
      description="- Powered by AR"
    />
  </Card>,
        </div>
        </>}
        {/* <a href='/w1.pdf' download>Click to download</a> */}
        
    </>
}

export default ParentSection;
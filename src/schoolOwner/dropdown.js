
import React from 'react'
import "antd/dist/antd.css";
import { Menu, Dropdown, Button, } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Select } from 'antd';

const { Option } = Select;

export default function Menus(props) {
  console.log(props)
  return (
    <div style={{
      display: 'block', width: 700, padding: 30
    }}>
      <h4>ReactJS Ant-Design Dropdown Component</h4>
      <>
        {/* <Dropdown
          overlay={(
            <Menu onClick={e => props.setSelectedOption(e.key)}>
                {props.dropdownData.map((data) => <Menu.Item key={data}>
                {data}
              </Menu.Item>)}
            </Menu>
          )}
          trigger={['click']}>
           
        <Button>
        {props.title} <DownOutlined />
      </Button>
        </Dropdown> */}

    <Select placeholder={props.title} style={{ width: 120 }} onChange={a => props.setSelectedOption(a)}>
    {props.dropdownData.map((data) => <Option value={data}>{data}</Option>)}
    </Select>
      </>
    </div>
  );
}

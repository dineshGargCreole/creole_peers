import React from 'react'
import { Card } from "antd";

interface IProps {
    wfhCount: Number;
    title: String;
    children?: JSX.Element|JSX.Element[];
}

function Dashboard(props: IProps) {
    return (
        <Card
          title={props.title}
          style={{
            width: 300, 
            // color: "#fff",
            backgroundColor:
              props.wfhCount < 4
                ? "#9ae884"
                : props.wfhCount >= 4 && props.wfhCount <= 6
                ? "#f50"
                : "#cd201f",
          }}
        >
            {props.children}
        </Card>
    )
}

export default Dashboard

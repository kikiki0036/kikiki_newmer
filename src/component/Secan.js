import React, { useState } from 'react';
import functionPlot from "function-plot";
import { Layout,Table } from 'antd';
const math=require("mathjs");
const { Header, Footer, Sider, Content } = Layout;
let width = 500;
let height = 300;
const arr = [{
    key:0,
       iteretion:0,
       x0:0,
       x1:0,
       x2:0,
       error:0
      }];
      const colum=[
        {
          title: 'iteretion',
          dataIndex: 'iteretion',
          key: 'iteretion',
        },
        {
            title: 'x0',
            dataIndex: 'x0',
            key: 'x0',
          },
          {
            title: 'x1',
            dataIndex: 'x1',
            key: 'x1',
          },
          {
            title: 'x2',
            dataIndex: 'x2',
            key: 'x2',
          },
          {
            title: 'error',
            dataIndex: 'error',
            key: 'error',
          }
        
      ]
function Secan()
{
    const[x,Setx]=useState('');
    const[n1,Setn]=useState('');
    const[n2,Setn2]=useState('');
    const[p,Setp]=useState('');
    function so(e)
    {
      arr.length=0
        functionPlot({
            target: "#tt",
            width,
            height,
            yAxis: { domain: [0, 23]},
            grid: true,
            data: [
              {
                fn:x,
              }
            ]
          }
          );
        nn(n1,n2)
        Setp(<Table columns={colum} dataSource={arr}></Table>)
    }
    function fx(b) {
        const node2 = math.parse(x)
        const code2 = node2.compile()
        let scope={
            x:b
        }
            return  code2.evaluate(scope)
          }
          function At()
        {
          Setp('')          
        }
    function nn(n,n2)
{
    let x0=n;
    let x1=n2;
    let i=0
    while(true)
    {   
        let x2 = ((x0-fx(x0))*(x1-x0))/(fx(x1)-fx(x0));
        console.log("x2 "+x2);
        let chekz=Math.abs((x2-x1/x2));
        console.log("check "+chekz);
        arr.push({
            key:i+2,
            iteretion:i+1,
            x0:x0,
            x1:x1,
            x2:x2,
            error:chekz,
            
        })
        if(chekz<=0.0000001||chekz==Infinity||i==50)
        {
            break;   
        }
        x0=x1;
        x1=x2;
        i++
    }
}
    return(
        <div>
            <p>insert fx</p>
                <input type="text" onChange={(e)=>{Setx(e.target.value);At()}}></input>
                <p>insert  n1</p>
                <input type="number" onChange={(e)=>{Setn(e.target.value);At();}}></input> 
                <p>insert  n2</p>
                <input type="number" onChange={(e)=>{Setn2(e.target.value);At();}}></input>
                <br/>
                <input type="button" value="cal" onClick={so}></input>
                <div id="tt" style={{position:'absolute',right:'600px',top:'90px'}}></div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {p}
        </div>
    );
}

export default Secan;


/*
2 5
*/
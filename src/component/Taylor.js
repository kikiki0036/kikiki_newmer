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
       fx:0,
       ans:0,
      }];
      const colum=[
        {
          title: 'iteretion',
          dataIndex: 'iteretion',
          key: 'iteretion',
        },
        {
            title: 'fx',
            dataIndex: 'fx',
            key: 'fx',
          },
        {
            title: 'ans',
            dataIndex: 'ans',
            key: 'ans',
          },
          ]
function Taylor()
{
    const [x,setX]=useState('');
    const [n,setN]=useState('');
    const [n2,setN2]=useState('');
    const [r,setR]=useState('');
    const [p,setp]=useState('');

    function shek(e)
    {
        arr.length=0
        functionPlot({
            target: "#tes2",
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
        tay(x,n,n2,r)
        setp(<Table columns={colum} dataSource={arr}></Table>)

    }
    function fx(b) {
        const node2 = math.parse(x)
        const code2 = node2.compile()
        let scope={
            x:b
        }
            return  code2.evaluate(scope)
          }
          function xfx(n) {
            const f = math.parse(n)
            const xx = math.parse('x')
           const b=math.derivative(f, xx)
           console.log(b)  
            return b;
              }
              function At()
        {
            setp('')          
        }
    function dfx(n,a) {
        const f = math.parse(n)
        const xx = math.parse('x')
       const b=math.derivative(f, xx).evaluate({x: a}) 
     ////   console.log(b)  
        return b;
          }
    function tay(x,n,n2,r)
    {
        arr.length=0
        let ans=0;
        let i=0
        let t=''
        let t2=0
        while(true)
        {
            if(i==0)
            {
                ans+=fx(n2)
                t=x
            }
            else
            {
                t=xfx(x).toString()
                t2=xfx(t,n2)
                ans+=(Math.pow(n-n2,i)/math.factorial(i))*t2
                x=t
            }
            arr.push({
                key:i+3,
                iteretion:i+1,
                fx:t.toString(),
                ans:ans
            }) 
            i++
            if(i==r)
            {
                return
            }
           
        }
    }
    return(
        <div>
            <p>X</p>
            <input type="text" onChange={(e)=>{setX(e.target.value);At();}}></input>
            <p>N</p>
            <input type="number" onChange={(e)=>{setN(e.target.value);At();}}></input>
            <p>N2</p>
            <input type="number" onChange={(e)=>{setN2(e.target.value);At();}}></input>
            <p>Round</p>
            <input type="number" onChange={(e)=>{setR(e.target.value);At();}}></input>
            <br/>
            <input type="button" value="click me" onClick={shek}></input>
            <div id="tes2" style={{position:'absolute',right:'600px',top:'90px'}}></div>
            <br/>
            <br/>
            <br/>   
            {p}
        </div>
    );
}
export default Taylor;
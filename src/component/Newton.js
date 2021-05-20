import React, { useState } from 'react';
import functionPlot from "function-plot";
import { Layout,Table ,Row,Col} from 'antd';
import axios from "axios";
const math=require("mathjs");
let width = 500;
let height = 300;
const { Header, Footer, Sider, Content } = Layout;
const arr = [{
    key:0,
       iteretion:0,
        dx:0,
        sx:0,
       error:0 
      }];
      const colum=[
        {
          title: 'iteretion',
          dataIndex: 'iteretion',
          key: 'iteretion',
        },
        {
            title: 'dx',
            dataIndex: 'dx',
            key: 'dx',
          },
          {
            title: 'sx',
            dataIndex: 'sx',
            key: 'sx',
          },
          {
            title: 'error',
            dataIndex: 'error',
            key: 'error',
          }
    ]
function Newton()
{
    const [x,Setx]=useState('');
    const [n,Setn]=useState('');
    const [DP,Setdp]=useState('');
    function sowv(e)
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
        ntr(n)
        Setdp(<Table columns={colum} dataSource={arr}></Table>)
    }
    async function exa() {
      let x=0
      var ex1=0,ex2=0,ex3=0
      let xx = await axios({
          method: "get",
          url: "http://localhost:4000/Nr",
        })
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          return undefined;
        });
        ex1=xx.fx
        ex2=xx.x0
        document.getElementById("xL").value=ex1
        document.getElementById("L").value=ex2
        Setx(ex1)
        Setn(ex2)
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
            Setdp('')          
          }
    function dfx(a) {
            const f = math.parse(x)
            const xx = math.parse('x')
           const b=math.derivative(f, xx).evaluate({x: a}) 
            console.log(b)
            return b;
              }
    function ntr(n)
    {
        let xk = n;
        let i=0
    while(true)
    {   
        let dxk = (-fx(xk))/dfx(xk)
        console.log("delta-xk+1 "+dxk);
        let xkp = parseInt(xk+dxk)
        console.log("xk+1 "+xkp);
        let chekz=Math.abs((xkp-xk)/xkp);
        console.log("check "+chekz);
        arr.push({
            key:i+2,
            iteretion:i+1,
            dx:dxk,
            sx:xkp,
            error:chekz
        })
        if(chekz<=0.0000001||chekz==Infinity||i==50)
        {
            break;   
        }
        xk=xkp;
        i++
        
    }
    }    
    return(
        <div>
            <p>Newton</p>
        <input type="text" id="xL" onChange={(e)=>{Setx(e.target.value);At();}}></input>
        <p>insert n</p>
        <input type="number" id="L" onChange={(e)=>{Setn(e.target.value);At();}}></input>
        <br/>
        <Row>
               <Col span={2}><br/><input type="button" onClick={sowv} value="kick me"></input></Col>
             <Col span={2}><br/><input type="button" onClick={exa} value="Ex"></input></Col>
            </Row> 
            
        <div id="tt" style={{position:'absolute',right:'600px',top:'90px'}}></div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
        {DP}
        
        
        
        </div>
        
    );
}
export default Newton;
import React, { useState } from 'react';
import functionPlot from "function-plot";
import { Layout,Table ,Row,Col} from 'antd';
import axios from "axios";
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
          async function exa() {
            let x=0
            var ex1=0,ex2=0,ex3=0
            let xx = await axios({
                method: "get",
                url: "http://localhost:4000/Secant",
              })
              .then((response) => {
                return response.data;
              })
              .catch((err) => {
                return undefined;
              });
              ex1=xx.fx
              ex2=xx.x0
              ex3=xx.x1
              document.getElementById("xL").value=ex1
              document.getElementById("L").value=ex2
              document.getElementById("R").value=ex3
              Setx(ex1)
              Setn(ex2)
              Setn2(ex3)
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
                <input type="text" id="xL" onChange={(e)=>{Setx(e.target.value);At()}}></input>
                <p>insert  n1</p>
                <input type="number" id="L" onChange={(e)=>{Setn(e.target.value);At();}}></input> 
                <p>insert  n2</p>
                <input type="number" id="R" onChange={(e)=>{Setn2(e.target.value);At();}}></input>
                <br/>
                <Row>
               <Col span={2}><br/><input type="button" value="cal" onClick={so}></input></Col>
             <Col span={2}><br/><input type="button" onClick={exa} value="Ex"></input></Col>
            </Row> 
            
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
import React, { useState } from 'react';
import functionPlot from "function-plot";
import { Layout,Table ,Row,Col} from 'antd';
import axios from "axios";
const math=require("mathjs");
const { Header, Footer, Sider, Content } = Layout;
function One_po()
{
const[x,Setx]=useState('');
const[l,Setl]=useState('');
const[p,Setp]=useState('');
const arr = [{
    key:0,
       it:0,
       o:0,
       n:0,
       cer:0
      }];
const colum=[
        {
          title: 'it',
          dataIndex: 'it',
          key: 'it',
        },
        {
          title: 'o',
          dataIndex: 'o',
          key: 'o',
        },
        {
          title: 'n',
          dataIndex: 'n',
          key: 'n',
        },
        {
          title: 'cer',
          dataIndex: 'cer',
          key: 'cer',
        },
      ]
const width =500
const height =300
function Dispay(e)
{
  arr.length=0
    functionPlot({
        target: "#G1",
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
      OO(l)
      Setp(<Table columns={colum} dataSource={arr}></Table>)
}
function fx(n)
{
  const node2 = math.parse(x)
  const code2 = node2.compile()
  let scope={
      x:n
  }
      return  code2.evaluate(scope)
}
function At()
        {
          Setp('')          
        }
        async function exa() {
          let x=0
          var ex1=0,ex2=0,ex3=0
          let xx = await axios({
              method: "get",
              url: "http://localhost:4000/Onepoint",
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
            Setl(ex2)
        }
function OO(n)
{
  arr.length=0
    let i=0;
    let xo=fx(n);
    let xn=0;
    while(true)
    {   
        xn=fx(xo);
        console.log("xo "+xo);
        console.log("xn "+xn);
        let chekz=Math.abs((xn-xo/xn));
        console.log("check "+chekz);
        arr.push({
         key:i+2,
       it:i+1,
       o:xo,
       n:xn,
       cer:chekz
        })
        if(chekz<=0.0000001||xn==xo||chekz==Infinity)
        {
            break;   
        }
        xo=xn;
        i++;
        console.log("i "+i);
        
    }
}
    return(
        <div>
          
            <p>insert x</p>
            <input type="text" id="xL"  onChange={(e)=>{Setx(e.target.value);At()}}></input>
            <p>insert l</p>
            <input type="number" id="L" onChange={(e)=>{Setl(e.target.value);At()}}></input>
            <br/>
            <Row>
               <Col span={2}><br/>  <input type="button" value="click me" onClick={Dispay}></input></Col>
             <Col span={2}><br/><input type="button" onClick={exa} value="Ex"></input></Col>
            </Row> 
            
            <div id="G1" style={{position:'absolute',right:'600px',top:'90px'}}></div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            {p}
        </div>
    );
}
export default One_po;
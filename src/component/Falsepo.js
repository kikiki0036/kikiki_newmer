import React, { useState } from 'react';
import functionPlot from "function-plot";
import { Layout,Table ,Row,Col} from 'antd';
import axios from "axios";
const math=require("mathjs");
const { Header, Footer, Sider, Content } = Layout;
const width =500
const height =300
function Falsepo() {
const[x,Setx]=useState('');
const[l,Setl]=useState('');
const[r,Setr]=useState('');
const[t,SetT]=useState('');
const arr = [{
  key:0,
     it:0,
     l:0,
     r:0,
     fxl:0,
     fxr:0,
     error:0
    }];
const colum=[
  {
    title: 'it',
    dataIndex: 'it',
    key: 'it',
  },
  {
    title: 'l',
    dataIndex: 'l',
    key: 'l',
  },
  {
    title: 'r',
    dataIndex: 'r',
    key: 'r',
  },
  {
    title: 'fxl',
    dataIndex: 'fxl',
    key: 'fxl',
  },
  {
    title: 'fxr',
    dataIndex: 'fxr',
    key: 'fxr',
  },
  {
    title: 'error',
    dataIndex: 'error',
    key: 'error',
  }
]
async function exa() {
  let x=0
  var ex1=0,ex2=0,ex3=0
  let xx = await axios({
      method: "get",
      url: "http://localhost:4000/Falseposition",
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return undefined;
    });
    ex1=xx.fx
    ex2=xx.xL
    ex3=xx.xR
    document.getElementById("xL").value=ex1
    document.getElementById("L").value=ex2
    document.getElementById("R").value=ex3
    Setx(ex1)
    Setl(ex2)
    Setr(ex3)
}
function chaneE(e)
{
  arr.length=0
  functionPlot({
  target: "#Gf",
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
fap(l,r);
SetT(<Table columns={colum} dataSource={arr}></Table>)
}
function At()
{
  SetT('')          
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
function fap(l,r)
{
        let xl=l;
        let xr=r;
        let i=0;
        let n=1
        let ox1=0;
        let checker=0;
while(true)
{
        console.log("xl "+xl);
        console.log("xr "+xr);
        let fxl=fx(xl);
        let fxr=fx(xr);
        console.log("fxl "+fxl);
        console.log("fxr "+fxr);
        let x1=((xl*fxr)-(xr*fxl)/(fxr-fxl));
        console.log("x1 "+x1);
        let fx1=fx(x1);
        console.log("fx1 "+fx1);
        let caz=fx1*fxr;
        console.log("check case "+caz)
        arr.push({
          key:i+2,
          it:i+1,
          l:xl,
          r:xr,
          fxl:fxl,
          fxr:fxr,
          eror:checker
      })
      n++;
      i++;
        if(caz<0)
        {
            xl=x1;
             ox1=x1;
        }
        else
        {
            xr=x1;
             ox1=x1;
        }
        console.log(i);
        if(i>=1)
        {
            console.log("check ee "+x1+" - "+ox1+" /"+x1);
             checker=Math.abs((x1-ox1)/x1);
             console.log("check error "+checker);
             
        }
        if(checker<0.000001&&i>=1)
        {
            break;
        }
        
    }
}
  return (
    <div >
         <p>insert fx</p>
                <input type="text" id="xL"onChange={(e)=>{Setx(e.target.value);At();}}></input>
                <p>insert l</p>
                <input type="number" id="L"onChange={(e)=>{Setl(e.target.value);At();}}></input>
                <p>insert r</p>
                <input type="number" id="R"onChange={(e)=>{Setr(e.target.value);At();}}></input>
                <br/>
                <Row>
               <Col span={2}><br/> <input type="button" value="click me" onClick={chaneE}></input></Col>
             <Col span={2}><br/><input type="button" onClick={exa} value="Ex"></input></Col>
            </Row> 
                <div id="Gf" style={{position:'absolute',right:'600px',top:'90px'}}></div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {t}
                
    </div>
  );
}

export default Falsepo;
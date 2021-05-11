import React, { useState } from 'react';
import functionPlot from "function-plot";
import { Layout,Table } from 'antd';
const { Sider,Content} = Layout;                                                                                                                    
const math=require("mathjs");
const parser = math.parser()
let width = 500;
let height = 300;
let e0=0
let xL=0
let xR=0
let fxL=0
let fxR=0
let i=0
let z=''
const arr = [{
  key:0,
     iteretion:0,
     xl:0,
     xr:0,
     fxl:0,
     fxr:0,
     error:0
    }];
const colum=[
  {
    title: 'itere',
    dataIndex: 'itere',
    key: 'itere',
  },
  {
    title: 'xl',
    dataIndex: 'xl',
    key: 'xl',
  },
  {
    title: 'xr',
    dataIndex: 'xr',
    key: 'xr',
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
  },{
    title: 'error',
    dataIndex: 'error',
    key: 'error',
  }
  
]                

function Bisec () 
{
    const[x,Setx]=useState('');
    const[l,Setl]=useState('');
    const[r,Setr]=useState('');
    const[t,Sett]=useState('');
function fx(b) {
        const node2 = math.parse(x)
        const code2 = node2.compile()
        let scope={
            x:b
        }
            return  code2.evaluate(scope)
          }
    function Bii(xl, xr, eo,i,c) {
         //       console.log(i)
     //       console.log("xl "+xl)
       //     console.log("xr "+xr)
         //   console.log("oxm "+eo)
                let fxl = fx(xl);
                let fxr = fx(xr);
                let xm = (xl + xr) / 2;
          //      console.log("xm "+xm)
                let fxm = fx(xm);
                let t = fxm * fxr;
           //     console.log("checkloop "+t);
                let checkerk =Math.abs((xm-eo)/xm);
            //    console.log("error "+checkerk)
               arr.push({
                        key:i,
                        itere:i,
                        xl:xl,
                        xr:xr,
                        fxl:fxl,
                        fxr:fxr,
                        error:checkerk
                    })
                i++
                c++
                if(checkerk>0.000001)
                {
                if (t > 0) {
                    Bii(xl, xm, xm,i,c);
                } else {
                    Bii(xm, xr, xm,i,c);
                }
            }
        } 
        function At()
        {
          Sett('')          
        }
        function Chz(e)
        {
            arr.length=0
            Sett(' ')
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
              Bii(l,r,0,1)
              Sett(<Table columns={colum} dataSource={arr}></Table>)
            }
        return(
            <div>
                <form>
                <p>insert fx</p>
                <input type="text" onChange={(e)=>{Setx(e.target.value); At(); }}></input>
                <p>insert  left</p>
                <input type="number" onChange={(e)=>{Setl(e.target.value);At();}}></input> 
                <p>insert  right</p>
                <input type="number" onChange={(e)=>{Setr(e.target.value);At();}}></input>
                <br/>
                <input type="button" value="cal" onClick={Chz}></input>
                </form>
                <div id="tes2" style={{position:'absolute',right:'600px',top:'90px'}}></div>
                <br/>
                <br/>
                <br/>
                <br/>
                {t}
             
        </div>
        );
}

export default Bisec;

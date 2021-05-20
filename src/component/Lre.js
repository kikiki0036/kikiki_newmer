import React, { useState } from 'react';
import { Layout,Table ,Row,Col} from 'antd';
import axios from "axios";
const math=require("mathjs");
const regression = require("regression");
const { Header, Footer, Sider, Content,Card  } = Layout;
const Arr=[];
const Arr2=[];
const Arr3=[];
var V1=[];
var V2=[];
var V3=[];
var V4=[];
var zz
var xs
var ys
var sp
let Ma
let Mb
let Mc
var ex1
var ex2
var ex3
function Lre()
{
    const[Ss,SSs]=useState('');
    const[Ab,Aa]=useState('');
    const[A2,Aa2]=useState('');
    const[A3,Aa3]=useState('');
    const[M1,Mm1]=useState('');
    const[M2,Mm2]=useState('');
    const[M3,Mm3]=useState('');
    const[B,Bb]=useState('');
    const[AA,AAa]=useState('');
    const[As,Asw]=useState('');
    const[I3,II3]=useState('');
    const[AANS,AAAns]=useState('');
    function inM() {
        let z=0
        let x=0
        for(let i=1;i<=Ss;i++)
        {
            for(let j=1;j<=Ss;j++)
            {
            z++
            }
            
            Arr2.push(<input type ="number"id={"b"+i}key={x} placeholder={"a"+i} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr3.push(<input type ="number"id={"c"+i}key={x} placeholder={"b"+i} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr3.push(<br/>)
            Arr2.push(<br/>)
            x++ 
        }
        x++
        Aa2(Arr2)
        Aa3(Arr3)
        Mm1("X")
        Mm3("Y")
        Bb(<input type="button" key={x}value="cal" onClick={Te}></input>)

    }
    function Se()
    {
        Arr.length=0
        Arr2.length=0
        Arr3.length=0
        V1.length=0
        V2.length=0 
        V3.length=0
        Ma=0
        Mb=0
        II3('')
        Mc=0
        zz=0
        Asw(' ')
        Aa(" ")
        Aa2(" ")
        Aa3(" ")
        Mm1(" ")
        Mm2(" ")
        Mm3(" ")
        Bb(" ")
        AAAns("")
    } 
    async function exa() {
        let x=0
        Ma=0
        Mb=0
        var ex1=0,ex2=0,ex3=0,ex4=0,ex5=0
        let xx = await axios({
            method: "get",
            url: "http://localhost:4000/lr",
          })
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            return undefined;
          });
          ex1=xx.col
          ex2=xx.X
          ex3=xx.Y
          ex4=xx.Xi
          console.log(ex1);
          console.log(ex2);
          console.log(ex3);
          console.log(ex4);
          V1.length=0
          for(let i=1;i<=ex1;i++)
          {
              Arr2.push(<input type ="number"id={"b"+i}key={x} placeholder={"a"+i} value={ex2[i-1]} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
              Arr3.push(<input type ="number"id={"c"+i}key={x} placeholder={"b"+i} value={ex3[i-1]} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
              Arr3.push(<br/>)
              Arr2.push(<br/>)
              x++ 
              V1.push([]);
        V1[i-1][0]=ex2[i-1]
        V1[i-1][1]=ex3[i-1]
          }
          Aa2(Arr2)
          Aa3(Arr3)
          Mm1("X")
          Mm3("Y")
          Bb(<input type="button" key={x}value="cal" onClick={TT}></input>)
          document.getElementById("xX").value=ex1
          document.getElementById("xXx").value=ex4



        }
    function Te()
    {
      V2=[];
      V3=[];
        for (let i = 1; i <= Ss; i++) {
            for (let j = 1; j <= Ss; j++) {
            }
        }
        for (let i = 1; i <= Ss; i++) {
        V2.push([]);
        V2[i-1]=document.getElementById("b"+i).value
        V3.push([]);
        V3[i-1]=document.getElementById("c"+i).value
        V1.push([]);
        V1[i-1][0]=document.getElementById("b"+i).value
        V1[i-1][1]=document.getElementById("c"+i).value
        }
        
        TT()
    }
    function TT()
    {
        console.log(V1);
        const result = regression.linear(V1);
        let a0 = result.equation[1];
        let a1 = result.equation[0];
        var xxx=document.getElementById("xXx").value
        //V4.push("a0 :" +a0)
        V4[0] = (<h1>a0 : {a0}</h1>);
        V4[1] = (<h1>a1 : {a1}</h1>);
        V4[2] = (<h1>f({xxx})={a0}+{a1}({xxx})</h1>);
        V4[3] = (<h1>f({xxx})={a0 + a1 * xxx}</h1>); 
        console.log(V4);
        AAAns(V4)
    }
   

    return(
        <div>
            <div>Linear Re</div>
            <input type="number" id="xX"onChange={(e)=>{ SSs(e.target.value); Se();} }></input>
            <br/>
            <div>Insert X</div>
            <input type="number" id="xXx"></input>
            <br/>
            <Row>
            <Col span={2}><br/><input type="button" onClick={inM} value="Create"></input></Col>
            <Col span={2}><br/><input type="button" onClick={exa} value="Ex"></input></Col>
            </Row> 
            <br/>
            {I3}
            <Row>
            <Col span={12}>{M1}<br/>{A2}</Col>
            <Col span={12}>{M3}<br/>{A3}</Col>
            </Row> 
            {B}
            <br/>
            <br/>
            {AA}
            <br/>
            {AANS}
        </div>
    );
}
export default Lre;
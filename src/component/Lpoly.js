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
function Lpoly()
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
        Aa(Arr)
        Aa2(Arr2)
        Aa3(Arr3)
        Mm1("MatrixA")
        Mm2("MatrixB")
        Mm3("MatrixC")
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
     //   V2[i-1]=document.getElementById("b"+i).value
        V3.push([]);
       // V3[i-1]=document.getElementById("c"+i).value
        V1.push([]);
        V1[i-1][0]=document.getElementById("b"+i).value
        V1[i-1][1]=document.getElementById("c"+i).value
        }
        
        TT()
    }
    async function exa() {
        let x=0
        Ma=0
        Mb=0
        var ex1=0,ex2=0,ex3=0,ex4=0,ex5=0
        let xx = await axios({
            method: "get",
            url: "http://localhost:4000/pr",
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
          ex5=xx.order
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
          document.getElementById("Order").value=ex5



        }
    function TT()
    {
        let oo=document.getElementById("Order").value
        let xx=document.getElementById('xXx').value
        const result = regression.polynomial(V1,oo);
        let Fx = 0;
        let strFx = '';
        V4=[]
        for(let i=0;i<result.equation.length; i++)
        {
            V4.push(<h1>a{i} : {result.equation[i]}</h1>);
            Fx += result.equation[i] * (math.pow(xx, i));

            if (i !== result.equation.length - 1) {
                strFx += `${result.equation[i]}*x^${i}+`
            } else {
                strFx += `${result.equation[i]}*x^${i}`
            }

            console.log(strFx);
        }
        V4.push(<h1>f({xx})={Fx}</h1>);
        console.log(V4);
        AAAns(V4)
    }
   

    return(
        <div>
            <div>Linear Re</div>
            <input type="number" id="xX" onChange={(e)=>{ SSs(e.target.value); Se();} }></input>
            <br/>
            <div>Insert X</div>
            <input type="number" id="xXx"></input>
            <br/>
            <div>Order X</div>
            <input type="number" id="Order"></input>
            <br/>
            <Row>
            <Col span={2}><br/><input type="button" onClick={inM} value="Create"></input></Col>
            <Col span={2}><br/><input type="button" onClick={exa} value="Ex"></input></Col>
            </Row>
            <br/>
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
export default Lpoly;
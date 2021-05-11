import React, { useState } from 'react';
import { Layout,Table ,Row,Col} from 'antd';
import axios from "axios";
const math=require("mathjs");
const Spline = require('cubic-spline');
const { Header, Footer, Sider, Content,Card  } = Layout;
const Arr=[];
const Arr2=[];
const Arr3=[];
var V1=[];
var V2=[];
var V3=[];
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
function Spy()
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
        Asw("Input index")
        Bb(<input type="button" key={x}value="cal" onClick={Te}></input>)
        II3(<input type="number" key={x+1} id={0}  id={0} ></input>)
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
        let xx = await axios({
            method: "get",
            url: "http://localhost:8080/sp",
          })
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            return undefined;
          });
          ex1=xx.Xi
          ex2=xx.X
          ex3=xx.Y
          console.log(ex1);
          console.log(ex2);
          console.log(ex3);
          for(let i=0;i<ex1;i++)
          {
            Arr2.push(<input type ="number"id={"b"+i}key={x} placeholder={"a"+i}  value={ex2[i]}style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr3.push(<input type ="number"id={"c"+i}key={x} placeholder={"b"+i} value={ex3[i]}style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr3.push(<br/>)
            Arr2.push(<br/>)
            x++ 
          }
          Mm1("MatrixA")
        Mm2("MatrixB")
        Mm3("MatrixC")
        Asw("Input index")
          Aa2(Arr2)
         Aa3(Arr3)
         Bb(<input type="button" key={x}value="cear" onClick={Se}></input>)
         II3(<input type="number" key={x+1} id={0}  id={0} value={ex1}></input>)
         sp=0
         sp=new Spline(ex2,ex3)
         AAAns("Answer is = "+sp.at(ex1))  
    }
    function Te()
    {
    console.log("Tee");
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
        }
         zz=document.getElementById(0).value
       Mb=math.matrix(V2);
       Mc=math.matrix(V3);
       console.log(V2);
       console.log(V3);
        TT()
    }
    function TT()
    {
        xs=0
        ys=0
        sp=0
        xs=V2
        ys=V3
        console.log(xs);
        console.log(ys);
        sp=new Spline(xs,ys)
        console.log(zz);
        console.log(sp);
        console.log(sp.at(zz));
        AAAns("Answer is = "+sp.at(zz))
    }
   

    return(
        <div>
            <div>Spine</div>
            <input type="number" onChange={(e)=>{ SSs(e.target.value); Se();} }></input>
            <br/>
            <input type="button" onClick={inM} value="Create"></input>
            <input type="button" onClick={exa} value="example"></input>
            <br/>
            <br/>
            {As}
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
export default Spy;
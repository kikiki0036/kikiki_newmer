import React, { useState } from 'react';
import { Layout,Table ,Row,Col} from 'antd';
import axios from "axios";
const math=require("mathjs");
const Spline = require('cubic-spline');
const { Header, Footer, Sider, Content,Card  } = Layout;
var Arr=[];
var Arr2=[];
var Arr3=[];
var V1=[];
var V2=[];
var V3=[];
var ans=[];
var xi=[];
var fxi=[];
var zz
var xs
var ys
var sp
let Ma
let Mb
let Mc
const anrr = [{
    x:"",
    ans:''
       }];
function Larg()
{
    const[Po,Pp]=useState('');
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
            Arr2.push(<input type ="number"id={"b"+i}key={x} placeholder={"a"+i} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr3.push(<input type ="number"id={"c"+i}key={x} placeholder={"b"+i} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr3.push(<br/>)
            Arr2.push(<br/>)
            x++ 
        }
        x++
        Aa2(Arr2)
        Aa3(Arr3)
        Mm1("MatrixA")
        Mm2("MatrixB")
        Asw("Input index")
        Bb(<input type="button" key={x}value="cal" onClick={Te}></input>)
        II3(<input type="text" key={x+1} id={"poi"}  placeholder="input p"></input>)
    }
    async function exa() {
        let x=0
        Ma=0
        Mb=0
        
        var ex1=0,ex2=0,ex3=0,ex4=0,ex5=0
        let xx = await axios({
            method: "get",
            url: "http://localhost:4000/nd",
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
          ex5=xx.i
          let z=0
    
        for(let i=1;i<=ex1;i++)
        {
            Arr2.push(<input type ="number"id={"b"+i}key={x} value ={ex2[i-1]} placeholder={"x"+i} style={{height: 50,width: 50,margin: '0 10px 10px 0'}}></input>)
            Arr3.push(<input type ="number"id={"c"+i}key={x} value={ex3[i-1]} placeholder={"y"+i} style={{height: 50,width: 50,margin: '0 10px 10px 0'}}></input>)
            Arr3.push(<br/>)
            Arr2.push(<br/>)
            x++
            V2[i-1]=ex2[i-1]
            V3[i-1]=ex3[i-1]
        }
        x++
        Aa2(Arr2)
        Aa3(Arr3)
        Mm1("X")
        Mm2("Y")
        Asw("Input index")
        Bb(<input type="button" key={x}value="cal" onClick={TT}></input>)
        document.getElementById("ff").value=ex1
        document.getElementById("pox").value=ex5
        document.getElementById("xX").value=ex4
        zz=ex5
         Arr=zz.split(',')
         for (let i = 0; i < Arr.length; i++) {
            Arr[i] = parseInt(Arr[i]);
        }
        // for (let i = 0; i < Arr.length; i++) {
          //  Arr[i] = parseFloat(Arr[i]);
        //}
          
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
      V2.length=0
      V3.length=0
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



        zz=document.getElementById("pox").value
         Arr=zz.split(',')
         for (let i = 0; i < Arr.length; i++) {
           // parseFloat(Arr[i]) 
           console.log(parseFloat(Arr[i]))
            Arr[i]=parseFloat(Arr[i])
        }
        console.log(Arr);
        console.log(V2);
        console.log(V3);
        TT()
    }
    function TT()
    {
        let x=document.getElementById("xX").value
        let fx = 0;
        Arr.forEach(p => {
            let li = 1;
            Arr.forEach(k => {
                //console.log(p+":"+k);
                if (p !== k) {
                    li *= (V2[k - 1] - x) / (V2[k - 1] - V2[p - 1]);
                }
            });
           
            fx += li * V3[p - 1];
        });
     //   ans.push(<h3>{"f(x) : " + fx}</h3>)
        
        
    //    ans.push(<h3>{"f(x) : " +Ans(xsx)}</h3>); 
        AAAns("f(x) : " +fx)
      //  console.log(Ans(xsx));
    }
    return(
        <div>
            <div>Newton </div>
            <div>N</div>
            <input type="number" id="ff" onChange={(e)=>{ SSs(e.target.value); Se();} }></input>
            <br/>
            <div>Insert point</div>
            <input  id="pox"></input>
            <br/>
            <div>Insert X</div>
            <input type="text" id="xX"></input>
            <br/>
            <Row>
            <Col span={2}><br/><input type="button" onClick={inM} value="Create"></input></Col>
            <Col span={2}><br/><input type="button" onClick={exa} value="Ex"></input></Col>
            </Row> 
            <Row>
            <Col span={12}>{M1}<br/>{A2}</Col>
            <Col span={12}>{M2}<br/>{A3}</Col>
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
export default Larg;
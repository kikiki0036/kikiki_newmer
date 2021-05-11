import React, { useState } from 'react';
import { Layout,Table ,Row,Col} from 'antd';
const math=require("mathjs");
const { Header, Footer, Sider, Content } = Layout;
const Arr=[];
const Arr2=[];
const Arr3=[];
var V1=[];
var V2=[];
var V3=[];
const arrnw = [{
    key:0,
    x:0,
    Iteration:0,
    value:0,
    oldvalue:0,
    error:0
      }];
let Ma
let Mb
let Mc
var x
var epsilon
var data = [];
let Answer=[];
let A=[]
let err =0.00001
function Gsei()
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
    const[top,ans]=useState([]);
    function inM() {
        let z=0
        let x=0
        for(let i=1;i<=Ss;i++)
        {
            for(let j=1;j<=Ss;j++)
            {
                Arr.push(<input type="number" id={"a"+i+" "+j}key={z} placeholder={"a"+i+''+j} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            z++
            }
            
            Arr2.push(<input type ="number"id={"b"+i}key={x} placeholder={"b"+i} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr3.push(<input type ="number"id={"c"+i}key={x} placeholder={"c"+i} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr3.push(<br/>)
            Arr2.push(<br/>)
            x++ 
            Arr.push(<br/>)
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
        arrnw.length=0
        Ma=0
        Mb=0
        Mc=0
        AAa(' ')
        Aa(" ")
        Aa2(" ")
        Aa3(" ")
        Mm1(" ")
        Mm2(" ")
        Mm3(" ")
        Bb(" ")
    } 
    function Te()
    {
    
      V1=[];
      V2=[];
      V3=[];
        for (let i = 1; i <= Ss; i++) {
            V1.push([]);
            for (let j = 1; j <= Ss; j++) {
               V1[i-1][j-1]=document.getElementById("a"+i+" "+j).value
            }
        }
        for (let i = 1; i <= Ss; i++) {
        V2.push([]);
        V2[i-1]=document.getElementById("b"+i).value
        V3.push([]);
        V3[i-1]=document.getElementById("c"+i).value
        }
       Ma=math.matrix(V1);
       Mb=math.matrix(V2);
       Mc=math.matrix(V3);
        TT()
    }
    function TT()
    {
        console.log("en");
    let round=1
    let error;
    let loop = true;
    let sum;
    let tranform = JSON.parse(JSON.stringify(Ma));
    let tranform1 = JSON.parse(JSON.stringify(Mb));
    let tranform2 = JSON.parse(JSON.stringify(Mc));
    let allans = tranform2;
    while(loop){
        for(let i=0;i<Ss;i++){ // row
          sum = tranform1.data[i];
          for(let j=0;j<Ss;j++){
            if(i != j){
              sum = sum-(tranform.data[i][j]*allans.data[j]);
            }
          }
          sum = sum/tranform.data[i][i];
          error = math.abs((sum-allans.data[i])/sum);
          error = error.toFixed(6)
          top.push({x:"x"+i,value:sum,Iteration:round,oldvalue:allans[i],error:error})
          sum = 0;
          allans[i] = sum;
          if(error <= 0.0000001||round==50){
            loop = false;
          }
        }
        round++;
    }
    console.log(top);
    }

    return(
        <div>
            <div>G-seidel</div>
            <input type="number" onChange={(e)=>{ SSs(e.target.value); Se();} }></input>
            <br/>
            <input type="button" onClick={inM} value="Create"></input>
            <br/>
            <br/>
            <Row>
            <Col span={12}>{M1}<br/>{Ab}</Col>
            <Col span={6}>{M2}<br/>{A2}</Col>
            <Col span={6}>{M3}<br/>{A3}</Col>
            </Row> 
            {B}
            <br/>
            <br/>
            {AA}
        </div>
    );
}
export default Gsei;
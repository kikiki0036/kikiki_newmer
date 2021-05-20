import React, { useState } from 'react';
import { Layout,Table ,Row,Col} from 'antd';
import axios from "axios";
const math=require("mathjs");
const { Header, Footer, Sider, Content } = Layout;
const Arr=[];
const Arr2=[];
const Arr3=[];
var V1=[];
var lampda=[];
var V2=[];
var V3=[];
const anrr = [{
    iteration:"",
    lampda:'',
    error:''

       }];
const colum=[
        {
          title: 'iteration',
          dataIndex: 'iteration',
          key: 'iteration',
        },
        {
          title: 'lampda',
          dataIndex: 'lampda',
          key: 'lampda',
        }
        ,
        {
          title: 'error',
          dataIndex: 'error',
          key: 'error',
        }
      ] 
let Ma
let Mb
let Mc
var x
var forX=''
var xikey=''
var check=false
var epsilon
var ANS
var data = [];
let Answer=[];
let A=[]
let err =0.00001
function Coc()
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
    const[Bc,Bcl]=useState('');
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
        anrr.length=0
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
    async function exa() {
        let x=0
        Ma=0
        Mb=0
        var ex1=0,ex2=0,ex3=0,ex4=0
        let xx = await axios({
            method: "get",
            url: "http://localhost:4000/conjugate",
          })
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            return undefined;
          });
          ex1=xx.A
          ex2=xx.B
          ex3=xx.col
          ex4=xx.X
          console.log(ex1);
          console.log(ex2);
          console.log(ex3);
          console.log(ex4);
          let z=0
          V1=[];
          V2=[];
          V3=[];
          var nat=[]
        for(let i=1;i<=ex3;i++)
        {
            for(let j=1;j<=ex3;j++)
            {
                Arr.push(<input type="number" id={"a"+i+" "+j}key={z} placeholder={"a"+i+''+j} value={ex1[i-1][j-1]} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            z++
            }
            Arr2.push(<input type ="number"id={"b"+i}key={x} placeholder={"b"+i} value={ex2[i-1]}style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr2.push(<br/>)
            Arr3.push(<input type ="number"id={"b"+i}key={x} placeholder={"c"+i} value={ex4[i-1]}style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr3.push(<br/>)
            x++ 
            Arr.push(<br/>)
            V2[i-1]=ex2[i-1][0]
            V3[i-1]=ex4[i-1][0]
        }
        x++
     
        console.log(V2);
        console.log(V3);
        Aa(Arr)
        Aa2(Arr2)
        Aa3(Arr3)
        Mm1("MatrixA")
        Mm2("MatrixB")
        Mm3("MatrixC")
        Ma=math.matrix(ex1);
        Mb=math.matrix(V2); 
        Mc=math.matrix(V3);
        SSs(ex3)
        Bb(<input type="button" key={x}value="cal" onClick={TT}></input>)
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
        console.log("Ent");
      ANS = [];
      check=false;
      checkPositivedef(1);
      // console.log(A);console.log(B);console.log(C);    
      if(check) {
          return;
      }    
      data = [];
      let eps = 9999, Ri, Di, a0;
      let xi = math.clone(Mc);
      let ct = 0;
      while (eps > err) {
          if (ct === 0) {
              Ri = math.subtract(math.multiply(Ma, Mc), Mb);
              Di = math.multiply(-1, Ri);
              ct++;
          }
          //show det แต่ละ site && check positive matrix
          else {
               lampda = math.multiply(math.divide(math.multiply(math.transpose(Di), Ri), math.multiply(math.multiply(math.transpose(Di), Ma), Di)), -1);
              xi = math.add(xi, Di.map((index) => { return index * math.squeeze(lampda) }));
              Ri = math.subtract(math.multiply(Ma, xi), Mb);
              eps = math.squeeze(math.sqrt(math.multiply(math.transpose(Ri), Ri)));
              a0 = math.divide(math.multiply(math.multiply(math.transpose(Ri), Ma), Di), math.multiply(math.multiply(math.transpose(Di), Ma), Di));
              let a3 = math.squeeze(a0);
              let a2 = Di.map((index) => (index * a3));
              Di = math.add(math.multiply(Ri, -1), a2);
              anrr.push({
                  iteration: ct,
                  lampda: lampda ,
                  error: eps
              })
              // console.log(columns);
              for (let i = 0; i < Ss; i++) {
                  xikey = "x" + (i + 1);
                  xikey = xikey.toString();
                  forX = (math.squeeze(xi).toArray())
                  data[ct - 1][xikey] = forX[i];
              }
              ct++;
          }
      }
    //  console.log("ans"+ANS);
     // console.log("data"+data);
     console.log(data);
     console.log(ANS);
      AAa(<Table columns={colum} dataSource={anrr}></Table>)
    }
    function det(m) {
      return math.det(m);
  } 
    function checkPositivedef(sizeNow) {
      // console.log(A._data[0][0]);
      // console.log(det(A._data[0][0]));
      // console.log(det(A));  
      if (sizeNow <= Ss) {
          let tempArr = [];
          for (let i = 0; i < sizeNow; i++) {
              tempArr[i] = [];
              for (let j = 0; j < sizeNow; j++) {
                  tempArr[i][j] = Ma._data[i][j];
              }
          }
          console.log(tempArr);
          console.log(det(tempArr));
          if (det(tempArr) <= 0) {
              check=true;               
              return;
          } else {
              ANS.push(<h1>{'det ' + sizeNow + 'x' + sizeNow + ' : ' + det(tempArr)}</h1>);
              checkPositivedef(sizeNow + 1);
          }
      }
      else {          
          return;
      }
  }

    return(
        <div>
            <div>Con ju gate ei ei</div>
            <input type="number" onChange={(e)=>{ SSs(e.target.value); Se();} }></input>
            <br/>
            <Row>
            <Col span={2}><br/><input type="button" onClick={inM} value="Create"></input></Col>
            <Col span={2}><br/><input type="button" onClick={exa} value="Ex"></input></Col>
            </Row> 
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
export default Coc;
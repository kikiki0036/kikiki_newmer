import React, { useState } from 'react';
import { Layout,Table ,Row,Col} from 'antd';
import axios from "axios";
const math=require("mathjs");
const { Header, Footer, Sider, Content ,Input,} = Layout;
const Arr=[];
const Arr2=[];
var V1=[];
var V2=[];
var ans=[];
var DD=[]
var Ma
var Mb
const arr = [{
   x:"",
   ans:''
      }];
  const colum=[
    {
      title: 'x',
      dataIndex: 'x',
      key: 'x',
    },
    {
      title: 'ans',
      dataIndex: 'ans',
      key: 'ans',
    }
    
  ]           
function Camer()
{
    const[Ss,SSs]=useState('');
    const[A,Aa]=useState('');
    const[A2,Aa2]=useState('');
    const[M1,Mm1]=useState('');
    const[M2,Mm2]=useState('');
    const[B,Bb]=useState('');
    const[AA,AAa]=useState('');
    const[Aans,Atn]=useState([]);
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
            Arr2.push(<br/>)
            x++ 
            Arr.push(<br/>)
        }
        x++
        Aa(Arr)
        Aa2(Arr2)
        Mm1("MatrixA")
        Mm2("MatrixB")
        Bb(<input type="button" key={x}value="cal" onClick={Te}></input>)
    }
    function Se()
    {
        Arr.length=0
        Arr2.length=0
        V1.length=0
        V2.length=0 
        Ma=0
        Mb=0
        AAa(' ')
        Aa(" ")
        Aa2(" ")
        Mm1(" ")
        Mm2(" ")
        Bb(" ")
        Bcl(" ")
    } 
    async function exa() {
        let x=0
        Ma=0
        Mb=0
        var ex1=0,ex2=0,ex3=0
        let xx = await axios({
            method: "get",
            url: "http://localhost:4000/cramer",
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
          console.log(ex1);
          console.log(ex2);
          console.log(ex3);
          let z=0
          V1=[];
          V2=[];
        for(let i=1;i<=ex3;i++)
        {
            for(let j=1;j<=ex3;j++)
            {
                Arr.push(<input type="number" id={"a"+i+" "+j}key={z} placeholder={"a"+i+''+j} value={ex1[i-1][j-1]} style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            z++
            }
            Arr2.push(<input type ="number"id={"b"+i}key={x} placeholder={"b"+i} value={ex2[i-1]}style={{height: 50,width: 50,margin: '0 5px 5px 0'}}></input>)
            Arr2.push(<br/>)
            x++ 
            Arr.push(<br/>)
            V2.push([]);
            V2[i-1]=ex2[i-1][0]
        }
        x++
        Aa(Arr)
        Aa2(Arr2)
        console.log(V2);
        Mm1("MatrixA")
        Mm2("MatrixB")
        Ma=math.matrix(ex1);
        Mb=math.matrix(V2); 
        SSs(ex3)
        Bb(<input type="button" key={x}value="cal" onClick={TT}></input>)
    }
    function Te()
    {
      V1=[];
      V2=[];
        for (let i = 1; i <= Ss; i++) {
            V1.push([]);
            for (let j = 1; j <= Ss; j++) {
               V1[i-1][j-1]=document.getElementById("a"+i+" "+j).value;
            }
        }
        for (let i = 1; i <= Ss; i++) {

        V2.push([]);
        V2[i-1]=document.getElementById("b"+i).value
        }
        console.log(V1);
        console.log(V2);
       Ma=math.matrix(V1);
       Mb=math.matrix(V2);
        TT()
    }
    function TT()
    {
      
        console.log(Ma);
        console.log(Mb);
        let a;
        arr.length=0
        for(let i = 0;i<Ma._size[0];i++){
            console.log("ss");
            a=0;
            let tranform = JSON.parse(JSON.stringify(Ma));
            let  tranform1 = JSON.parse(JSON.stringify(Mb));
            
            for(let j=0;j<Ma._size[0];j++){
                tranform.data[j][i] = tranform1.data[j]
            }
             a =math.round(math.det(tranform.data)/ math.det(Ma))
          //   c=a/b
          ans.push ("x:"+i+" = "+a)
          arr.push({
              x:i,
              ans:a
          }

          )
          ans.push(<br/>)
          //   ans.push({x:"x"+i,value:a,number: i,key : i })
          }
          AAa(<Table columns={colum} dataSource={arr}></Table>)
          Bcl(<input type="button" value="clear" onClick={Se}></input>)
          console.log(ans)
    }
    
    return(
        <div>
            <div>Cramer Rule</div>
            <input type="number" onChange={(e)=>{ SSs(e.target.value); Se();} }></input>
            <br/>
            <Row>
            <Col span={2}><br/><input type="button" onClick={inM} value="Create"></input></Col>
            <Col span={2}><br/><input type="button" value="Ex" onClick={exa}></input></Col>
            </Row>
            <br/>
            <br/>
            <Row>
            <Col span={12}>{M1}<br/>{A}</Col>
            <Col span={12}>{M2}<br/>{A2}</Col>
            </Row>
            <Row>
            <Col span={2}><br/>{B}</Col>
            <Col span={2}><br/>{Bc}</Col>
            </Row>
            <br/>
            <br/>
            {AA}
        </div>
    );
}
export default Camer;
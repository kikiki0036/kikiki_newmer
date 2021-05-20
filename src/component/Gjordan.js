import React, { useState } from 'react';
import { Layout,Table ,Row,Col} from 'antd';
import axios from "axios";
const math=require("mathjs");
const { Header, Footer, Sider, Content } = Layout;
const Arr=[];
const Arr2=[];
var V1=[];
var V2=[];
var ans=[];
let Ma
let Mb
let Answer=[];
const anrr = [{
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
function Gjordan()
{
    const[Ss,SSs]=useState('');
    const[A,Aa]=useState('');
    const[A2,Aa2]=useState('');
    const[M1,Mm1]=useState('');
    const[M2,Mm2]=useState('');
    const[B,Bb]=useState('');
    const[AA,AAa]=useState('');
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
    async function exa() {
        let x=0
        Ma=0
        Mb=0
        var ex1=0,ex2=0,ex3=0
        let xx = await axios({
            method: "get",
            url: "http://localhost:4000/gaussjordan",
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
            x++ 
            Arr.push(<br/>)
            V2[i-1]=ex2[i-1][0]
        }
        x++
        console.log(nat);
        console.log(V2);
        Aa(Arr)
        Aa2(Arr2)
        Mm1("MatrixA")
        Mm2("MatrixB")
        Ma=math.matrix(ex1);
        Mb=math.matrix(V2); 
        SSs(ex3)
        Bb(<input type="button" key={x}value="cal" onClick={TT}></input>)
    }
    function Se()
    {
        Arr.length=0
        Arr2.length=0
        V1.length=0
        V2.length=0 
        Ma=0
        anrr.length=0
        Mb=0
        AAa(' ')
        Aa(" ")
        Aa2(" ")
        Mm1(" ")
        Mm2(" ")
        Bb(" ")
        Bcl(" ")
    } 
    function Te()
    {
    
      V1=[];
      V2=[];
        for (let i = 1; i <= Ss; i++) {
            V1.push([]);
            for (let j = 1; j <= Ss; j++) {
               V1[i-1][j-1]=document.getElementById("a"+i+" "+j).value
            }
        }
        for (let i = 1; i <= Ss; i++) {

        V2.push([]);
        V2[i-1]=document.getElementById("b"+i).value
        }
       Ma=math.matrix(V1);
       Mb=math.matrix(V2);
        TT()
    }

    function TT()
    {
        let i, j;
        let row = [];
        console.log(Ma);
        console.log(Mb);
        let new_matrix = math.clone(Ma);
        for (i = 0; i <= Mb._size[0]; i++) {
            row[i] = i;
            if (i < Mb._size[0]) {
                new_matrix.subset(math.index(i, Mb._size[0]), Mb._data[i]);
            }
        }
        // make triangle 1
        for (j = 0; j <= Mb._size[0] - 2; j++) {
            for (i = j + 1; i <=Mb._size[0] - 1; i++) {
                if (i !== j) {
                    let s1 = math.divide(math.subset(new_matrix, math.index(j, row)), math.subset(new_matrix, math.index(j, j)));
                    let s2 = math.multiply(s1, math.subset(new_matrix, math.index(i, j)));
                    let s4 = math.subtract(new_matrix.subset(math.index(i, row)), s2);
                    new_matrix.subset(math.index(i, row), s4._data[0]);
                }
            }
        }
        for (j = Mb._size[0] - 1; j > 0; j--) {
            for (i = 0; i <= Mb._size[0] - 2; i++) {
                if (i !== j && i < j) {
                    //console.log(i,":",j);        
                    let s1 = math.divide(math.subset(new_matrix, math.index(j, row)), math.subset(new_matrix, math.index(j, j)));
                    let s2 = math.multiply(s1, math.subset(new_matrix, math.index(i, j)));
                    let s4 = math.subtract(new_matrix.subset(math.index(i, row)), s2);
                    new_matrix.subset(math.index(i, row), s4._data[0]);

                 //   console.log(new_matrix);
                }
            }
        }
        console.log(new_matrix);

        for (i = 0; i < Mb._size[0]; i++) {
            let ii = math.divide(math.subset(new_matrix, math.index(i, row)), math.subset(new_matrix, math.index(i, i)));
            new_matrix.subset(math.index(i, row), ii._data[0]);
        //    final[i]= math.ceil(math.subset(new_matrix,math.index(i,B._size[0])));
           // let zzzx=math.subset(new_matrix, math.index(i, Mb._size[0]))
            anrr.push({
                x:i,
                ans: math.subset(new_matrix, math.index(i, Mb._size[0]))
            })
           // Answer.push(<h1>{'x' + i + " = " + math.subset(new_matrix, math.index(i, Mb._size[0]))}</h1>)
        }
        AAa(<Table columns={colum} dataSource={anrr}></Table>)
        Bcl(<input type="button" value="clear" onClick={Se}></input>)
        
  
    }
    return(
        <div>
            <div>G Jordan air froce</div>
            <input type="number" onChange={(e)=>{ SSs(e.target.value); Se();} }></input>
            <br/>
            <Row>
            <Col span={2}><br/><input type="button" onClick={inM} value="Create"></input></Col>
            <Col span={2}><br/><input type="button" onClick={exa} value="Ex"></input></Col>
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
export default Gjordan;
import  React  from 'react';
import Bisec from'./component/Bisec.js';
import Falsepo from'./component/Falsepo.js';
import { Layout, Menu} from 'antd';
import One_po from'./component/One_po.js';
import Newton from'./component/Newton.js';
import Secan from'./component/Secan.js';
import Taylor from './component/Taylor.js'
import Camer from './component/Camer.js'
import Dd from './component/Dd.js'
import Geli from './component/Geli.js'
import Gjordan from'./component/Gjordan.js'
import Lu from'./component/Lu.js' 
import Choles from './component/Choles'
import Jacobi from './component/Jacobi.js'
import Gsei from './component/Gsei.js'
import Coc from './component/Coc.js'
import Spy from './component/Spy.js'
const { SubMenu } = Menu;
let p2="Newmer"
const { Header, Content, Footer, Sider } = Layout;
class App extends React.Component {
  constructor(){
    super()
    this.state={
    S:''
  }
  this.Ss=this.Ss.bind(this);
  }
  
  Ss(e)
  {
    this.setState({S:e})
 //   console.log("ssssss");
   // console.log(e.target.key);
//    console.log(e.target.value)
  }

  
  
render()
{
  console.log(this.state.S);
  if(this.state.S.key==1)
  {
    p2=<Bisec />
  }
  if(this.state.S.key==2)
  {
    p2=<Falsepo/>
  }
  if(this.state.S.key==3)
  {
    p2=<One_po/>
  }
  if(this.state.S.key==4)
  {
    p2=<Newton/>
  }
  if(this.state.S.key==5)
  {
    p2=<Secan/>
  }
  if(this.state.S.key==6)
  {
    p2=<Taylor/>
  }
  if(this.state.S.key==7)
  {
    p2=<Camer/>
  }
  if(this.state.S.key==8)
  {
    p2=<Geli/>
  }
  if(this.state.S.key==9)
  {
    p2=<Gjordan/>
  }
  if(this.state.S.key==10)
  {
    p2=<Lu/>
  }
  if(this.state.S.key==11)
  {
    p2=<Jacobi/>
  }
  if(this.state.S.key==12)
  {
    p2=<Gsei/>
  }
  if(this.state.S.key==13)
  {
    p2=<Coc/>
  }
  if(this.state.S.key==14)
  {
    p2=<Spy/>
  }

  return(
    
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1">Nemer</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1"  title="Root of iq">
              <Menu.Item  key="1" onClick={this.Ss}>Bisexual</Menu.Item>
              <Menu.Item  key="2"onClick={this.Ss}>Falseposition</Menu.Item>
              <Menu.Item  key="3"onClick={this.Ss}>One-point</Menu.Item>
              <Menu.Item  key="4"onClick={this.Ss}>Taylor swiff</Menu.Item>
              <Menu.Item  key="5"onClick={this.Ss}>Issac newton</Menu.Item>
              <Menu.Item  key="6"onClick={this.Ss}>See can't</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2"  title="Lea near">
              <Menu.Item key="7"onClick={this.Ss}>Camer Rule</Menu.Item>
              <Menu.Item key="8"onClick={this.Ss}>Gual Elimin</Menu.Item>
              <Menu.Item key="9"onClick={this.Ss}>Gual Joor</Menu.Item>
              <Menu.Item key="10" onClick={this.Ss} >Lu media</Menu.Item>
              <Menu.Item key="11" onClick={this.Ss} >Jacobi</Menu.Item>
              <Menu.Item key="12" onClick={this.Ss} >Gual si</Menu.Item>
              <Menu.Item key="13" onClick={this.Ss} >Conjugate</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3"  title="Interpolation">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="14" onClick={this.Ss}>Spy</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content id ="WF"style={{padding: '0 24px', minHeight: 1000 ,background:'#fff'}}>{p2}
        <Content id="WFX" style={{textAlign:'right'}}></Content></Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}
  }


export default App;

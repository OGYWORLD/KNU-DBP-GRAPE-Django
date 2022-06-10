import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu, message, Checkbox } from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import { Link } from 'react-router-dom';
import Bottom from "./bottom"
import {LayoutOutlined, FunnelPlotOutlined, GlobalOutlined, StarOutlined} from '@ant-design/icons'


function Login(){

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [userLevel, setUserLevel] = useState(0); // 0 로그인 안 함, 1 로그인 함
    const [okLogin, setLogin] = useState(0);

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onChangeId = e => {
        setId(e.target.value)
    };

    const onChangePw = e => {
        setPw(e.target.value)
    };

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }

      const onChangeUserLevel = e => {
        setUserLevel(1)
        console.log(userLevel);
    };

    const [nkey, setNkey] = useState("create");

    function handleChange(key) {
        setNkey(key.key);
      }

          //GET
    const fetchUsers = async () => {
        try {
        setError(null);
        setUsers(null);
        setLoading(true);

        const response = await axios.get(
            'http://127.0.0.1:8000/api/',
            );
        setUsers(response.data);
        } catch (e) {
        setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>; 
    if (error) return <div>에러가 발생했습니다</div>;

    if (!users) return null;


    // POST
    const postUsers = async () => {

        try {
        setError(null);
        setUsers(null);
        setLoading(true);

        axios.post('http://127.0.0.1:8000/api/',{
            title: -1,
            userLevel: 1,
        }).then(function(response){
            window.location.href = "http://localhost:3000/KNU-DBP-Grape";
        });
        } catch (e) {
        setError(e);
        }
        setLoading(false);
    };


    var i = 0;
    function checkLogin(){
        message.loading('로그인 중 입니다.');

        for(i = 0; i < users.length; i++){
            if(users[i].idid == id && users[i].pw == pw){
                axios.post('http://127.0.0.1:8000/api/',{
                    title: users[i].idid,
                    name:  users[i].name,
                    idid:  users[i].idid,
                    pw:  users[i].pw,
                    email:  users[i].email,
                    addr:  users[i].addr,
                    musical: users[i].musical,
                    date: users[i].date,
                    seat: users[i].seat,
                    userLevel: 1,
        }).then(function(response){
            window.location.href = "http://localhost:3000/KNU-DBP-Grape";
        });
        setLogin(1);
            }

            if(i == users.length-1){
                if(okLogin == 0){
                    message.error('다시 로그인 해주세요.');
                }
            }

        }
    }

    return(
        <div>
            <div className = "body">
            <Link to="/KNU-DBP-Grape"><img src = {logo} style = {{width: "187.5px", height: "75px", marginTop: "25px", position:"absolute", }}/></Link>
                <Input className="input" style = {{width: "700px", height: "20px", marginTop: "55px", marginLeft: "210px", position:"absolute", fontSize: "20px", borderColor: "#5A4968"
            , borderWidth: "0 0 2px", outline: "0"}}/>
                <Link to="/KNU-DBP-Grape/login"><b style={{fontSize: "15px", marginLeft: "950px", marginTop: "55px", position:"absolute", color: "black"}}> 로그인 </b></Link>
                <b style={{fontSize: "15px", marginLeft: "1015px", marginTop: "54px", position:"absolute",}}>|</b>
                <Link to="/KNU-DBP-Grape/new"><b style={{fontSize: "15px", marginLeft: "1030px", marginTop: "55px", position:"absolute", color: "black"}}> 회원가입 </b></Link>
                <br/><br/><br/><br/><br/>

                <Menu mode="horizontal" style={{width: "1140px", borderColor: "#DADADA",  borderWidth: "0 0 4px", fontFamily: "HSSSaemaul", fontSize: "17px", color: "#626262"}}
                onClick={handleChange} >
                    <Link to="/KNU-DBP-Grape">
                    <Menu.Item key="create" icon={<LayoutOutlined />} style={{marginLeft:"50px", marginRight: "120px", borderWidth: "0 0 4px", color: "#626262"}}>
                    창작 뮤지컬
                    </Menu.Item>
                    </Link>
                    <Menu.Item key="ricens" icon={<FunnelPlotOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    라이센스 뮤지컬
                    </Menu.Item>
                    <Menu.Item key="korea" icon={<GlobalOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    내한 뮤지컬
                    </Menu.Item>
                    <Menu.Item key="concert" icon={<StarOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    콘서트 / 강연
                    </Menu.Item>
                </Menu>

                <b style = {{paddingTop: "70px", fontSize: "35px", paddingLeft: "390px", position:"absolute"}}>Login</b>

                <div style = {{paddingLeft: "390px", paddingTop: "140px"}}>
                <Input placeholder="아이디"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangeId}/>
                </div>
                <div style = {{paddingLeft: "390px", paddingTop: "10px"}}>
                <Input.Password placeholder="비밀번호"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangePw}/>
                </div>

                <div style = {{paddingLeft: "390px", paddingTop: "10px", position:"absolute"}}>
                <Checkbox onChange={onChange}>자동로그인</Checkbox>
                </div>

                <div style = {{paddingLeft: "510px", paddingTop: "10px"}}>
                <Checkbox onChange={onChange}>아이디저장</Checkbox>
                </div>

                <Button style = {{marginLeft: "390px", marginTop: "10px", width: "350px", height: "50px", backgroundColor: '#5B3291', color: "white"
            , fontSize: "17px"}} onClick={checkLogin}>로그인</Button>

            <div style = {{backgroundColor: '#C4C4C4', width: '350px', height: '5px', marginTop: "40px", marginLeft: "390px"}}></div>
            <b style = {{ paddingTop: "5px", marginLeft: "390px", position:"absolute"}}>아이디/비밀번호 찾기 | </b>
            <Link to="/KNU-DBP-Grape/new">
            <b style = {{ paddingTop: "5px", marginLeft: "540px", position:"absolute", color: "black"}}>회원가입 </b>
            </Link>


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>

            <Bottom/>
        </div>
    );
}

export default Login;

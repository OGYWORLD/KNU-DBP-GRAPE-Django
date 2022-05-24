import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu, Carousel, Steps } from 'antd'
import logo from "../image/logo.png"
import grape from "../image/only_grape.png"
import "../css/homepage.css"
import { Link } from 'react-router-dom';
import {EditOutlined,LayoutOutlined, FunnelPlotOutlined, GlobalOutlined, StarOutlined, InfoCircleOutlined, CheckCircleOutlined} from '@ant-design/icons'
import Bottom from "./bottom"

function FinNew(){

    const { Step } = Steps;

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [ad, setAd] = useState("");
    const [email, setEmail] = useState("");
    const [nkey, setNkey] = useState("create");

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
                title: id,
                name: name,
                idid: id,
                pw: pw,
                email: email,
                addr: ad,
                userLevel: 1,
            }).then(function(response){
                window.location.href = "http://localhost:3000/KNU-DBP-Grape";
            });
            } catch (e) {
            setError(e);
            }
            setLoading(false);
        };


    return(
        <div>
            <div className = "body">
            <Link to="/KNU-DBP-Grape"><img src = {logo} style = {{width: "187.5px", height: "75px", marginTop: "25px", position:"absolute", }}/></Link>
                <Input className="input" style = {{width: "700px", height: "20px", marginTop: "55px", marginLeft: "210px", position:"absolute", fontSize: "20px", borderColor: "#5A4968"
            , borderWidth: "0 0 2px", outline: "0"}}/>
            {
                (users[users.length-1].userLevel != 1) &&
                (<>
                <Link to="/KNU-DBP-Grape/login"><b style={{fontSize: "15px", marginLeft: "950px", marginTop: "55px", position:"absolute", color: "black"}}> 로그인 </b></Link>
                <b style={{fontSize: "15px", marginLeft: "1015px", marginTop: "54px", position:"absolute",}}>|</b>
                <Link to="/KNU-DBP-Grape/new"><b style={{fontSize: "15px", marginLeft: "1030px", marginTop: "55px", position:"absolute", color: "black"}}> 회원가입 </b></Link>
                </>)
            }

            {
                (users[users.length-1].userLevel == 1) &&
                (<>
                <b style={{fontSize: "15px", marginLeft: "950px", marginTop: "30px", position:"absolute", color: "#8B64BE"}}><CheckCircleOutlined /> 안녕하세요 {users[users.length-1].name}님!</b>
                <Link to="/KNU-DBP-Grape/mypage"><b style={{fontSize: "15px", marginLeft: "950px", marginTop: "55px", position:"absolute", color: "black"}}> 마이페이지 </b></Link>
                <b style={{fontSize: "15px", marginLeft: "1035px", marginTop: "54px", position:"absolute",}}>|</b>
                <Link to="/KNU-DBP-Grape"><b style={{fontSize: "15px", marginLeft: "1050px", marginTop: "55px", position:"absolute", color: "black"}} onClick={ () => {postUsers()} }> 로그아웃 </b></Link>
                </>)
            }
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


            <br/><br/><br/><br/><br/><br/>

            <img src = {grape} style = {{height: "200px", marginLeft: "500px", position:"absolute", }}/>
            <b style={{fontSize: "25px", position:"absolute", marginTop: "300px", marginLeft: "400px", color: "#612EA4"}}>{users[users.length-1].name}</b>
            <p style={{fontSize: "25px", position:"absolute", marginTop: "300px", marginLeft: "480px"}}>님! 가입을 축하드립니다!</p>
            <p style={{fontSize: "25px", position:"absolute", marginTop: "350px", marginLeft: "330px"}}>포도알과 함께 즐거운 공연 관람 시작해봐요!</p>
            <Link to="/KNU-DBP-Grape"><Button style={{position:"absolute", marginTop: "430px", marginLeft: "480px", backgroundColor: '#5B3291', color: "white", borderRadius: "10px"}}><b>홈 화면으로 돌아가기</b></Button></Link>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Bottom/>
        </div>
    );
}

export default FinNew;

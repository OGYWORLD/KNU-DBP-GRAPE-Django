import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Card, Tabs, Menu, Button, message} from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import { Link } from 'react-router-dom';
import {LayoutOutlined, FunnelPlotOutlined, GlobalOutlined, StarOutlined, CaretLeftOutlined, CaretRightOutlined, CheckCircleOutlined, ContactsOutlined, GiftOutlined} from '@ant-design/icons'
import Bottom from "./bottom"
import grape from "../image/only_grape.png"

function Mio(){

    const [users, setUsers] = useState(null);
    const [users2, setUsers2] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [nkey, setNkey] = useState("create");

    const [seat, setSeat] = useState("");

    function handleChange(key) {
        setNkey(key.key);
      }

      const { TabPane } = Tabs;

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

        const fetchUsersMio = async () => {
            try {
            setError(null);
            setUsers(null);
            setLoading(true);
    
            const response = await axios.get(
                'http://127.0.0.1:8001/api/',
                );
            setUsers2(response.data);
            } catch (e) {
            setError(e);
            }
            setLoading(false);
        };
    
        useEffect(() => {
            fetchUsersMio();
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
                userLevel: 0,
            }).then(function(response){
                window.location.href = "http://localhost:3000/KNU-DBP-Grape/mypage";
            });
            } catch (e) {
            setError(e);
            }
            setLoading(false);
        };

        const postUsersCancle = async () => {

            try {
            setError(null);
            setUsers(null);
            setLoading(true);

            axios.post('http://127.0.0.1:8000/api/',{
                title: users[users.length-1].idid,
                name:  users[users.length-1].name,
                idid:  users[users.length-1].idid,
                pw:  users[users.length-1].pw,
                email:  users[users.length-1].email,
                addr:  users[users.length-1].addr,
                musical: 0,
                date: 0,
                seat: 0,
                userLevel: 1,
            }).then(function(response){
                message.info('취소되었습니다.');
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

                <br/><br/><br/>

                <img src = {grape} style = {{height: "50px", marginLeft: "0px", position:"absolute", }}/>
                <b style={{fontSize: "23px", marginLeft: "50px", marginTop: "10px", position:"absolute",}}>{users[users.length-1].name}님의 마이페이지</b>
                <b></b>
                <div style = {{backgroundColor: '#A69BAE', width: '1140px', height: '7px', marginTop: "70px", position:"absolute"}}></div>
                <Card title={<b><ContactsOutlined /> 개인정보</b>} style = {{marginTop: "100px", position:"absolute", width: '1140px'}}>
                        <Card.Grid><b style={{marginRight: "20px"}}>이름</b> {users[users.length-1].name}</Card.Grid>
                        <Card.Grid><b style={{marginRight: "20px"}}>아이디</b> {users[users.length-1].idid}</Card.Grid>
                        <Card.Grid><b style={{marginRight: "20px"}}>이메일</b> {users[users.length-1].email}</Card.Grid>
                        <Card.Grid><b style={{marginRight: "20px"}}>주소</b> {users[users.length-1].addr}</Card.Grid>
                        <Card.Grid><b style={{marginRight: "20px"}}>등급</b> Gold</Card.Grid>
                        <Card.Grid><b style={{marginRight: "20px"}}>가입</b> 포도알 실버회원</Card.Grid>
                </Card>

                <Card title={<b><GiftOutlined /> 나의 공연 예매 내역</b>} style={{ width: "1140px", marginTop: "350px" }}>
                    {
                        (users[users.length-1].musical == 0) &&
                        (<p>예매내역이 없습니다.</p>)
                    }

                    {
                        (users[users.length-1].musical != 0) &&
                        (
                        <>
                            <p style={{fontSize: "15px"}}>{users[users.length-1].musical} {users[users.length-1].date} {users[users.length-1].seat} </p>
                        </>
                        )
                    }
                </Card>
                
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Bottom/>
        </div>
    );
}

export default Mio;

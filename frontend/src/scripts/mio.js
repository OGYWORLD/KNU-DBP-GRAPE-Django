import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Card, Tabs, Menu, Descriptions, Checkbox, notification, Button, Modal, Tooltip, message} from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import { Link } from 'react-router-dom';
import {LayoutOutlined, FunnelPlotOutlined, GlobalOutlined, StarOutlined, CaretLeftOutlined, CaretRightOutlined, CheckCircleOutlined, PlusCircleOutlined} from '@ant-design/icons'
import Bottom from "./bottom"
import mio from "../image/ad.jpg"
import mio_notice1 from "../image/mio_notice1.jpg"
import mio_notice2 from "../image/mio_notice2.jpg"
import mio_sale1 from "../image/mio_sale1.jpg"
import mio_sale2 from "../image/mio_sale2.jpg"
import mio_sale3 from "../image/mio_sale3.jpg"
import mio_sale4 from "../image/mio_sale4.jpg"
import mio_sale5 from "../image/mio_sale5.jpg"
import mio_cast from "../image/mio_cast.jpg"


function Mio(){

    const [checkNum, setCheckNum] = useState(0);
    const [least, setLeast] = useState(0);

    const [a1, setA1] = useState(0);
    const [a2, setA2] = useState(0);
    const [a3, setA3] = useState(0);
    const [a4, setA4] = useState(0);
    const [count, setCount] = useState(0);

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const [users, setUsers] = useState(null);
    const [seat, setSeat] = useState(null);
    
    const [loading2, setLoading2] = useState(false);
    const [error2, setError2] = useState(null);


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [nkey, setNkey] = useState("create");
    const [bottomKey, setBottomKey] = useState(1);
    const [dateCast, setDateCast] = useState(0);
    const [seatNum, setSeatNum] = useState("");

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

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
    

        //GET
        const fetchUsersMio = async () => {
            try {
            setError2(null);
            setSeat(null);
            setLoading2(true);
            
            const response = await axios.get(
                'http://127.0.0.1:8001/api/',
                );
            setSeat(response.data);
            } catch (e) {
            setError2(e);
            }
            setLoading2(false);
            };
            
            
            useEffect(() => {
                fetchUsersMio();
            }, []);
            
            
            if (loading2) return <div>로딩중..</div>; 
            if (error2) return <div>에러가 발생했습니다</div>;
            
            if (!seat) return null; 

    // POST
    const postUsers = async () => {

    try {
    setError(null);
    setUsers(null);
    setLoading(true);

    axios.post('http://127.0.0.1:8000/api/',{
        title: users[users.length-1].id,
        name: users[users.length-1].name,
        idid: users[users.length-1].idid,
        pw: users[users.length-1].pw,
        email: users[users.length-1].email,
        addr: users[users.length-1].addr,
        userLevel: 1,
        musical: "미오 프라텔로",
        date: "2022년 5월 29일 1회차 14:00 공연",
        seat: seatNum,
    }).then(function(response){
        message.info('예매되었습니다.');
    });
    } catch (e) {
    setError(e);
    }
    setLoading(false);
    };

    const postUsersSeat = async () => {

        try {
        setError(null);
        setUsers(null);
        setLoading(true);
    
        axios.post('http://127.0.0.1:8001/api/',{
            a1: a1,
            a2: a2,
            a3: a3,
            a4: a4,
            count: count,
            
        }).then(function(response){
            window.location.href = "http://localhost:3000/KNU-DBP-Grape/mypage";
            message.info('예매되었습니다.');
        });
        } catch (e) {
        setError(e);
        }
        setLoading(false);
        };


        // POST
        const postUsersLogout = async () => {

            try {
            setError(null);
            setUsers(null);
            setLoading(true);
    
            axios.post('http://127.0.0.1:8000/api/',{
                title: -1,
                userLevel: 0,
            }).then(function(response){
                window.location.href = "http://localhost:3000/KNU-DBP-Grape";
            });
            } catch (e) {
            setError(e);
            }
            setLoading(false);
        };

    function onChange(e) {
        setCheckNum(1);
      }

    const openNotification = placement => {
        notification.info({
          message: `예매 안내`,
          description:
          <>
            <b style={{color: "#C62323"}}>※예매자는 본페이지 모든 내용을 숙지/동의한 것으로 간주합니다.</b><br/>
            <b>-티켓 예매/수령, 관람연령, 교통, 좌석에 따른 안내 미숙지는 관람자 본인에게 책임이 있으며, 해당 사유로 인한 예매 티켓의 변경/취소/환불은 불가합니다.</b>
            <br/><br/>
            <li style={{color: "#C62323"}}>※만 13세 이상 관람가로, 입장연령미만은 티켓소지/보호자동반여부와 관계없이 객석입장이 불가합니다.</li>
            <li>(2022년 기준 2009년생 포함 이전 출생자)</li>
            <li>-티켓 수령 시 생년월일 확인이 가능한 증빙서류(건강보험증, 여권, 주민등록등본 등)를 반드시 지참하시기 바랍니다.</li>
            <br/><br/>
            <li>※할인 받은 내역이 있으신 경우, 증빙서류필참으로 미지참시 정가차액지불 하셔야합니다.</li>
            <br/><br/>
            <li style={{color: "#C62323"}}>※공연 시작 후에는 예매한 좌석으로 입장이 불가합니다.</li>
            <li>지연 입장은 지정된 ‘지연 입장 시간’에 예매하신 좌석이 아닌 ‘지연 입장 석’에서 관람하게 됩니다. ‘지연 입장 시간’이 지나거나 
                ‘매진’으로 지연석 확보가 어려울 경우 관람이 불가할 수 있습니다. ‘매진’의 경우 별도의 안내가 없을 수 있는 점 참고 부탁드리며, 이로 인한 변경/취소/환불은 불가하니 공연 시작 전까지 입장하여 주시길 바랍니다.</li>
            <br/><br/><br/>
            <li>※본 공연장은 별도의 주차시설이 없습니다. 지역적 특성상 차량 진입 및 주차에 어려움이 있으니, 가급적 대중교통을 이용 부탁드립니다.</li>
            <br/><br/><br/>
            <hr/>
            
            <Checkbox onClick={onChange} style={{marginLeft: "500px"}}>하루동안 보지 않기</Checkbox>
          </>,
          placement,
          duration: 0,
          style : { width: "750px", height: "700px"},
        });
      };

    function handleDateCast29() {
        setDateCast(29);
    }

    function handleDateCast31() {
        setDateCast(31);
    }

    function handleChange(key) {
        setNkey(key.key);
      }

      const { TabPane } = Tabs;

    function callback(key) {
        setBottomKey(key);
        setCheckNum(key);
    }

    function setSeatNumA1(){
        setSeatNum("A1");
        setA1(1);
        setA2(seat[seat.length-1].a2);
        setA3(seat[seat.length-1].a3);
        setA4(seat[seat.length-1].a4);
        setCount(seat[seat.length-1].count-1);
    }

    function setSeatNumA2(){
        setSeatNum("A2");
        setA2(1);
        setA1(seat[seat.length-1].a1);
        setA3(seat[seat.length-1].a3);
        setA4(seat[seat.length-1].a4);
        setCount(seat[seat.length-1].count-1);

    }

    function setSeatNumA3(){
        setSeatNum("A3");
        setA3(1);
        setA1(seat[seat.length-1].a1);
        setA2(seat[seat.length-1].a2);
        setA4(seat[seat.length-1].a4);
        setCount(seat[seat.length-1].count-1);

    }

    function setSeatNumA4(){
        setSeatNum("A4");
        setA4(1);
        setA1(seat[seat.length-1].a1);
        setA2(seat[seat.length-1].a2);
        setA3(seat[seat.length-1].a3);
        setCount(seat[seat.length-1].count-1);

    }

    function setSeatNumA5(){
        setSeatNum("A5")
    }

    function setSeatNumA6(){
        setSeatNum("A6")
    }

    function setSeatNumA7(){
        setSeatNum("A7")
    }

    function setSeatNumA8(){
        setSeatNum("A8")
    }

    function setSeatNumA9(){
        setSeatNum("A9")
    }

    var i = 0;
    function leastSeat() {
        for(i = 0; i < 4; i++){
            console.log("sdfsd");
            if(seat[seat.length-1].a`i` == 0){
                console.log("sdfsd");
                setLeast(least+1);
            }
        }


    }

    return(
        <div>
            {(checkNum == 0) &&
            (openNotification('top'))}

            <div className = "body">
            {leastSeat}
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
                <Link to="/KNU-DBP-Grape"><b style={{fontSize: "15px", marginLeft: "1050px", marginTop: "55px", position:"absolute", color: "black"}} onClick={ () => {postUsersLogout()} }> 로그아웃 </b></Link>
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

                <b style = {{fontSize: "25px", position:"absolute"}}>[창작] 미오 프라텔로</b>
                <b style = {{fontSize: "15px", color: "#717171", marginLeft: "20px", position:"absolute", marginLeft: "250px", marginTop: "10px"}} >드림아트센터 1관</b>
                <img src = {mio} style = {{width: "280px", position:"absolute", marginTop: "65px"}}/>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "60px"}}>장소</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "90px"}}>드림아트센터 1관</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "130px"}}>공연기간</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "160px"}}>2022.03.08 ~2022.06.19</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "210px"}}>공연시간</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "240px"}}>100분</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "290px"}}>관람연령</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "320px"}}>중학생이상 관람가</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "370px"}}>가격</b>
                <p style = {{fontSize: "15px", position:"absolute", marginLeft: "350px", marginTop: "400px"}}>R석 66,000원 S석 44,000원</p>
                <p style = {{fontSize: "15px", position:"absolute", marginLeft: "350px", marginTop: "423px"}}>R1석 66,000원 S1석 44,000원</p>


                <Card style={{ width: "400px", height: "780px" , marginLeft: "730px", marginTop: "50px", borderRadius: "16px", boxShadow: "1px 1px 1px 2px #D6CDE1"}}>
                    <Button shape="circle" icon={<CaretLeftOutlined />} disabled style={{ position:"absolute"}}/>
                    <b style= {{fontSize: "25px", marginLeft: "150px", position:"absolute"}}>5월</b>
                    <Button shape="circle" icon={<CaretRightOutlined />} disabled style={{marginLeft: "310px", position:"absolute"}}/>

                    <div style={{marginTop: "40px"}}>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "10px", position:"absolute"}}>일</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "60px", position:"absolute"}}>월</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "110px", position:"absolute"}}>화</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "160px", position:"absolute"}}>수</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "210px", position:"absolute"}}>목</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "260px", position:"absolute"}}>금</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "310px", position:"absolute"}}>토</p>
                    </div>

                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "3px", position:"absolute"}} disabled>1</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "53px", position:"absolute"}} disabled>2</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "103px", position:"absolute"}} disabled>3</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "153px", position:"absolute"}} disabled>4</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "203px", position:"absolute"}} disabled>5</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "253px", position:"absolute"}} disabled>6</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "303px", position:"absolute"}} disabled>7</Button>

                    <div style={{marginTop: "100px"}}>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "3px", position:"absolute"}} disabled>8</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "53px", position:"absolute"}} disabled>9</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "103px", position:"absolute"}} disabled>10</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "153px", position:"absolute"}} disabled>11</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "203px", position:"absolute"}} disabled>12</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "253px", position:"absolute"}} disabled>13</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "303px", position:"absolute"}} disabled>14</Button>
                    </div>

                    <div style={{marginTop: "160px"}}>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "3px", position:"absolute"}} disabled>15</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "53px", position:"absolute"}} disabled>16</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "103px", position:"absolute"}} disabled>17</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "153px", position:"absolute"}} disabled>18</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "203px", position:"absolute"}} disabled>19</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "253px", position:"absolute"}} disabled>20</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "303px", position:"absolute"}} disabled>21</Button>
                    </div>

                    <div style={{marginTop: "220px"}}>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "3px", position:"absolute"}} disabled>22</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "53px", position:"absolute"}} disabled>23</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "103px", position:"absolute"}} disabled>24</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "153px", position:"absolute"}} disabled>25</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "203px", position:"absolute"}} disabled>26</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "253px", position:"absolute"}} disabled>27</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "303px", position:"absolute"}} disabled>28</Button>
                    </div>

                    <div style={{marginTop: "280px"}}>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "3px", position:"absolute", background: "#5B3291", color: "white"}} onClick={handleDateCast29}>29</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "53px", position:"absolute"}} disabled>30</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "103px", position:"absolute", background: "#5B3291", color: "white"}} onClick={handleDateCast31}>31</Button>
                    </div>

                    <hr style={{marginTop: "400px"}}/>

                    {   (dateCast == 29) &&
                        (<>
                        <b style={{fontSize: "17px", marginLeft: "5px"}}>회차</b>
                        <Tabs defaultActiveKey="1" type="card" style={{marginLeft: "5px", marginTop: "10px"}}>
                            <TabPane tab="1회 14:00" key="1" style={{marginLeft: "0px", marginTop: "10px"}}>
                            <li style={{marginLeft: "10px"}}>R석: {seat[seat.length-1].count}</li>
                            <hr style={{marginTop: "20px"}}/>
                            <b style={{fontSize: "17px", marginLeft: "5px"}}>캐스트</b>
                            <p style={{fontSize: "15px", marginLeft: "5px", marginTop: "10px"}}>박규원, 성연, 정성일</p>
                            {
                                (users[users.length-1].userLevel == 1) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", color: "white", background: "#5B3291", borderRadius: "16px"}} onClick={showModal}><b>예매하기</b></Button>)
                            }
                            {
                                (users[users.length-1].userLevel == 0) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", borderRadius: "16px"}} onClick={showModal} disabled><b>로그인 후 이용해주세요</b></Button>)
                            }
                            </TabPane>
                            <TabPane tab="2회 18:00" key="2" style={{marginLeft: "0px", marginTop: "10px"}}>
                            <li style={{marginLeft: "10px", }}>R석: 매진</li>
                            <hr style={{marginTop: "20px"}}/>
                            <b style={{fontSize: "17px", marginLeft: "5px"}}>캐스트</b>
                            <p style={{fontSize: "15px", marginLeft: "5px", marginTop: "10px"}}>최석진, 유현석, 정성일</p>
                            {
                                (users[users.length-1].userLevel == 1) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", color: "white", background: "#5B3291", borderRadius: "16px"}}><b>예매하기</b></Button>)
                            }
                            {
                                (users[users.length-1].userLevel == 0) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", borderRadius: "16px"}} onClick={showModal} disabled><b>로그인 후 이용해주세요</b></Button>)
                            }
                            </TabPane>
                        </Tabs>

                        </>) 
                    }

                    {   (dateCast == 31) &&
                        (<>
                        <b style={{fontSize: "17px", marginLeft: "5px"}}>회차</b>
                        <Tabs defaultActiveKey="1" type="card" style={{marginLeft: "5px", marginTop: "10px"}}>
                            <TabPane tab="1회 14:00" key="1" style={{marginLeft: "0px", marginTop: "10px"}}>
                            <li style={{marginLeft: "10px"}}>R석: 13</li>
                            <hr style={{marginTop: "20px"}}/>
                            <b style={{fontSize: "17px", marginLeft: "5px"}}>캐스트</b>
                            <p style={{fontSize: "15px", marginLeft: "5px", marginTop: "10px"}}>이승현, 최호승, 김이담</p>
                            {
                                (users[users.length-1].userLevel == 1) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", color: "white", background: "#5B3291", borderRadius: "16px"}}><b>예매하기</b></Button>)
                            }
                            {
                                (users[users.length-1].userLevel == 0) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", borderRadius: "16px"}} disabled><b>로그인 후 이용해주세요</b></Button>)
                            }
                            </TabPane>
                            <TabPane tab="2회 18:00" key="2" style={{marginLeft: "0px", marginTop: "10px"}}>
                            <li style={{marginLeft: "10px", }}>R석: 21</li>
                            <hr style={{marginTop: "20px"}}/>
                            <b style={{fontSize: "17px", marginLeft: "5px"}}>캐스트</b>
                            <p style={{fontSize: "15px", marginLeft: "5px", marginTop: "10px"}}>김대현, 유현석, 김지온</p>
                            {
                                (users[users.length-1].userLevel == 1) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", color: "white", background: "#5B3291", borderRadius: "16px"}}><b>예매하기</b></Button>)
                            }
                            {
                                (users[users.length-1].userLevel == 0) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", borderRadius: "16px"}} disabled><b>로그인 후 이용해주세요</b></Button>)
                            }
                            </TabPane>
                        </Tabs>

                        </>) 
                    }
                </Card>


                <Tabs defaultActiveKey="1" onChange={callback} style = {{position:"absolute", marginTop: "00px", width: "1140px", borderBottom: "3px"}} size="large">
                    <TabPane tab="공연정보" key="1">

                    <b style = {{fontSize: "20px", marginTop: "40px", position:"absolute"}}>공연시간 정보</b>
                    <li style = {{fontSize: "15px", marginTop: "80px"}}>예매가능시간: 관람 2시간 전까지</li>
                    <li style = {{fontSize: "15px", marginTop: "30px"}}>화,목,금 8시 / 수 4시, 8시 / 토 3시, 7시 / 일 및 공휴일 2시, 6시 (월요일 공연 없음)</li>
                    <li style = {{fontSize: "15px", marginTop: "0px"}}>단, 5월 26일(목) 4시, 8시 / 6월 1일(수) 2시, 6시 / 6월 6일(월) 2시, 6시 (6월 7일(화) 쉼)</li>

                    <b style = {{fontSize: "20px", marginTop: "100px", position:"absolute"}}>공지사항</b>
                    <li style = {{fontSize: "15px", marginTop: "140px"}}>* 회차당 예매 매수 제한 : 1개 ID로 회차당 2매까지 예매 가능합니다.</li>
                    <li style = {{fontSize: "15px", marginTop: "0px"}}>* 좌석 운영의 경우 공연시점 정부의 방역 지침에 따라 유동적으로 변경될 수 있습니다.</li>
                    <li style = {{fontSize: "15px", marginTop: "0px"}}>* 포도알을 통한 예매는 전 회차 제한됩니다.</li>
                    
                    <img src = {mio_notice1} style = {{width: "800px", marginTop: "25px", position:"absolute", }}/>
                    <img src = {mio_notice2} style = {{width: "800px", marginTop: "1580px", position:"absolute", }}/>


                <b style = {{fontSize: "20px", marginTop: "3050px", position:"absolute"}}>할인정보</b>
                <img src = {mio_sale1} style = {{width: "800px", marginTop: "3100px", position:"absolute", }}/>
                <img src = {mio_sale2} style = {{width: "800px", marginTop: "3920px", position:"absolute", }}/>
                <img src = {mio_sale3} style = {{width: "800px", marginTop: "4740px", position:"absolute", }}/>
                <img src = {mio_sale4} style = {{width: "800px", marginTop: "5580px", position:"absolute", }}/>
                <img src = {mio_sale5} style = {{width: "800px", marginTop: "6800px", position:"absolute", }}/>


                <b style = {{fontSize: "20px", marginTop: "8400px", position:"absolute"}}>공연상세 / 캐스팅일정</b>
                <img src = {mio_cast} style = {{width: "800px", marginTop: "8450px", position:"absolute"}}/>
                    </TabPane>
                

                    <TabPane tab="부가정보" key="2">
                    <b style = {{fontSize: "20px", marginTop: "40px", position:"absolute"}}>기획사 정보</b>
                    <li style = {{fontSize: "15px", marginTop: "80px"}}>제작: (주)콘텐츠플래닝</li>
                    <li style = {{fontSize: "15px", marginTop: "0px"}}>홍보마케팅: 탄탄대로</li>
                    <li style = {{fontSize: "15px", marginTop: "0px"}}>티켓: 클립서비스 1577-3363</li>

                    <b style = {{fontSize: "20px", marginTop: "100px", position:"absolute"}}>상품관련 정보</b>
                    

                    <Descriptions title="" bordered style={{marginTop: "150px"}}>
                        <Descriptions.Item label="주최/기획">	주식회사 콘텐츠플래닝</Descriptions.Item>
                        <Descriptions.Item label="고객문의">1234-5678</Descriptions.Item>
                        <Descriptions.Item label="공연시간">100분</Descriptions.Item>
                        <Descriptions.Item label="관람등급">중학생이상 관람가</Descriptions.Item>
                        <Descriptions.Item label="주연" span={2}>
                        이승현, 김대현, 최석진, 박규원, 김순택, 최호승, 유현석, 성연, 정성일, 김지온, 김이담, 김준영
                        </Descriptions.Item>
                        <Descriptions.Item label="공연장소">드림아트센터 1관</Descriptions.Item>
                        <Descriptions.Item label="예매수수료">장당 1,000원</Descriptions.Item>
                        <Descriptions.Item label="배송료">현장수령 무료 (배송불가)</Descriptions.Item>
                        <Descriptions.Item label="유효기간/이용조건" span={3}>
                        2022.03.08~2022.06.19 예매한 공연 날짜, 회차에 한해 이용가능
                        </Descriptions.Item>
                        <Descriptions.Item label="예매취소조건" span={3}>
                        취소일자에 따라서 아래와 같이 취소수수료가 부과됩니다.예매 일 기준보다 관람일 기준이 우선 적용됩니다. 단, 예매 당일 밤 12시 이전 취소 시에는 취소수수료가 없으며, 예매 수수료도 환불됩니다.(취소기한 내에 한함)
                        <br/><br/>
                        <Descriptions title="" layout="vertical" bordered>
                            <Descriptions.Item label="취소일">
                                예매 후 7일 이내<br/>
                                예매 후 8일~관람일 10일전까지<br/>
                                관람일 9일전~7일전까지<br/>
                                관람일 6일전~3일전까지<br/>
                                관람일 2일전~1일전까지<br/>
                            </Descriptions.Item>
                            <Descriptions.Item label="취소수수료">
                                없음<br/>
                                장당 4,000원(티켓금액의 10%한도)<br/>
                                티켓금액의 10%<br/>
                                티켓금액의 20%<br/>
                                티켓금액의 30%<br/>
                            </Descriptions.Item>
                        </Descriptions>
                        </Descriptions.Item>
                        
                        <Descriptions.Item label="취소환불방법" span={3}>
                        - 예매/취소내역에서 직접 취소 또는 고객센터 (1234-5678)를 통해서 예매를 취소할 수 있습니다.<br/>
                        - 티켓이 배송된 이후에는 인터넷 취소가 안되며, 취소마감 시간 이전에 티켓이 포도알 티켓 고객센터로 반송되어야 취소 가능합니다. 취소수수료는 도착일자 기준으로 부과되며, 배송료는 환불되지 않습니다.
                        </Descriptions.Item>
                    </Descriptions>

                    </TabPane>
                </Tabs>

                <Modal title="예매페이지" visible={isModalVisible} onOk={ () => {postUsers(); postUsersSeat()} } onCancel={handleCancel} bodyStyle={{height: 1000}} width={1000} okText="예매하기" cancelText="취소">
                    <b style={{fontSize: "20px"}}>미오 프라텔로 2022년 5월 29일 1회차 14:00 공연</b>

                    <Tooltip placement="bottom" title={<b>
                        <div style = {{backgroundColor: '#5B3291', width: '20px', height: '20px', marginTop: "0px", position:"absolute", paddingRight: "20px"}}></div>
                        ..... R석 66000원<br/>
                        <div style = {{backgroundColor: '#32913B', width: '20px', height: '20px', marginTop: "0px", position:"absolute", paddingRight: "20px"}}></div>
                        ..... S석 44000원
                        </b>}>
                        <Button style={{marginLeft: "20px"}}>좌석 정보</Button>
                    </Tooltip>

                    <Card style={{ width: 950, marginTop: "50px", height: "700px", backgroundColor: '#76707D'}}>
                        <b style= {{fontSize: "50px", color: "white", marginLeft: "370px", marginBottom: "20px"}}>STAGE</b>
                        <hr/>
                        
                        <div style={{marginTop: "20px", position:"absolute", marginLeft: "0px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "10px"}}>A</b>
                        {
                            (seat[seat.length-1].a1 == 0) &&
                            (<Button style={{width: "5px", backgroundColor: "#5B3291"}} onClick={setSeatNumA1}> </Button>)
                        }
                        {
                            (seat[seat.length-1].a1 == 1) &&
                            (<Button style={{width: "5px", backgroundColor: "white"}} onClick={setSeatNumA1} disabled> </Button>)
                        }

                        {
                            (seat[seat.length-1].a2 == 0) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor: "#5B3291"}} onClick={setSeatNumA2}> </Button>)
                        }
                        {
                            (seat[seat.length-1].a2 == 1) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} onClick={setSeatNumA2} disabled> </Button>)
                        }

                        {
                            (seat[seat.length-1].a3 == 0) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor: "#5B3291"}} onClick={setSeatNumA3}> </Button>)
                        }
                        {
                            (seat[seat.length-1].a3 == 1) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor:"white"}} onClick={setSeatNumA3} disabled> </Button>)
                        }

                        {
                            (seat[seat.length-1].a4 == 0) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor: "#5B3291"}} onClick={setSeatNumA4}> </Button>)
                        }
                        {
                            (seat[seat.length-1].a4 == 1) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} onClick={setSeatNumA4} disabled> </Button>)
                        }

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>



                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "2px"}}>B</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "2px"}}>C</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "0px"}}>D</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "4px"}}>E</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "4px"}}>F</b>

                        <Button style={{width: "5px", marginLeft: "218px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "0px"}}>G</b>

                        <Button style={{width: "5px", marginLeft: "137px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "0px"}}>H</b>

                        <Button style={{width: "5px", marginLeft: "137px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "8px"}}>I</b>

                        <Button style={{width: "5px", marginLeft: "137px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "6px"}}>J</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "2px"}}>K</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "5px"}}>L</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        </div>
                    </Card>
                    <hr/>
                    <Card style={{ width: 950, marginTop: "0px", height: "170px", backgroundColor: '#383240'}}>
                    <b style={{fontSize: "20px", color: "#E6D0FF", zIndex: "2"}}><PlusCircleOutlined /> 선택된 좌석</b>
                    <br/><br/>
                    {
                        (seatNum == "A1") && 
                        (<b style={{fontSize: "20px", marginLeft: "10px",  color: "white"}}>A열 1번 좌석</b>)
                    }

                    {
                        (seatNum == "A2") && 
                        (<b style={{fontSize: "20px", marginLeft: "10px",  color: "white"}}>A열 2번 좌석</b>)
                    }

                    {
                        (seatNum == "A3") && 
                        (<b style={{fontSize: "20px", marginLeft: "10px",  color: "white"}}>A열 3번 좌석</b>)
                    }

                    {
                        (seatNum == "A4") && 
                        (<b style={{fontSize: "20px", marginLeft: "10px",  color: "white"}}>A열 4번 좌석</b>)
                    }
                    </Card>
                </Modal>
                            
            </div>
            {
                (bottomKey=="1") &&
                ( <div style={{marginTop: "16500px"}}>
                <Bottom/>
                </div>)
            }

            {
                (bottomKey=="2") &&
                ( <div style={{marginTop: "1400px"}}>
                <Bottom/>
                </div>)
            }
        </div>
    );
}

export default Mio;

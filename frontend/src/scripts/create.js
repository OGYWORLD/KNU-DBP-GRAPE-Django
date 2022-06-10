import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu, Carousel, Tooltip } from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import {CaretUpOutlined, CaretDownOutlined, LineChartOutlined, LayoutOutlined, DollarOutlined, CalendarOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import finalT from "../image/Final_carousel.png"
import mio from "../image/ad.PNG"
import dia from "../image/ed.PNG"
import van from "../image/van.jpg"
import death from "../image/death.PNG"
import mia from "../image/mia.PNG"
import stone from "../image/stone.png"
import gloomy from "../image/gloomy.png"
import miaF from "../image/miaF.png"
import ban from "../image/ban.jpg"
import sale from "../image/sale.jpg"
import bisue from "../image/sale_bisue.jpg"
import nansae from "../image/sale_nansae.jpg"
import Yujin from "../image/Yujin.jpg"
import bunge from "../image/bunge.jpg"
import glow from "../image/glow.gif"

function Create(){

    const now = new Date();

    const contentStyle = {
        height: '300px',
        color: '#fff',
        lineHeight: '160px',
        background: '#DED6E4',
      };

    return(
        <div>
            <Carousel autoplay style={{width: "1140px", }}>
                    <div>
                    <h3 style={contentStyle}>
                    <img src={finalT}/>
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                    <img src={stone}/>
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                    <img src={gloomy}/>
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                    <img src={miaF}/>
                    </h3>
                    </div>
                </Carousel>

            <br/><br/>
            <b style={{fontSize: "23px", marginLeft: "15px"}}><LayoutOutlined/> 창작 뮤지컬</b>
            <div style = {{backgroundColor: '#A69BAE', width: '1140px', height: '10px'}}></div>
            <div style = {{backgroundColor: '#5A4968', width: '1140px', height: '5px'}}></div>
            <br/>
            <b style={{fontSize: "20px", marginLeft: "15px"}}><LineChartOutlined /> 주간 랭킹</b>
            <b style={{fontSize: "17px", marginLeft: "15px", color: "#777777"}}>{now.getFullYear()}년 {now.getMonth()+1}월 {now.getDate()}일</b>
            <br/>
            <div style = {{backgroundColor: '#EBEBEB', width: '1140px', height: '5px', marginTop: "10px"}}></div>
            <b style={{fontSize: "25px", marginTop: "120px", marginLeft: "20px", position:"absolute"}}>1</b>
            <b style={{fontSize: "23px", marginTop: "162px", marginLeft: "7px", position:"absolute", color: "#C83D3D"}}><CaretUpOutlined /></b>
            <b style={{fontSize: "15px", marginTop: "168px", marginLeft: "33px", position:"absolute"}}>3</b>

            {/*주간 랭킹 1위*/}
            <Link to="/KNU-DBP-Grape/mio">
            <Tooltip title="미오 프라텔로 (드림아트센터 1관)">
            <img src={mio} style={{height: "300px", marginLeft: "80px", marginTop: "40px", position:"absolute"}}/>
            </Tooltip>
            </Link>

            <b style={{fontSize: "20px", marginTop: "30px", marginLeft: "340px", position:"absolute", color: "#434343"}}>[창작뮤지컬] 미오 프라텔로</b>
            <b style={{fontSize: "17px", marginTop: "70px", marginLeft: "340px", position:"absolute", color: "#737373"}}>드림아트센터 1관 2022.03.08 ~ 2022.06.19</b>
            <div style = {{backgroundColor: '#666666', width: '800px', height: '2px', marginTop: "110px", position:"absolute", marginLeft:"340px"}}></div>


            {/*주간 랭킹 2위*/}
            <b style={{fontSize: "25px", marginTop: "190px", marginLeft: "340px", position:"absolute"}}>2</b>
            <b style={{fontSize: "23px", marginTop: "222px", marginLeft: "327px", position:"absolute", color: "#C83D3D"}}><CaretUpOutlined /></b>
            <b style={{fontSize: "15px", marginTop: "228px", marginLeft: "353px", position:"absolute"}}>3</b>

            <Tooltip title="번지점프를 하다 (홍익대 대학로 아트센터 대극장)">
            <img src={bunge} style={{height: "180px", marginLeft: "380px", marginTop: "140px", position:"absolute"}}/>
            </Tooltip>
            <p style={{fontSize:"13px", marginLeft: "378px", marginTop: "330px", position:"absolute"}}>[창작] 번지점프를 하다</p>


            {/*주간 랭킹 3위*/}
            <b style={{fontSize: "25px", marginTop: "190px", marginLeft: "550px", position:"absolute"}}>3</b>
            <b style={{fontSize: "23px", marginTop: "222px", marginLeft: "537px", position:"absolute", color: "#3D53C8"}}><CaretDownOutlined /></b>
            <b style={{fontSize: "15px", marginTop: "228px", marginLeft: "563px", position:"absolute"}}>1</b>

            <Tooltip title="유진과 유진 (대학로 자유극장)">
            <img src={Yujin} style={{height: "180px", marginLeft: "590px", marginTop: "140px", position:"absolute"}}/>
            </Tooltip>
            <p style={{fontSize:"13px", marginLeft: "600px", marginTop: "330px", position:"absolute"}}>[창작] 유진과 유진</p>


            {/*주간 랭킹 4위*/}
            <b style={{fontSize: "25px", marginTop: "190px", marginLeft: "770px", position:"absolute"}}>4</b>
            <b style={{fontSize: "23px", marginTop: "222px", marginLeft: "747px", position:"absolute", color: "#C83D3D"}}><CaretUpOutlined /></b>
            <b style={{fontSize: "15px", marginTop: "228px", marginLeft: "773px", position:"absolute"}}>5</b>

            <Tooltip title="사의 찬미 (TOM 1관)">
            <img src={death} style={{height: "180px", marginLeft: "800px", marginTop: "140px", position:"absolute"}}/>
            </Tooltip>
            <p style={{fontSize:"13px", marginLeft: "820px", marginTop: "330px", position:"absolute"}}>[창작] 사의 찬미</p>

             {/*주간 랭킹 5위*/}
             <b style={{fontSize: "25px", marginTop: "190px", marginLeft: "970px", position:"absolute"}}>5</b>
            <b style={{fontSize: "23px", marginTop: "222px", marginLeft: "957px", position:"absolute", color: "#3D53C8"}}><CaretDownOutlined /></b>
            <b style={{fontSize: "15px", marginTop: "228px", marginLeft: "983px", position:"absolute"}}>2</b>

            <Tooltip title="미아 파밀리아 (예스24스테이지 2관)">
            <img src={mia} style={{height: "180px", marginLeft: "1010px", marginTop: "140px", position:"absolute"}}/>
            </Tooltip>
            <p style={{fontSize:"13px", marginLeft: "1016px", marginTop: "330px", position:"absolute"}}>[창작] 미아 파밀리아</p>

            <div style = {{backgroundColor: '#EBEBEB', width: '1140px', height: '5px', marginTop: "380px"}}></div>
            <img src={ban} style={{height: "77px", marginTop: "20px", position:"absolute"}}/>


            {/*포도알 할인*/}
            <b style={{fontSize: "20px", marginLeft: "15px", marginTop: "160px", position:"absolute"}}><DollarOutlined /> 주간 포도알 할인</b>
            <b style={{fontSize: "23px", marginLeft: "15px", color: "#154514", marginTop: "228px", position:"absolute"}}>
            <CalendarOutlined /> {now.getFullYear()}년 {now.getMonth()+1}월 {(parseInt((now.getDate()/7)))+1}째주</b>
            <img src={sale} style={{height: "77px", marginTop: "210px", position:"absolute", zIndex: "-1"}}/>
            <br/>
            <div style = {{backgroundColor: '#EBEBEB', width: '1140px', height: '5px', marginTop: "180px"}}></div>
            <div style = {{backgroundColor: '#EBEBEB', width: '1140px', height: '5px', marginTop: "83px"}}></div>

            <Tooltip title="비더슈탄트 (드림아트센터 3관)">
            <img src={bisue} style={{width: "1140px", marginTop: "30px", position:"absolute"}}/>
            </Tooltip>

            <Tooltip title="난세 (서경대학교 공연예술센터 스콘 2관)">
            <img src={nansae} style={{width: "1140px", marginTop: "260px", position:"absolute"}}/>
            </Tooltip>
            



            


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default Create;
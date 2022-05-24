import React, { useState, useEffect, Component } from 'react'
import gray from "../image/logo_gray.png"
import "../css/homepage.css"

function Bottom(){
    return(
        <>
            <div style = {{backgroundColor: '#C4C4C4', width: '100%', height: '300px', marginTop: "10px", position:"absolute", paddingLeft: "0px", zIndex: "-1"}}></div>
            <div className = "body">
                <img src={gray} style={{height: "100px", marginLeft: "0px", marginTop: "100px", position:"absolute"}}/>
                <p style={{marginLeft: "350px", marginTop: "110px", position:"absolute"}}>춘천캠퍼스 : (24341)강원도 춘천시 강원대학길 1(효자동) 강원대학교 춘천캠퍼스 대표전화: 033-250-6114팩스 033-251-9556</p>
                <p style={{marginLeft: "350px", marginTop: "130px", position:"absolute"}}>삼척캠퍼스 : (25913)강원도 삼척시 중앙로 346 강원대학교 삼척캠퍼스 대표전화: 033-570-6114 팩스 033-572-8620</p>
                <p style={{marginLeft: "350px", marginTop: "150px", position:"absolute"}}>도계캠퍼스 : (25949)강원도 삼척시 도계읍 황조길 346 강원대학교 도계캠퍼스 대표전화: 033-540-3114~5팩스 033-540-3219</p>
                <p style={{marginLeft: "350px", marginTop: "170px", position:"absolute"}}>COPYRIGHT (C) 2017 BY KANGWON NATIONAL UNIVERSITY. ALL RIGHTS RESERVED.</p>
            </div>
            
        </>
    );
}

export default Bottom;
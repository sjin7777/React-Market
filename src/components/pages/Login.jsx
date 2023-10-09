import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import Header from "../module/Header";
import { Button } from "@mui/material";
import { FormControl } from '@mui/base';
import { userSelect } from "../data/User";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSelect: (userId, userPwd) => dispatch(userSelect(userId, userPwd))
    }
}



function Login({userSelect}) {
    const navigate = useNavigate();
    const [ userId, setUserId ] = useState("");
    const [ userPwd, setUserPwd ] = useState("");

    const handleChangeId = (event) => setUserId(event.target.value); 
    const handleChangePwd = (event) => setUserPwd(event.target.value);
    
    const dataUserAll = useSelector((state) => state.userAll);

    const handleClick = () => {

        dataUserAll.map((data) => {
            if(data.userId === userId) {
                if(data.userPwd === userPwd) {
                    userSelect(userId, userPwd);
                    return navigate("/", userId);
                } else {
                    return console.log('비밀번호가 일치하지 않습니다')
                }
            } else {
                return console.log('아이디가 존재하지 않습니다')
            }
        });
    }

    return(
        <div>
            <Header userId={userId} />
            <h1>로그인</h1>
            <FormControl >
                <div>
                    <label>아이디</label>
                    <input value={userId} onChange={handleChangeId} placeholder="아이디를 입력해주세요" />
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={userPwd} onChange={handleChangePwd} placeholder="패스워드를 입력해주세요" />
                </div>
                <Button onClick={handleClick}>로그인</Button>
            </FormControl>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
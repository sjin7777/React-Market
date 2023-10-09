import { useSelector, useDispatch, connect } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { FormControl } from '@mui/base';
import Header from "../module/Header";
import { userInsert } from "../data/User";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userInsert: (userId, userPwd) => dispatch(userInsert(userId, userPwd))
    }
}

function Join({userInsert}) {
    const navigate = useNavigate();

    const [ userId, setUserId ] = useState("");
    const [ userPwd, setUserPwd ] = useState("");
    const [ userPwdCk, setUserPwdCk ] = useState("");

    const funUserId = (e) => setUserId(e.target.value);
    const funUserPwd = (e) => setUserPwd(e.target.value);
    const funUserPwdCk = (e) => setUserPwdCk(e.target.value);

    const handleClick = () => {
        userInsert(userId, userPwd);
        navigate("/login");
    }

    return (
        <div>
            <Header />
            <h1>회원가입</h1>
            <FormControl required>
                <div>
                    <label>아이디</label>
                    <input value={userId} type="text" onChange={funUserId}/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input value={userPwd} type="password" onChange={funUserPwd}/>
                </div>
                <div>
                    <label>패스워드 확인</label>
                    <input value={userPwdCk} type="password" onChange={funUserPwdCk}/>
                </div>
            </FormControl>
            <Button onClick={handleClick}>가입</Button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Join);
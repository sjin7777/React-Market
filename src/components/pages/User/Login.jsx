import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector, shallowEqual } from "react-redux";

import { UserLogin, UserCk } from "../../data/User";
import { SetToken } from "../../util/token";
import { useRef } from "react";

const ReduxState = (state) => ({
    user: {
        userId: state.userId,
        userPwd: state.userPwd
    },
    token: {
        userId: state.userId,
        userPwd: state.userPwd,
    },
    isToken: state.isToken
})

const ReduxAction = (dispatch) => ({
    UserCk: (userId, userPwd) => {
        dispatch(UserCk(userId, userPwd))
    },
    UserLogin: (userId, userPwd) => {
        dispatch(UserLogin(userId, userPwd))
    },
    SetToken: (userId, userPwd, isToken) => {
        dispatch(SetToken(userId, userPwd, isToken))
    }
})


function Login({UserLogin, UserCk, SetToken}) {
    const navigate = useNavigate();
    const btn = useRef("");
    let isCk = false;
    
    const [ userId, setUserId ] = useState("");
    const [ userPwd, setUserPwd ] = useState("");
    const onUserIdHandler = (e) => setUserId(e.target.value);
    const onUserPwdHandler = (e) => setUserPwd(e.target.value);
    
    const storeMsg = useSelector((state) => ({ msg: state.User.msg}), shallowEqual).msg;
    const msg = String((storeMsg.length === 2) ? storeMsg[1] : storeMsg[0]);

    const onUserCk = (e) => {
        console.log("s")
        UserCk(userId, userPwd);
        isCk = true;
        e.preventDefault();
    }
    
    const onClickHandler = (e) => {
        // e.preventDefault();
        isCk = true;
        if(userId && userPwd && isCk) {
            console.log('@@@!!!!', msg);
            switch(msg) {
                case 'success':
                    console.log('로그인');
                    UserLogin(userId, userPwd);
                    SetToken(userId, userPwd, true)
                    navigate('/');
                    break;
                case 'fail_id':
                    console.log('아이디가 존재하지 않습니다');
                    break;
                case 'fail_pwd':
                    console.log('패스워드가 일치하지 않습니다');
                    break;
                default:
                    break;
            }
        }
        isCk = false;
    } 

    useEffect(() => {
        onClickHandler()
    }, [msg])


    return (
        <>
            <h1>로그인</h1>
            <form onSubmit={onUserCk} >
                <div>
                    <label>아이디</label>
                    <input type="text" value={userId} onChange={onUserIdHandler}/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={userPwd} onChange={onUserPwdHandler}/>
                </div>
                <div>
                    <button ref={btn} type="submit" onClick={onClickHandler}>로그인</button>
                </div>
            </form>
        </>
    )
}
export default connect(ReduxState, ReduxAction)(Login);
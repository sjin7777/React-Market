import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector, shallowEqual } from "react-redux";

import { UserLogin, UserCk } from "../../data/User";
import { SetToken } from "../../util/token";
import { CartSelect } from "../../data/Cart";


const ReduxState = (state) => ({
    user: {
        userId: state.userId,
        userPwd: state.userPwd
    },
    token: {
        userId: state.userId,
        userPwd: state.userPwd,
    },
    isToken: state.isToken,
    cart: [
        {
            userId: state.userId
        }
    ]
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
    },
    CartSelect: (userId) => {
        dispatch(CartSelect(userId))
    }
})


let isUserCk = false;
function Login({UserLogin, UserCk, SetToken, CartSelect}) {
    const navigate = useNavigate();
    
    const storeRes = Boolean(useSelector((state) => ({ result: state.User.result }), shallowEqual).result);
    
    const [ userId, setUserId ] = useState("");
    const [ userPwd, setUserPwd ] = useState("");

    const onUserIdHandler = (e) => {
        setUserId(e.target.value);
        isUserCk = false;
    };
    const onUserPwdHandler = (e) => {
        setUserPwd(e.target.value);
        isUserCk = false;
    }
    
    const onSubmitHandler = (e) => {
        if(!userId) {
            console.log('아이디 값을 입력해주세요')
        } else if(!userPwd) {
            console.log('패스워드 값을 입력해주세요');
        } else {
            isUserCk = true;
            
            if(storeRes && isUserCk) { 
                UserLogin(userId, userPwd);
                SetToken(userId, userPwd, true);
                CartSelect(userId);
                navigate('/');
            } else {
                console.log('아이디 혹은 패스워드가 일치하지 않습니다');
                isUserCk = false;
            }
        }
        e.preventDefault();
    }

    return (
        <>
            <h1>로그인</h1>
            <form onSubmit={onSubmitHandler} >
                <div>
                    <label>아이디</label>
                    <input type="text" value={userId} onChange={onUserIdHandler}/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={userPwd} onChange={onUserPwdHandler}/>
                </div>
                <div>
                    <button type="submit" onClick={() => UserCk(userId, userPwd)}>로그인</button>
                </div>
            </form>
        </>
    )
}
export default connect(ReduxState, ReduxAction)(Login);
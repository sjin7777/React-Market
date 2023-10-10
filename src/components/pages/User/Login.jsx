import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import Header from "../../module/Header";
import { UserLogin, UserCk } from "../../data/User";

const ReduxState = (state) => ({
    user: {
        userId: state.userId,
        userPwd: state.userPwd
    }
})

const ReduxAction = (dispatch) => ({
    UserLogin: (userId, userPwd) => {
        dispatch(UserLogin(userId, userPwd))
    },
    UserCk: (userId, userPwd) => {
        dispatch(UserCk(userId, userPwd))
    }
})

function Login({UserLogin, UserCk}) {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [ userId, setUserId ] = useState("");
    const [ userPwd, setUserPwd ] = useState("");

    const onUserIdHandler = (e) => setUserId(e.target.value);
    const onUserPwdHandler = (e) => setUserPwd(e.target.value);

    const onSubmitHandler = (e) => {
        console.log(`userId: ${userId}, userPwd: ${userPwd}`);
        e.preventDefault();

        switch(UserCk(userId, userPwd)) {
            case 'success':
                console.log('로그인');
                navigate('/');
                break;
            case 'fail_id':
                console.log('아이디가 존재하지 않습니다');
                return;
            case 'fail_pwd':
                    console.log('패스워드가 일치하지 않습니다');
                return
            default:
                break;
        }
    }
    const onClickHandler = () => {
        UserLogin(userId, userPwd);
    }
    

    return (
        <>
            <Header />
            <h1>로그인</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>아이디</label>
                    <input type="text" value={userId} onChange={onUserIdHandler}/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={userPwd} onChange={onUserPwdHandler}/>
                </div>
                <div>
                    <button type="submit" onClick={onClickHandler}>로그인</button>
                </div>
            </form>
        </>
    )
}
export default connect(ReduxState, ReduxAction)(Login);
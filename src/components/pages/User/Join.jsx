import { useState } from "react";
import { connect, shallowEqual, useSelector } from "react-redux";

import { UserIdCk, UserJoin } from "../../data/User";
import { useNavigate } from "react-router-dom";
import { CartInit } from "../../data/Cart";

let isIdCk = false;

const ReduxState = (state) => ({
    user: {
        userId: state.userId,
        userPwd: state.userPwd
    },
    cart: [
        {
            userId: state.userId
        }
    ]
})

const ReduxAction = (dispatch) => ({
    UserJoin: (userId, userPwd) => {
        dispatch(UserJoin(userId, userPwd))
    },
    UserIdCk: (userId) => {
        dispatch(UserIdCk(userId))
    },
    CartInit: (userId) => {
        dispatch(CartInit(userId))
    }
})


function Join({UserJoin, UserIdCk, CartInit}) {
    const navigate = useNavigate();
    const [ userId, setUserId ] = useState("");
    const [ userPwd, setUserPwd ] = useState("");
    const [ userPwdCk, setUserPwdCk ] = useState("");
    
    //  state에서 id 중복 확인: true면 중복
    const storeRes = Boolean(useSelector((state) => ({ result: state.User.result}), shallowEqual).result);
    
    
    //  중복체크한 후에 userId의 값이 변경되면 isIdCkClick값도 false로 변경되도록 설정
    const onUserIdHandler = (e) => {
        setUserId(e.target.value);
        isIdCk = false;
    };
    
    const onUserPwdHandler = (e) => setUserPwd(e.target.value);
    const onUserPwdCkHandler = (e) => setUserPwdCk(e.target.value);
    
    const onUserIdCkHandler = (e) => {
        isIdCk = true;
        UserIdCk(userId);
    }

    let isIdDuplicated = (storeRes || !isIdCk || !userId);
    let msg = '';
    if (!isIdDuplicated) msg = "사용 가능한 아이디";
    else if(storeRes && userId && isIdCk) msg = "중복된 아이디";


    
    const onSubmitHandler = (e) => {
        if(!userId) {
            console.log('아이디 값을 입력해주세요')
        } else if(!userPwd) {
            console.log('패스워드를 입력해주세요')
        } else if(!userPwdCk) {
            console.log('패스워드 확인을 해주세요');
        } else if(userPwd !== userPwdCk) {
            console.log('패스워드와 패스워드 확인의 값이 일치하지 않습니다.');
            setUserPwdCk("");
        } else if(isIdDuplicated) {
            console.log('아이디 체크는 필수입니다')
        } else {
            onClickHandler()
        }
        // console.log(`userId: ${userId}, userPwd: ${userPwd}`);
        e.preventDefault();
    }
    
    const onClickHandler = () => {
        UserJoin(userId, userPwd);
        CartInit(userId)
        navigate('/login');
    }


    
    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>아이디</label>
                    <input type="text" value={userId} onChange={onUserIdHandler}/>
                    <button type="button" onClick={onUserIdCkHandler} disabled={!isIdDuplicated}>중복체크</button>
                    <span>{msg}</span>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={userPwd} onChange={onUserPwdHandler}/>
                </div>
                <div>
                    <label>패스워드 확인</label>
                    <input type="password" value={userPwdCk} onChange={onUserPwdCkHandler}/>
                </div>
                <div>
                    <button type="submit" >가입</button>
                </div>
            </form>
        </>
    )
}
export default connect(ReduxState, ReduxAction)(Join);
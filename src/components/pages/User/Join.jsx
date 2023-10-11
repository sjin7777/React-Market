import { useState } from "react";
import { connect } from "react-redux";

import { UserJoin } from "../../data/User";
import { useNavigate } from "react-router-dom";

const ReduxState = (state) => ({
    user: {
        userId: state.userId,
        userPwd: state.userPwd
    }
})

const ReduxAction = (dispatch) => ({
    UserJoin: (userId, userPwd) => {
        dispatch(UserJoin(userId, userPwd))
    }
})

function Join({UserJoin, UserIdCk}) {
    const navigate = useNavigate();
    const [ userId, setUserId ] = useState("");
    const [ userPwd, setUserPwd ] = useState("");

    const onUserIdHandler = (e) => setUserId(e.target.value);
    const onUserPwdHandler = (e) => setUserPwd(e.target.value);

    const onSubmitHandler = (e) => {
        console.log(`userId: ${userId}, userPwd: ${userPwd}`);
        e.preventDefault();
    }
    const onClickHandler = (e) => {
        UserJoin(userId, userPwd);
        navigate('/login');
        e.preventDefault()
    }

    
    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>아이디</label>
                    <input type="text" value={userId} onChange={onUserIdHandler}/>
                    {/* <button type="button" onClick={onUserIdCkHandler}>중복체크</button> */}
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={userPwd} onChange={onUserPwdHandler}/>
                </div>
                <div>
                    <button type="submit" onClick={onClickHandler}>가입</button>
                </div>
            </form>
        </>
    )
}
export default connect(ReduxState, ReduxAction)(Join);
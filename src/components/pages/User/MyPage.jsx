import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserCk } from "../../data/User";
import { connect, shallowEqual, useSelector } from "react-redux";

const ReduxState = (state) => ({
    user: {
        userPwd: state.userPwd
    }
})

const ReduxAction = (dispatch) => ({
    UserCk: (userId, userPwd) => {
        dispatch(UserCk(userId, userPwd));
    }
})


let isUserCk = false;
function MyPage({UserCk}) {
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.state.userId;

    const storeRes = Boolean(useSelector((state) => ({ result: state.User.result }), shallowEqual).result);

    const [ userPwd, setUserPwd ] = useState("");
    const onUserPwdHandler = (e) => {
        setUserPwd(e.target.value);
    }

    const onSubmitHandler = (e) => {
        if(!userPwd) {
            console.log('패스워드를 입력해주세요')
        } else {
            isUserCk = true;
            if(storeRes && isUserCk) {
                console.log('패스워드 일치');
                navigate("/user/mypageinfo");
            } else {
                console.log('패스워드가 일치하지 않습니다');
                isUserCk = false;
            }
        }
        e.preventDefault();
    }


    return (
        <>
            <h1>마이페이지</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>아이디</label>
                    <input type="text" value={userId} readOnly/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="text" value={userPwd} onChange={onUserPwdHandler}/>
                </div>
                <button type="submit" onClick={() => UserCk(userId, userPwd)}>확인</button>
            </form>
        </>
    )
}

export default connect(ReduxState, ReduxAction)(MyPage);
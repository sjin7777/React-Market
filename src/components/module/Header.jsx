import { useNavigate } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { RemoveToken } from "../util/token";


function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const token = useSelector((state) => ({ token: state.Token }), shallowEqual).token;
    // console.log("토큰 ::::::::::: ", token);
    
    let userId = (token.token) ? String(token.token.userId) : "";
    // console.log("userId:::::::::: ", userId)

    let isToken = token.isToken;
    // console.log("isToken:::::::::: ", isToken)
    
    let navGuest = (isToken) ? {display: "none"} : {display: "inline"};
    let navUser = (!isToken) ? {display: "none"}: {display: "inline"};

    const onLogoutHandler = () => {
        if(window.confirm('로그아웃 하시겠습니까')) {
            dispatch(RemoveToken(false))
            navigate("/");
        }
    }

    return (     
        <>
            <header>
                <button onClick={() => navigate("/")}>Home</button>
            </header>
            <nav style={navGuest}>
                <button onClick={() => navigate("/join")}>회원가입</button>
                <button onClick={() => navigate("/login")}>로그인</button>
            </nav>
            <nav style={navUser}>
                <span>{userId}님</span>
                <button onClick={() => navigate("/user/mypage", {state: {userId}})}>마이페이지</button>
                <button onClick={onLogoutHandler}>로그아웃</button>
            </nav>
        </>
    )
}
export default Header;
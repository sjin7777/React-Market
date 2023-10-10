import { useNavigate } from "react-router-dom";
// import User from "../data/User";

function Header() {
    const navigate = useNavigate();
    return (     
        <>
            <header>
                <button onClick={() => navigate("/")}>Home</button>
            </header>
            <nav>
                <button onClick={() => navigate("/join")}>회원가입</button>
                <button onClick={() => navigate("/login")}>로그인</button>
            </nav>
        </>
    )
}
export default Header;
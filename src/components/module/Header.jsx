import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    <>
        <header>
            <button onClick={() => navigate("/")}>Home</button>
        </header>
        <div>3</div>
        <nav>
            <button onClick={() => navigate("/join")}>회원가입</button>
            <button onClick={() => navigate("/login")}>로그인</button>
        </nav>
    </>
}
export default Header;
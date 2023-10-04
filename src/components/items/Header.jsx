import { useNavigate, useLocation } from "react-router-dom";
import ButtonPath from "./ButtonPath";

function Header() {
    const navigate = useNavigate();

    const location = useLocation();
    const idVal = (location.state) ? location.state.idVal: "";
    const handleLogout = () => {
        if(window.confirm("로그아웃 하시겠습니까?")) {
            localStorage.removeItem(idVal);
            navigate("/");
        }
    }

    return(
        <>
            {(location.state) ? (
                <header>
                    <ButtonPath text="Home" onClick={() => navigate("/")} />
                    <nav>
                        <span>{idVal}님</span> 
                        <ButtonPath text="My Page" onClick={() => navigate("/mypage")} />
                        <ButtonPath text="Logout" onClick={handleLogout}/>
                    </nav>
                </header>
            ) : (
                <header>
                    <ButtonPath text="Home" onClick={() => navigate("/")} />
                    <nav>
                        <ButtonPath text="Join" onClick={() => navigate("/join")} />
                        <ButtonPath text="Login" onClick={() => navigate("/login")} />
                    </nav>
                </header>
            )}
        </>
    )
}

export default Header;
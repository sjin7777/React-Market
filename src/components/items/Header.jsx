import { useNavigate, /* useLocation */ } from "react-router-dom";
import { Button } from "@mui/material";

function Header() {
    const navigate = useNavigate();

    // const location = useLocation();
    // const idVal = (location.state) ? location.state.idVal: "";
    // const handleLogout = () => {
    //     if(window.confirm("로그아웃 하시겠습니까?")) {
    //         navigate("/");
    //     }
    // }

    return(
        <>
            {/* {(location.state) ? (
                <header>
                    <Button onClick={() => navigate("/")} >Home</Button>
                    <nav>
                        <span>{idVal}님</span> 
                        <Button onClick={() => navigate("/mypage")}>My Page</Button>
                        <Button onClick={handleLogout}>Logout</Button>
                    </nav>
                </header>
            ) : ( */}
                <header>
                    <Button onClick={() => navigate("/")} >Home</Button>
                    <nav>
                        <Button onClick={() => navigate("/join")} >Join</Button>
                        <Button onClick={() => navigate("/login")} >Login</Button>
                    </nav>
                </header>
            {/* )} */}
        </>
    )
}

export default Header;
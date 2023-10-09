import { useNavigate, /* useLocation */ } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { Button } from "@mui/material";
import { userSelect } from "../data/User";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSelect: (userId, userPwd) => dispatch(userSelect(userId, userPwd))
    }
}



function Header({ userId, userPwd, userSelect }) {
    const dataUser = useSelector((state) => state.user);
    const navigate = useNavigate();
    userSelect(userId, userPwd);
    console.log(dataUser);

    return(
        <>
            <header>
                <Button onClick={() => navigate("/")} >Home</Button>
                <nav>
                    <Button onClick={() => navigate("/join")} >Join</Button>
                    <Button onClick={() => navigate("/login")} >Login</Button>
                </nav>
                <div>
                    {`${userId}님`}
                </div>
            </header>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../items/Header";
import { Button } from "@mui/material";
import { FormControl } from '@mui/base';

function Login() {
    const navigate = useNavigate();
    const [ idVal, setIdVal ] = useState("");
    const [ pwdVal, setPwdVal ] = useState("");

    const handleChangeId = (event) => setIdVal(event.target.value); 
    const handleChangePwd = (event) => setPwdVal(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        navigate("/", {state: {idVal: pwdVal} });
    }

    return(
        <div>
            <Header />
            <h1>로그인</h1>
            <FormControl onSubmit={handleSubmit} >
                <div>
                    <label>아이디</label>
                    <input value={idVal} onChange={handleChangeId} placeholder="아이디를 입력해주세요" />
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={pwdVal} onChange={handleChangePwd} placeholder="패스워드를 입력해주세요" />
                </div>
                <Button>로그인</Button>
            </FormControl>
            {/* <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input value={idVal} onChange={handleChangeId}/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={pwdVal} onChange={handleChangePwd}/>
                </div>
                <Button>로그인</Button>
            </form> */}
        </div>
    )
}

export default Login;
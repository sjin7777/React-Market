import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Header from "../items/Header";
import { Button } from "@mui/material";
import { FormControl } from '@mui/base';

function Join(props) {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    const [ idVal, setIdVal ] = useState("");
    const [ pwdVal, setPwdVal ] = useState("");
    const [ pwdCkVal, setPwdCkVal ] = useState("");
    
    const handleChangeId = (event) => setIdVal(event.target.value);
    const handleChangePwd = (event) => setPwdVal(event.target.value);
    const handleChangePwdCk = (event) => setPwdCkVal(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!idVal) {
            alert("아이디를 입력해주세요.");
            return;
        } else if(!pwdVal) {
            alert("패스워드를 입력해주세요.");
            return;
        } else if(!pwdCkVal) {
            alert("패스워드 확인을 해주세요.");
            return;
        } else if(pwdVal !== pwdCkVal) {
            alert("패스워드가 일치하지 않습니다.")
            setPwdVal("");
            setPwdCkVal("");
            return;
        }

    }

    return (
        <div>
            <Header />
            <h1>회원가입</h1>
            <FormControl onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input type="text" value={idVal} onChange={handleChangeId}/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={pwdVal} onChange={handleChangePwd}/>
                </div>
                <div>
                    <label>패스워드 확인</label>
                    <input type="password" value={pwdCkVal} onChange={handleChangePwdCk}/>
                </div>
                <Button type="submit">가입</Button>
            </FormControl>
        </div>
    )
}

export default Join;
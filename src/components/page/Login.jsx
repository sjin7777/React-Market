import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../items/Header";
// import TextInput from "../items/TextInput";
// import ButtonSubmit from "../items/ButtonSubmit";

function Login() {
    const navigate = useNavigate();
    const [ idVal, setIdVal ] = useState("");
    const [ pwdVal, setPwdVal ] = useState("");

    const handleChangeId = (event) => setIdVal(event.target.value); 
    const handleChangePwd = (event) => setPwdVal(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(!localStorage.getItem(idVal)) {
            alert("아이디가 존재하지 않습니다");
            setIdVal("");
            return;
        } else if(localStorage.getItem(idVal) !== pwdVal) {
            alert("패스워드가 일치하지 않습니다.");
            setPwdVal("");
            return;
        } 

        navigate("/", {state: {idVal: pwdVal} });
    }

    return(
        <div>
            <Header />
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input value={idVal} onChange={handleChangeId}/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={pwdVal} onChange={handleChangePwd}/>
                </div>
                <button>로그인</button>
            </form>
            {/* 
            <TextInput text="아이디" ph="아이디를 입력해주세요." />
            <TextInput text="패스워드" ph="패스워드를 입력해주세요."/>
            <ButtonSubmit text="로그인" onClick={handleClick}/>
             */}
        </div>
    )
}

export default Login;
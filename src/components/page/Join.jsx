import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../items/Header";
// import TextInput from "../items/TextInput";
// import ButtonSubmit from "../items/ButtonSubmit";

function Join(props) {
    const navigate = useNavigate();
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
        localStorage.setItem(idVal, pwdVal);
        navigate("/login");
        // console.log(idVal);
    }

    return (
        <div>
            <Header />
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input value={idVal} onChange={handleChangeId}/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={pwdVal} onChange={handleChangePwd}/>
                </div>
                <div>
                    <label>패스워드 확인</label>
                    <input type="password" value={pwdCkVal} onChange={handleChangePwdCk}/>
                </div>
                
                <button>제출</button>
                {/* 
                <TextInput text="아이디" ph="아이디를 입력해주세요." />
                <ButtonSubmit text="중복확인"/> 
                <TextInput text="이메일" ph="이메일을 입력해주세요." />
                <TextInput text="패스워드" ph="패스워드를 입력해주세요."/> 
                <ButtonSubmit text="가입" />
                */}
            </form>
        </div>
    )
}

export default Join;
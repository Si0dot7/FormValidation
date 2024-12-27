import './FormComponent.css'
import {useState} from "react"

const FormComponent = () =>{

    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')

    const [erroruserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')

    const validateForm = (e) =>{
        e.preventDefault() /*ไม่รีเช็ตข้อมูลเมื่อรีหน้าเว็บ จะเก็บข้อมูลไว้ */
        if(userName.length >= 8){
            setErrorUserName('')
        }
        else{
            setErrorUserName('ป้อนชื่อผู้ใช้มากกว่าหรือเท่ากับ 8ตัวอักษร')
        }

        if(email.includes('@')){
            setErrorEmail('')
        }
        else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
        }

        if(password.length >= 8){
            setErrorPassword('')
        }
        else{
            setErrorPassword('รหัสผ่านต้องมากกว่าหรือเท่ากับ 8ตัวอักษร')
        }

        if(repassword == password){
            setErrorRePassword('')
        }
        else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
        }
    }
    return(
        <div className = 'container'>
            <form className = 'form' onSubmit = {validateForm}> {/*ส่วนที่ให้กรอกข้อมูล*/}
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className = 'form-control'> 
                    <label>ชื่อผู้ใช้</label>
                    <input type = 'text' value = {userName} onChange = {(e)=>setUserName(e.target.value)}/>
                    <small>{erroruserName}</small>
                </div>
                
                <div className = 'form-control'>
                    <label>อีเมล</label>
                    <input type = 'text' value = {email} onChange = {(e)=>setEmail(e.target.value)}></input>
                    <small>{errorEmail}</small>
                </div>

                <div className = 'form-control'>
                    <label>รหัสผ่าน</label>
                    <input type = 'text' value = {password} onChange = {(e)=>setPassword(e.target.value)}></input>
                    <small>{errorPassword}</small>
                </div>

                <div className = 'form-control'>
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type = 'text' value = {repassword} onChange = {(e)=>setRePassword(e.target.value)}></input>
                    <small>{errorRePassword}</small>
                </div>

                <button type = 'submit'>ลงทะเบียน</button>

            </form>
        </div>
    );

}

export default FormComponent
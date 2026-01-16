import { NavLink } from "react-router-dom"
function LoginBtn({txt}){
    return (
        <div className="loginBtn  py-[80px] px-[140px]" style={{fontFamily:"Azeret Mono"}}>
            <NavLink
            to="/councillogin" className=" text-[#ACFF47] underline">{txt}</NavLink>
        </div>
    )
}

export default LoginBtn
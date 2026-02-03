import api from "./axiosinstance";



export const registerCouncilMember  = (payload)=>{
    api.post("/auth/register",payload);
}

export const loginCouncilMember = (payload)=>{
    api.post("/auth/login",payload);

}


export const logoutCouncilMember = (payload) =>{
    api.post("/auth/logout",payload);
}
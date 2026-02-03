import axiox from 'axios'




const api = axiox.create({
    baseURL:"http://localhost:3213/api/v1",
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }
})

export default api
import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//Api for admin signup
export const adminsignupApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/admin`, reqBody)
}

//Api for admin login
export const adminloginApi = async(email, password)=>{
    return await commonApi('GET', `${serverUrl}/admin?email=${email}&password=${password}`,"")
}
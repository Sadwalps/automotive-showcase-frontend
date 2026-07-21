import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//Api for admin signup
export const adminsignupApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/admin`, reqBody)
}

//Api for admin login
export const adminloginApi = async (email, password) => {
    return await commonApi('GET', `${serverUrl}/admin?email=${email}&password=${password}`, "")
}

//Api for user signup
export const usersignupApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/users`, reqBody)
}

//Api for user login
export const userloginApi = async (email, password) => {
    return await commonApi('GET', `${serverUrl}/users?=${email}&password=${password}`, "")
}

//Api for add car details
export const addcardetailsApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/cars`, reqBody)
}

//Api for get all car details
export const getallcardeatilsApi = async () => {
    return await commonApi('GET', `${serverUrl}/cars`, "")
}

//Api for edit car details
export const editcardetailsApi = async (id,data) => {
    return await commonApi('PUT', `${serverUrl}/cars/${id}`, data)
}

 
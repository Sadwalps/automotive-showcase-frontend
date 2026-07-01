import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//Api for admin signup
export const adminsignupApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/admin`, reqBody)
}
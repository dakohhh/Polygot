import { $http } from "./xhr";


export const APITranslateText = async (data: { text:string; language:string; }) => $http.post(`/`, data).then((res) => res.data).catch((err) => {
    throw new Error(err.response.data?.message);
});
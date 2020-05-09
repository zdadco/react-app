import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "0ab7924a-4aa7-432c-93c1-b30d94898bef"
    }
});

const UsersAPI = {
    getUsers: (currentPage, pageSize) =>
        instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data),

    follow: (userId) =>
        instance.post(`follow/${userId}`).then(response => response.data),

    unfollow: (userId) =>
        instance.delete(`unfollow/${userId}`).then(response => response.data)
};

export default UsersAPI;

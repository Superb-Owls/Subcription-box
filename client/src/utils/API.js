import axios from "axios";

// "/box" --> boxRoutes;
// "/testimonial" --> testimonialRoutes;
// "/currentvote"--> currentRoutes;
// "/pastvote"--> pastRoutes;
class ApiFront {
    constructor(route) {
        this.getAll = () => {
            return axios.get(`/api/${route}`);
        }
        this.getById = function (id) {
            return axios.get(`/api/${route}/${id}`)
        }
        this.delete = function (id) {
            return axios.delete(`/api/${route}/${id}`)
        }
        this.save = function (postData) {
            return axios.post(`/api${route}`, postData)
        }
    }
}

export default {
    box: new ApiFront('box'),
    current: new ApiFront("currentvote"),
    past: new ApiFront("pastvote"),
    user: new ApiFront("user"),
    subscription: new ApiFront("subscription"),
    testimonial: new ApiFront("testimonial")
}


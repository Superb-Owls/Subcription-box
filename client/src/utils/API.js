import axios from "axios";
// "/box" --> boxRoutes;
// "/testimonial" --> testimonialRoutes;
// "/currentvote"--> currentRoutes;
// "/pastvote"--> pastRoutes;

export default {

    //////////box//////////////
    getBoxes: function () {
        return axios.get("/api/box");
    },
    getBox: function (id) {
        return axios.get("/api/box/" + id);
    },
    deleteBox: function (id) {
        return axios.delete("/api/box/" + id);
    },
    saveBox: function (postData) {
        return axios.post("/api/box", postData);
    },

    //////////testimonial//////////////
    getTestimonials: function () {
        return axios.get("/api/testimonial");
    },
    getTestimonial: function (id) {
        return axios.get("/api/testimonial/" + id);
    },
    deleteTestimonial: function (id) {
        return axios.delete("/api/testimonial/" + id);
    },
    saveTestimonial: function (postData) {
        return axios.post("/api/testimonial", postData);
    },

    //////////currentvote//////////////
    getCurrent: function () {
        return axios.get("/api/currentvote");
    },
    getCurrents: function (id) {
        return axios.get("/api/currentvote/" + id);
    },
    deleteCurrent: function (id) {
        return axios.delete("/api/currentvote/" + id);
    },
    saveCurrent: function (postData) {
        return axios.post("/api/currentvote", postData);
    },

    //////////pastvote//////////////
    getPasts: function () {
        return axios.get("/api/pastvote");
    },
    getPast: function (id) {
        return axios.get("/api/pastvote/" + id);
    },
    deletePast: function (id) {
        return axios.delete("/api/pastvote/" + id);
    },
    savePast: function (postData) {
        return axios.post("/api/pastvote", postData);
    }
};

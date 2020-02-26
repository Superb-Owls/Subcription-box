module.exports = {
    get: function () {
        return axios.get("/api/pastvote");
    },
    getById: function (id) {
        return axios.get("/api/pastvote/" + id);
    },
    delete: function (id) {
        return axios.delete("/api/pastvote/" + id);
    },
    save: function (postData) {
        return axios.post("/api/pastvote", postData);
    }
}
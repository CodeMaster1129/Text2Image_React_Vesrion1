import axios from "axios";

const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorizattoken"];
    }
};

export default setAuthToken;

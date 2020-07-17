import axios from "axios";
import configs from "@constants/configs";

export default axios.create({
    baseURL: configs.baseURL,
    responseType: "json"
});

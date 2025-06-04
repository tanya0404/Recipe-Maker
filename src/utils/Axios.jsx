import axios from "../utils/Axios";

const instance=axios.create(
  {
    baseURL: "https://fakestoreapi.com/"

  }
);

instance.interceptors.request.use(function (config) {
    console.log("request --->",config)
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

instance.interceptors.response.use(function (response) {
    console.log("response --->",response)
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });

export default instance;
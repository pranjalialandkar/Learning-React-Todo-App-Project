import { apiClient } from "./ApiClient"

export const retriveHelloWorldPathVariable =
    (username) => apiClient.get(`/hello-world/path-variable/${username}`)   
    

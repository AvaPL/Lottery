import axios from 'axios'
import AuthenticationService, {SESSION_TOKEN} from "./AuthenticationService";

const fetchClient = () => {
    const instance = axios.create({baseURL: 'http://localhost:8008/api'});
    instance.interceptors.request.use(
        config => {
            if (AuthenticationService.isUserLoggedIn())
                config.headers.Authorization = sessionStorage.getItem(SESSION_TOKEN);
            return config
        }
    );
    return instance;
};

export default fetchClient();
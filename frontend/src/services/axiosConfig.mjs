import axios from "axios";

// Configure Axios to send cookies with every request
axios.defaults.withCredentials = true;

// Export the configured instance if needed
export default axios;

import auth from "./auth";
import resetPassword from "./resetPassword";

const contentRoutes = { name: "account", routes: [auth, resetPassword] };

export default contentRoutes;

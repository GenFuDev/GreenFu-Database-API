import businessProfileRoute from "./business";
import customerProfileRoute from "./customer";

const profileRoutes = {
  name: "profile",
  routes: [businessProfileRoute, customerProfileRoute],
};

export default profileRoutes;

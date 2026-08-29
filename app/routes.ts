import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";

export default [
  index("routes/(public)/home.tsx"),
  layout("routes/(auth)/layout.tsx", [
    route("login", "routes/(auth)/login.tsx"),
  ]),
  layout("routes/(protected)/layout.tsx", [
    route("dashboard", "routes/(protected)/dashboard.tsx"),
  ]),
  route("api/auth/*", "routes/api.auth.$.ts"),
] satisfies RouteConfig;

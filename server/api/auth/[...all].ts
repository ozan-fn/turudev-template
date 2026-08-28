import { defineHandler } from "nitro";
import { auth } from "../../lib/auth";

export default defineHandler((event) => {
  return auth.handler(event.req);
});

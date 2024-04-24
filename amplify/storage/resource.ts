import { defineStorage } from "@aws-amplify/backend";
import { convertTextToSpeech } from "../data/resource";

export const storage = defineStorage({
  name: "predictionsforgen2",
  access: (allow) => ({
    "/public/*": [
      allow.resource(convertTextToSpeech).to(["write"]),
      allow.guest.to(["read", "write", "get"]),
    ],
  }),
});

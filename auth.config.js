import { Web3sdkioAuth } from "@web3sdkio/auth/next";
import { domainName } from "./const/yourDetails";

export const { Web3sdkioAuthHandler, getUser } = Web3sdkioAuth({
  privateKey: process.env.WEB3SDKIO_AUTH_PRIVATE_KEY || "",
  domain: domainName,
});

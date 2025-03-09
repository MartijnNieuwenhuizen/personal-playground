import "iron-session";
import { IronSession } from "iron-session";

declare module "iron-session" {
  interface IronSessionData {
    accessToken?: string;
  }
}

declare module "next" {
  interface NextRequest {
    session: IronSession;
  }
}

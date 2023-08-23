import { InferModel } from "drizzle-orm";
import { users } from "../../db/schema/jwtUser";

export type JwtUser = InferModel<typeof users>; // return type when queried
export type NewJwtUser = InferModel<typeof users, "insert">; // insert type
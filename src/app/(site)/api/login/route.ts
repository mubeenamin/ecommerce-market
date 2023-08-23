import { NextRequest, NextResponse } from "next/server";
import { db } from "../../lib/db/drizzle";
import { users } from "../../db/schema/jwtUser";
import { eq } from "drizzle-orm";
import { comparePassword } from "../../lib/bcrypt";
import Joi from "joi";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { error } = validateData(body);
    if (error)
      return new Response(error.details[0].message, {
        status: 400,
      });
    const userdb = await db
      .select()
      .from(users)
      .where(eq(users.email, body.email));

    if (userdb.length > 0) {
      const passwordMatched = await comparePassword(
        body.password as string,
        userdb[0].password as string
      );

      if (passwordMatched) {
        const { password, ...userWithoutPass } = userdb[0];
        const resultData = { ...userWithoutPass };

        return new Response(JSON.stringify({ user: resultData }));
      }
    }
    const response = new NextResponse(
      JSON.stringify({
        status: "success",
      }),

      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ messange: "invalid user name and password" });
  }
}

const validateData = (data: any) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};
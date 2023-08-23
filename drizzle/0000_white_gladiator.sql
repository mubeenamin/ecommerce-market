CREATE TABLE IF NOT EXISTS "jwt_users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"role" varchar(256) DEFAULT 'user',
	"photo" varchar(256) DEFAULT 'https://res.cloudinary.com/dgeqvleeq/image/upload/v1691703822/profile_r6ipcc.jpg',
	"verified" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "jwt_users_email_unique" UNIQUE("email")
);

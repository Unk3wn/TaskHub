CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE public."user" (
	"uid" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"FirstName" varchar(30) NOT NULL,
	"LastName" varchar(50) NOT NULL,
	"isTeacher" bool NOT NULL DEFAULT false,
	"isAdmin" bool NULL DEFAULT false,
	CONSTRAINT user_pk PRIMARY KEY (uid)
);

CREATE TABLE public."class" (
	"uid" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"label" varchar(10) not null,
	CONSTRAINT class_pk PRIMARY KEY (uid)
);

CREATE TABLE public."team" (
	"uid" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar(50) not null,
	"class" uuid not null,
	"leader" uuid not null,
	CONSTRAINT team_pk PRIMARY KEY (uid)
);
ALTER TABLE public.team ADD CONSTRAINT team_fk FOREIGN KEY ("class") REFERENCES public."class"(uid);

CREATE TABLE public."task" (
	"uid" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"task" text not NULL,
	CONSTRAINT task_class_pk PRIMARY KEY (uid)
);

CREATE TABLE public.solution (
	uid uuid NOT NULL DEFAULT uuid_generate_v4(),
	solution text NOT NULL,
	mark varchar(10) NOT NULL,
	task uuid NULL,
	team uuid NULL,
	CONSTRAINT solution_class_pk PRIMARY KEY (uid)
);
ALTER TABLE public.solution ADD CONSTRAINT solution_fk FOREIGN KEY (task) REFERENCES public.task(uid);
ALTER TABLE public.solution ADD CONSTRAINT solution_fk_1 FOREIGN KEY (team) REFERENCES public.team(uid);


CREATE TABLE public."user_class" (
	"uid" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"class" uuid not NULL,
	"user" uuid not null,
	CONSTRAINT user_class_pk PRIMARY KEY (uid)
);

ALTER TABLE public.user_class ADD CONSTRAINT user_class_fk FOREIGN KEY ("user") REFERENCES public."user"(uid);
ALTER TABLE public.user_class ADD CONSTRAINT user_class_fk_1 FOREIGN KEY ("class") REFERENCES public."class"(uid);

CREATE TABLE public."user_teams" (
	"uid" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"team" uuid not NULL,
	"user" uuid not null,
	CONSTRAINT user_team_pk PRIMARY KEY (uid)
);
ALTER TABLE public.user_teams ADD CONSTRAINT user_teams_fk FOREIGN KEY ("user") REFERENCES public."user"(uid);
ALTER TABLE public.user_teams ADD CONSTRAINT user_teams_fk_1 FOREIGN KEY (team) REFERENCES public.team(uid);

CREATE TABLE public."class_task" (
	"uid" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"task" uuid not NULL,
	"class" uuid not Null,
	CONSTRAINT user_task_pk PRIMARY KEY (uid)
);
ALTER TABLE public.class_task ADD CONSTRAINT class_task_fk FOREIGN KEY ("class") REFERENCES public."class"(uid);
ALTER TABLE public.class_task ADD CONSTRAINT class_task_fk_1 FOREIGN KEY (task) REFERENCES public.task(uid);

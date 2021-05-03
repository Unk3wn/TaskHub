create table "user"
(
    user_id    uuid    not null
        constraint user_pk
            primary key,
    username   varchar not null,
    password   varchar,
    first_name varchar not null,
    last_name  varchar not null,
    email      varchar not null
);

alter table "user"
    owner to postgres;

create unique index user_user_id_uindex
    on "user" (user_id);

create table role
(
    role_id   uuid not null
        constraint role_pk
            primary key,
    role_name varchar
);

alter table role
    owner to postgres;

create table user_role
(
    user_role_mapping_id uuid not null
        constraint user_role_pk
            primary key,
    user_id              uuid
        constraint user_role_user_user_id_fk
            references "user"
            on delete cascade,
    role_id              uuid
        constraint user_role_role_role_id_fk
            references role
            on delete cascade
);

alter table user_role
    owner to postgres;

create table klass
(
    class_id  uuid not null
        constraint class_pk
            primary key,
    classname varchar
);

alter table klass
    owner to postgres;

create unique index class_class_id_uindex
    on klass (class_id);

create table user_class
(
    mapping_id uuid not null
        constraint user_class_pk
            primary key,
    user_id    uuid
        constraint user_class_user_user_id_fk
            references "user",
    class_id   uuid
        constraint user_class_class_class_id_fk
            references klass
);

alter table user_class
    owner to postgres;

create table team
(
    team_id     uuid not null
        constraint team_pk
            primary key,
    team_name   varchar,
    team_leader uuid
        constraint team_user_user_id_fk
            references "user",
    class_id    uuid
        constraint team_class_class_id_fk
            references klass
);

alter table team
    owner to postgres;

create table subject
(
    subject_id   uuid not null
        constraint subject_pk
            primary key,
    subject_name varchar
);

alter table subject
    owner to postgres;

create table task
(
    task_id  uuid      not null
        constraint task_pk
            primary key,
    subject  uuid
        constraint task_subject_subject_id_fk
            references subject,
    question varchar,
    class    uuid
        constraint task_class_class_id_fk
            references klass,
    duedate  timestamp not null
);

alter table task
    owner to postgres;

create table solution
(
    solution_id uuid not null
        constraint solution_pk
            primary key,
    time_ended  boolean default false,
    reviewed    boolean default false,
    marked      boolean default false,
    mark        varchar,
    task        uuid
        constraint solution_task_task_id_fk
            references task,
    team        uuid
        constraint solution_team_team_id_fk
            references team
);

alter table solution
    owner to postgres;

create table user_team
(
    mapping_id uuid,
    user_id    uuid
        constraint user_team_user_user_id_fk
            references "user",
    team_id    uuid
        constraint user_team_team_team_id_fk
            references team
);

alter table user_team
    owner to postgres;

create table klass_task
(
    mapping_id uuid not null
        constraint class_task_pk
            primary key,
    klass_id   uuid
        constraint class_task_class_class_id_fk
            references klass,
    task_id    uuid
        constraint class_task_task_task_id_fk
            references task
);

alter table klass_task
    owner to postgres;

create table task_solution
(
    mapping_id  uuid,
    task_id     uuid
        constraint task_solution_task_task_id_fk
            references task,
    solution_id uuid
        constraint task_solution_solution_solution_id_fk
            references solution
);

alter table task_solution
    owner to postgres;


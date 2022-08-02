DROP TABLE IF EXISTS business, owners, users, images;

CREATE TABLE business (
    id SERIAL,
    business_name TEXT,
    category TEXT,
    address TEXT,
    name TEXT,
    description TEXT,
    business_phone TEXT,
    business_email TEXT,
    business_website TEXT
);

CREATE TABLE owners (
    id SERIAL,
    name TEXT,
    owner_phone TEXT,
    owner_email TEXT
);

CREATE TABLE users (
    id SERIAL,
    name TEXT,
    favorites INT[]
);

CREATE TABLE images (
    id SERIAL, 
    name TEXT,
    img TEXT
)
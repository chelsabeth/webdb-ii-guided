[ client ] <HTTP> [ API (knex + db driver) ] <DB Network Protocol> [ Data store ]

knex: translates from JS to SQL and from rows of DB data to JS arrays

DB Driver: knows how to use the db protocol over the network

MongoDB -> mongo protocol
PostgresSQL -> postgresql://

## mantras

- every table MUST have a primary key
- every change to the db schema requires a new migration 

## Expectations

- NOT about managing the db
- about using the db from an API 
- about taking reqirements and designing a data model (the db schema)

## Database Migrations

- a tool to evolve your database over time
- can create db objects
- can modify db objects
- live together with your application code
- written in JS

## An example

Song Suggester

- user profile
- favorite songs
- playlists
- share their favorite or playlists
- follow users
- look for an artist, song or genre
- according to mood
- similar on tempo and beats
- suggests songs/artists based on (curent song, artists, mood, others?)

Songs

 - list of songs
 - add a song
 - import song metadata
 - update a song
 - remove a song
 - add album art

 Songs Table Schema

 - id: Primary key, integer, auto-increment automatically
 - name: string, not unique, max size of 255, indexed. An index is a way to make searches on this column faster
 - duration: integer (stored in seconds)
 - artist: string
 - favorite: boolean

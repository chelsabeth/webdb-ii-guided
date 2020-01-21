
exports.up = function(knex) {
    // REMEMBER the return 
    return knex.schema.createTable('songs', tbl => {
         // id column, primary key, auto increment
         tbl.increments();

         // string for the name
         tbl.string('name', 255).index();

         // duration
         tbl.integer('duration');

         // artist
         tbl.string('artist').index();

         tbl.boolean('favorite').defaultTo(false);
         // most RDBMS store 1 for true and 0 for false

        // adds created_at and updated_at columns
         tbl.timestamps(true, true);
    })
};

// undo the changes from the up function (rollback)
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('songs')
};

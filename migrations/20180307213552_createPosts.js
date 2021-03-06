exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (tbl) => {
    tbl.increments('postId');

    tbl.integer('userId').unsigned().notNullable().references('userId').inTable('users');

    tbl.string('text');

    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};

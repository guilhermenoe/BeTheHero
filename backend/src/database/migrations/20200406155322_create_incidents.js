exports.up = function (knex) {
  return knex.schema.createTable("incidents", function (table) {
    table.increments();
    table.string("title").notNullable(); //o campo não pode estar vazio
    table.string("description").notNullable(); //o campo não pode estar vazio
    table.decimal("value").notNullable(); //o campo não pode estar vazio

    table.string("ong_id").notNullable(); //relacionamento com o autra tabela

    table.foreign("ong_id").references("id").inTable("ongs");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("incidents");
};

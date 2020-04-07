//sempre ligado a criação de tabela

exports.up = function(knex) {
   return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable(); //o campo não pode estar vazio
      table.string('email').notNullable(); //o campo não pode estar vazio
      table.string('Whatsapp').notNullable(); //o campo não pode estar vazio
      table.string('city').notNullable(); //o campo não pode estar vazio
      table.string('uf', 2).notNullable(); //o campo não pode estar vazio
  });
};


exports.down = function(knex) {
   return knex.schema.dropTable('ongs');
};

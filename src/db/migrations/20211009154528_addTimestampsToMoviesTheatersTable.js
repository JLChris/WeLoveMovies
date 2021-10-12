
exports.up = function (knex) {
    return knex.schema.alterTable("movies_theaters", table => {
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("movies_theaters", table => {
        table.dropTimestamps();
    });
};

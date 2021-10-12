
exports.up = function (knex) {
    return knex.schema.alterTable("movies", table => {
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("movie", table => {
        table.dropTimestamps();
    });
};

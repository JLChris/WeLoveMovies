
exports.up = function (knex) {
    return knex.schema.alterTable("critics", table => {
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("critics", table => {
        table.dropTimestamps();
    });
};

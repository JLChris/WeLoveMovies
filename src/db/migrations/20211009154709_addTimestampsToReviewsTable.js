
exports.up = function (knex) {
    return knex.schema.alterTable("reviews", table => {
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("reviews", table => {
        table.dropTimestamps();
    });
};

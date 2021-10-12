
exports.up = function (knex) {
    return knex.schema.alterTable("theaters", table => {
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("theaters", table => {
        table.dropTimestamps();
    });
};

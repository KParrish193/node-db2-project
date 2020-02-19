
exports.up = function(knex) {
    return knex.schema.createTable("cars", col => {
    col.increments()
    col 
        .text("VIN", 17)
        .notNullable()
    col 
        .text("make", 128)
        .notNullable()
        .index()
    col 
        .text("model", 128)
        .notNullable()
        .index()
    col 
        .integer("mileage")
        .notNullable()
    col 
        .text("transmissionType", 128)
    col 
        .text("titleStatus", 128)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
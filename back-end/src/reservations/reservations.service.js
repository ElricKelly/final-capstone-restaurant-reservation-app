const knex = require("../db/connection");

function list() {
  return knex("reservations")
    .select("*")
    .whereNot({ status: "finished" });
}

function create(reservation) {
  return knex("reservations")
    .insert(reservation)
    .returning("*")
    .then((result) => result[0]);
}

function read(reservationId) {
  return knex("reservations")
    .select("*")
    .where({ reservation_id: reservationId })
    .first();
}

function listByDate(date) {
  return knex("reservations")
    .where({ reservation_date: date })
    .whereNot({ status: "finished" })
    .orderBy("reservation_time");
}

function listByPhone(mobile_number) {
  return knex("reservations")
    .whereRaw(
      "translate(mobile_number, '() -', '') like ?",
      `%${mobile_number.replace(/\D/g, "")}%`
    )
    .orderBy("reservation_date");
}

function update(reservationId, newStatus) {
  return knex("reservations")
    .where({ reservation_id: reservationId })
    .update({ status: newStatus })
    .returning("*")
    .then((result) => result[0]);
}

function updateRes(reservation) {
  const {
      reservation_id,
      first_name,
      last_name,
      mobile_number, 
      reservation_date,
      reservation_time,
      people
  } = reservation;
  return knex("reservations")
  .where({reservation_id})
  .update(reservation, "*")
  .returning("*")
  .then((updated) => updated[0]);
}

module.exports = {
  list,
  create,
  read,
  listByDate,
  update,
  listByPhone,
  updateRes,
};

const { format, addMinutes } = require("date-fns");
const crypto = require("crypto");
const sendgrid = require("@sendgrid/mail");
const path = require("path");
const uuid = require("uuid");
const fs = require("fs").promises;
const sharp = require("sharp");

function formatDateToDB(date) {
  let internalDate;
  if (typeof date === "string") {
    internalDate = new Date(date);
  } else {
    internalDate = date;
  }
  const adjustedDate = addMinutes(
    internalDate,
    internalDate.getTimezoneOffset()
  );
  return format(adjustedDate, "yyyy-MM-dd");
}


module.exports = {
  formatDateToDB,
};

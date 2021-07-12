require("dotenv").config();
const bcrypt = require("bcrypt");

const { SUPER_ADMIN_EMAIL, SUPER_ADMIN_PASSWORD, SALT_ROUNDS } = process.env;

async function up(db) {
  const hashedSuperAdminPassword = await bcrypt.hash(
    SUPER_ADMIN_PASSWORD,
    Number(SALT_ROUNDS)
  );
  return db.collection("users").insertOne({
    email: SUPER_ADMIN_EMAIL,
    password: hashedSuperAdminPassword,
    name: "Admin User",
    isAdmin: true,
    isSuperAdmin: true,
    active: true,
    activationCode: 1234,
    activatedAt: new Date(),
  });
}

async function down(db) {
  return db.collection("users").deleteOne({
    email: SUPER_ADMIN_EMAIL,
  });
}

module.exports = {
  up,
  down,
};

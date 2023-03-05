const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: String,
      required: [true, "Isim alani zorunludur."],
    },
    surname: {
      type: String,
      required: [true, "Soyadi alani zorunludur."],
    },
    email: {
      type: String,
      required: [true, "E-mail alani zorunludur."],
    },
    password: {
      type: String,
      required: [true, "Sifre alani zorunludur."],
    },
  },{ collection: "UsersTable", timestamps: true }
);

const UsersTable = mongoose.model("UsersTable", userSchema);

module.exports = UsersTable;

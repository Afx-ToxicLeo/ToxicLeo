"use strict";

const fileType = require("file-type");
const config = require("../config");
const { isUrl, getBuffer, writeExifImg, writeExifVid } = require(".");
const fs = require("fs");
const { connected } = require("process");
class Base {
  constructor(client) {
    Object.defineProperty(this, "client", { value: client });
  }

  _clone() {
    return Object.assign(Object.create(this), this);
  }

  _patch(data) {
    return data;
  }
}

module.exports = { Base };
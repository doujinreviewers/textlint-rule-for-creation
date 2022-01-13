"use strict";
import TextLintTester from "textlint-tester";
import rule from "../src/textlint-rule-for-creation";
const tester = new TextLintTester();

const retasu = require("./retasu");
const gozidatuzi = require("./gozidatuzi");

tester.run("retasu", rule, retasu);
tester.run("gozidatuzi", rule, gozidatuzi);
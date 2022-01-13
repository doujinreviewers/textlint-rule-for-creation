"use strict";
import TextLintTester from "textlint-tester";
import rule from "../src/textlint-rule-for-creation";
const tester = new TextLintTester();

const retasu = require("./retasu");
const gozidatuzi = require("./gozidatuzi");
const zyosi = require("./zyosi");
const sanuki = require("./sanuki");
const saire = require("./saire");

tester.run("retasu", rule, retasu);
tester.run("gozidatuzi", rule, gozidatuzi);
tester.run("zyosi", rule, zyosi);
tester.run("sanuki", rule, sanuki);
tester.run("saire", rule, saire);
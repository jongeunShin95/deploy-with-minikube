const express = require('express');
var number = 0;

const count = {
    get: async (_, res) => {
        try {
            res.send(number + "");
        } catch (err) {
            res.status(500).send(err);
        }
    },
    plus: async (_, res) => {
        try {
            number++;
            res.send(number + "");
        } catch (err) {
            res.status(500).send(err);
        }
    },
    minus: async (_, res) => {
        try {
            number--;
            res.send(number + "");
        } catch (err) {
            res.status(500).send(err);
        }
    },
    reset: async (_, res) => {
        try {
            number = 0;
            res.send(number + "");
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = count;
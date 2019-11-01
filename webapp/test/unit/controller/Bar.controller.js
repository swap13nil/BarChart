/*global QUnit*/

sap.ui.define([
	"chart/BarChart/controller/Bar.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Bar Controller");

	QUnit.test("I should test the Bar controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
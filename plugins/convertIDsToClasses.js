'use strict';

exports.type = 'perItem';

exports.active = true;

var EXTEND = require('whet.extend'),
    stylingProps = require('./_collections').stylingProps,
    regCleanupStyle = /(:|;)\s+/g;

/**
 * Convert ID's to classes. Parses each ID for the following pattern, following CSS class selector syntax:
 *
 * @example
 * <g id=".test">
 *             ⬇
 * <g class="test">
 *
 * The separator between classes can be either a space or a hyphen (SVG editors like Sketch convert 
 * spaces to hyphens in ID attributes)
 *
 * @example
 * <g id=".test-.me">
 *             ⬇
 * <g class="test me">
 *
 * @param {Object} item current iteration item
 *
 * @author Kir Belevich
 */
exports.fn = function(item) {

    if (item.elem && item.hasAttr('id')) {
    	var id = item.attr('id').value;
    	if (id.substring(0, 1) == ".") {
    		id = id.substring(1);
	        var classes = id.split(/-?\./);
	        item.removeAttr("id");
			item.addAttr({
				name: 'class',
				prefix: '',
				local: 'class',
				value: classes.join(" ")
			});
    	}

    }

};

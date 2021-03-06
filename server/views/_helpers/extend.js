/*
 * server/views/_helpers/extend.js
 *
 * Sometimes it is useful to have custom scripts or stylesheets
 * on your pages. Handlebars does not provide a way to import
 * or extend a template, but through the use of helpers you can
 * create a similar result.
 *
 * We can take advantage of the fact that our body template is
 * processed before the layout template. Knowing this, we can
 * create two helpers "block" and "extend" which can be used to
 * inject custom stylesheets or scripts into the layout template.
 * The block helper will act as a placeholder for values
 * specified in earlier extend helpers.
 */

'use strict';

var _blocks = {};

exports = module.exports = function (context, options) {
  _blocks[context] = _blocks[context] || [];
  _blocks[context].push(options.fn());
};

exports._blocks = _blocks;

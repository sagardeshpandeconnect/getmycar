'use strict';

/**
 * featurd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::featurd.featurd');

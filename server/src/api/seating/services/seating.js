'use strict';

/**
 * seating service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seating.seating');

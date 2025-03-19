'use strict';

/**
 * recent-detection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recent-detection.recent-detection');

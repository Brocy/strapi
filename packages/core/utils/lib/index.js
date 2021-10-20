'use strict';

/**
 * Export shared utilities
 */
const { buildQuery, hasDeepFilters } = require('./build-query');
const parseMultipartData = require('./parse-multipart');
const sanitizeEntity = require('./sanitize-entity');
const parseType = require('./parse-type');
const policy = require('./policy');
const templateConfiguration = require('./template-configuration');
const { yup } = require('./validators');
const errors = require('./errors');
const {
  nameToSlug,
  nameToCollectionName,
  getCommonBeginning,
  escapeQuery,
  stringIncludes,
  stringEquals,
  isKebabCase,
  isCamelCase,
} = require('./string-formatting');
const { removeUndefined } = require('./object-formatting');
const { getConfigUrls, getAbsoluteAdminUrl, getAbsoluteServerUrl } = require('./config');
const { generateTimestampCode } = require('./code-generator');
const contentTypes = require('./content-types');
const webhook = require('./webhook');
const env = require('./env-helper');
const relations = require('./relations');
const setCreatorFields = require('./set-creator-fields');
const hooks = require('./hooks');
const providerFactory = require('./provider-factory');
const pagination = require('./pagination');

module.exports = {
  yup,
  policy,
  templateConfiguration,
  buildQuery,
  hasDeepFilters,
  parseMultipartData,
  sanitizeEntity,
  parseType,
  nameToSlug,
  nameToCollectionName,
  getCommonBeginning,
  getConfigUrls,
  escapeQuery,
  removeUndefined,
  getAbsoluteAdminUrl,
  getAbsoluteServerUrl,
  generateTimestampCode,
  stringIncludes,
  stringEquals,
  isKebabCase,
  isCamelCase,
  contentTypes,
  webhook,
  env,
  relations,
  setCreatorFields,
  hooks,
  providerFactory,
  pagination,
  errors,
};

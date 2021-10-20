'use strict';

const { yup } = require('@strapi/utils');
const { YupValidationError } = require('@strapi/utils').errors;
// eslint-disable-next-line node/no-extraneous-require
const { features } = require('@strapi/strapi/lib/utils/ee');
const { schemas } = require('../../../server/validation/user');

const handleYupError = error => {
  throw new YupValidationError(error);
};

const ssoUserCreationInputExtension = yup
  .object()
  .shape({
    useSSORegistration: yup.boolean(),
  })
  .noUnknown();

const validateUserCreationInput = data => {
  let schema = schemas.userCreationSchema;

  if (features.isEnabled('sso')) {
    schema = schema.concat(ssoUserCreationInputExtension);
  }

  return schema.validate(data, { strict: true, abortEarly: false }).catch(handleYupError);
};

module.exports = {
  validateUserCreationInput,
};

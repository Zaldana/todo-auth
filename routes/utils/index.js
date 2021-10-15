const { jwtMiddleware } = require("./shared/jwtMiddleware");
const { checkIsEmpty } = require("./shared/checkIsEmpty");
const { checkIsUndefined } = require("./shared/checkIsUndefined");
const { validateCreateData } = require("./authCreateMiddleware/validateCreateData");
const { validateLoginData } = require("./authLoginData/validateLoginData");
const { validateUpdateData } = require("./authUpdateMiddleware/validateUpdateData")
const { errorHandler } = require("./shared/errorHandler")

module.exports = {
    checkIsEmpty,
    checkIsUndefined,
    validateCreateData,
    validateLoginData,
    validateUpdateData,
    jwtMiddleware,
    errorHandler
}
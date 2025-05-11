const jwtLib = require( './lib/jwtLib' );
const jwtRoles = require( './lib/jwtRoles' );


module.exports = {
    verifyJwt: jwtLib.verifyJwt,
    verifyJwtNoThrow: jwtLib.verifyJwtNoThrow,
    verifyVisitorNoThrow: jwtLib.verifyVisitorNoThrow,
    jwtClientId: jwtLib.jwtClientId,
    visitorClientId: jwtLib.visitorClientId,
    isJwtExpired: jwtLib.isJwtExpired,
    verifyJwtAndRole: jwtLib.verifyJwtAndRole,
    throwUsedTokenError: jwtLib.throwUsedTokenError,
    doesJwtUserHasRole: jwtLib.doesJwtUserHasRole,
    getNameOfRole: jwtRoles.getNameOfRoleFromCode,
    getCodeOfRole: jwtRoles.getCodeFromNameOfRole
};


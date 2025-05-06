module.exports = {
    getJwtSuperAdminRoleCode,
    getJwtFacilityAdminRoleCode,
    getJwtOrganizationAdminRoleCode,
    getJwtUnitAdminRoleCode,
    getJwtAdminRoleCode,
    getJwtSellerRoleCode,
    getJwtEditorRoleCode,
    getNameOfRoleFromCode,
    getCategoryEditorRoleCode,
    getPhysicianRoleCode,
    getEDAdminRoleCode
}

function getJwtSuperAdminRoleCode() {
    return "su";
}

function getJwtFacilityAdminRoleCode() {
    return "fa";
}

function getJwtOrganizationAdminRoleCode() {
    return "oa";
}
function getJwtUnitAdminRoleCode() {
    return "ua";
}

function getJwtAdminRoleCode() {
    return "ad";
}

function getJwtSellerRoleCode() {
    return "se";
}

function getJwtEditorRoleCode() {
    return "ie";
}

function getCategoryEditorRoleCode() {
    return "ce";
}

function getPhysicianRoleCode() {
    return "ph";
}

function getEDAdminRoleCode() {
    return "ea";
}

function getNameOfRoleFromCode( roleCode ) {
    switch ( roleCode ) {
        case "ad":
            return "admin";
        case "su":
            return "super admin";
        case "fa":
            return "facility admin";
        case "oa":
            return "organization admin";
        case "ua":
            return "unit admin";
        case "se":
            return "seller";
        case "ie":
            return "item editor";
        case "ce":
            return "category editor";
        case "ph":
            return "physician";
        case "ea":
            return "ed admin";
        default:
            return "user";
    }
}

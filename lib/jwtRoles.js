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
    const codesToCategory = {
        "ad": "admin",
        "su": "super admin",
        "fa": "facility admin",
        "oa": "organization admin",
        "ua": "unit admin",
        "se": "seller",
        "ie": "item editor",
        "ce": "category editor",
        "ph": "physician",
        "ea": "ed admin",
    }
    return codesToCategory[ roleCode ] || "user";
}

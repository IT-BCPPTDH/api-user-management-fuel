const HTTP_STATUS = {
    OK: "200",
    CREATED: "201",
    NO_CONTENT: "204",
    BAD_REQUEST: "400",
    UNAUTHORIZED: "401",
    FORBIDDEN: "403",
    NOT_FOUND: "404",
    METHOD_NOT_ALLOWED: "405",
    INTERNAL_SERVER_ERROR: "500",
    SERVICE_UNAVAILABLE: "503",
};

const STATUS_MESSAGE = {
    CRED_NOT_FOUND : "No user credentials found for the provided JDE.",
    USER_LOGGEDIN : "User has logged in.",
    SUCCESS_LOGIN: "Login successfull",
    ERR_AUTH: "Error authenticating user: ",
    INVALID_JDE: "Invalid JDE or Password",
    SUCCESS_LOGOUT: "User logged out successfully",
    FAILED_LOGOUT: "Failed to logout user",
    ERR_LOGOUT: "Error logging out user:",
    SUCCESS_RESET_PASS: "Password reset successful",
    ERR_RESET_PASS: "Error resetting password:",
    SUCCESS_CREATE_USER: "User Created Successfully",
    ERR_CREATE_USER: "Failed to create user",
    FAILED_GET_USER: "Failed to retrieve user",
    FAILED_GET_ALL_USER: "Error getting all users:",
    FAILED_PAGINATED_USER: "Error getting users paginated:",
    SUCCESS_UPDATE_USER : "User updated successfully.",
    ERR_UPDATE_USER: "Error updating user:",
    SUCCESS_DEL_USER: "User deleted from database",
    ERR_DEL_USER: "Deleting user error: "
}

module.exports = {
    HTTP_STATUS,
    STATUS_MESSAGE
}

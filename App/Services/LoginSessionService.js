app.service('loginSessionService', function () {
    this.username = "";
    this.user_type = "";
    this.user_index = "";
    this.user_status = "";

    this.addSessionDetails = function (username, user_type, user_index, user_status) {
        this.username = username;
        this.user_type = user_type;
        this.user_index = user_index;
        this.user_status = user_status;
    }
    this.clearSession = function () {
        this.username = "";
        this.user_type = "";
        this.user_index = "";
        this.user_status = "";
    }

});
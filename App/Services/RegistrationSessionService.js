app.service('registrationSessionService', function () {
    this.nic_no = "";
    this.fname = "";
    this.mname = "";
    this.lname = "";
    this.oname = "";
    this.email = "";
    this.status = "";
    this.regusername = "";
    this.regpassword = "";
    this.confirmpassword = "";

    this.add1 = "";
    this.add2 = "";
    this.add3 = "";
    this.mobileno = "";
    this.experience = "";
    this.aboutorganization = "";
    this.dob = "";
    this.gender = "";
    this.display = "";

    this.seekerStep1 = function (nic_no, fname, mname, lname, email, status, regusername, regpassword) {
        this.nic_no = nic_no;
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
        this.email = email;
        this.status = status;
        this.regusername = regusername;
        this.regpassword = regpassword;
    }
    this.guidanceStep1 = function (nic_no, fname, mname, lname, email, regusername, regpassword) {
        this.nic_no = nic_no;
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
        this.email = email;
        this.regusername = regusername;
        this.regpassword = regpassword;
    }
    this.employerStep1 = function (oname, email, regusername, regpassword) {
        this.oname = oname;
        this.email = email;
        this.regusername = regusername;
        this.regpassword = regpassword;
    }
    this.seekerStep2 = function (add1, add2, add3, mobileno, dob, gender, display) {
        this.add1 = add1;
        this.add2 = add2;
        this.add3 = add3;
        this.mobileno = mobileno;
        this.dob = dob;
        this.gender = gender;
        this.display = display;
    }
    this.guidanceStep2 = function (add1, add2, add3, mobileno, experience, dob, gender, display) {
        this.add1 = add1;
        this.add2 = add2;
        this.add3 = add3;
        this.mobileno = mobileno;
        this.experience = experience;
        this.dob = dob;
        this.gender = gender;
        this.display = display;
    }
    this.employerStep2 = function (add1, add2, add3, mobileno, aboutorganization) {
        this.add1 = add1;
        this.add2 = add2;
        this.add3 = add3;
        this.mobileno = mobileno;
        this.aboutorganization = aboutorganization;
    }

    this.seekerStep3 = function (qualifications) {
        this.qualificatios_array = qualifications.slice();
    }

    this.viewSeekerStep1 = function () {
        console.log("nic no = " + this.nic_no);
        console.log("fname = " + this.fname);
        console.log("mname =" + this.mname);
        console.log("lname =" + this.lname);
        console.log("email = " + this.email);
        console.log("status = " + this.status);
        console.log("username = " + this.regusername);
        console.log("password = " + this.regpassword);
    }
    this.viewEmployerStep1 = function () {
        console.log("oname = " + this.oname);
        console.log("email = " + this.email);
        console.log("username = " + this.regusername);
        console.log("password = " + this.regpassword);
    }
    this.viewGuidanceStep1 = function () {
        console.log("nic no = " + this.nic_no);
        console.log("fname = " + this.fname);
        console.log("mname = " + this.mname);
        console.log("lname = " + this.lname);
        console.log("email = " + this.email);
        console.log("username = " + this.regusername);
        console.log("password = " + this.regpassword);
    }
    this.viewSeekerStep2 = function () {
        console.log("add1 = " + this.add1);
        console.log("add2 = " + this.add2);
        console.log("add3 =" + this.add3);
        console.log("mobileno =" + this.mobileno);
        console.log("dob = " + this.dob);
        console.log("gender = " + this.gender);
        console.log("display = " + this.display);
    }
    this.viewGuidanceStep2 = function () {
        console.log("add1 = " + this.add1);
        console.log("add2 = " + this.add2);
        console.log("add3 =" + this.add3);
        console.log("mobileno =" + this.mobileno);
        console.log("experience = " + this.experience);
        console.log("dob = " + this.dob);
        console.log("gender = " + this.gender);
        console.log("display = " + this.display);
    }
    this.viewEmployerStep2 = function () {
        console.log("add1 = " + this.add1);
        console.log("add2 = " + this.add2);
        console.log("add3 =" + this.add3);
        console.log("mobileno =" + this.mobileno);
        console.log("aboutorganization = " + this.aboutorganization);
    }
    this.viewSeekerStep3 = function () {
        console.log(this.qualificatios_array);
    }

});
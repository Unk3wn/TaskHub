exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userTest = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminTest = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.studentTest = (req, res) => {
    res.status(200).send("Student Content.");
};

exports.teacherTest = (req, res) => {
    res.status(200).send("Teacher Content.");
};


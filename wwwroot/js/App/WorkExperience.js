function AddWorkExperience() {
    var fromDate = document.getElementById("fromDate").value;
    var toDate = document.getElementById("toDate").value;
    var positionTitle = document.getElementById("positionTitle").value;
    var department = document.getElementById("department").value;
    var monthlySalary = document.getElementById("monthlySalary").value;
    var salaryGrade = document.getElementById("salaryGrade").value;
    var statusOfAppointment = document.getElementById("statusOfAppointment").value;
    var govtService = document.getElementById("govtService").value;

    if (positionTitle.length > 0) {
        $.ajax({
            type: 'Post',
            url: '/Employee/AddWorkExperienceToList',
            data: {
                fromDate: fromDate,
                toDate: toDate,
                positionTitle: positionTitle,
                department: department,
                monthlySalary: monthlySalary,
                salaryGrade: salaryGrade,
                statusOfAppointment: statusOfAppointment,
                govtService: govtService
            },
            success: function (data) {
                $("#work-experience-listing").html(data);
            }
        });
    }
}
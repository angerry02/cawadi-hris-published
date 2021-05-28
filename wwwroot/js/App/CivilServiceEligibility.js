function AddEligibility() {
    var programName = document.getElementById("programName").value.trim();
    var rating = document.getElementById("rating").value;
    var date = document.getElementById("date").value;
    var placeOfExamination = document.getElementById("placeOfExamination").value;
    var licenseNumber = document.getElementById("licenseNumber").value;
    var licenseDateValidity = document.getElementById("licenseDateValidity").value;

    if (programName.length > 0) {
        $.ajax({
            type: 'Post',
            url: '/Employee/AddEligibilityToList',
            data: {
                programName: programName,
                rating: rating,
                date: date,
                placeOfExamination: placeOfExamination,
                licenseNumber: licenseNumber,
                licenseDateValidity: licenseDateValidity
            },
            success: function (data) {
                $("#civil-service-listing").html(data);
            }
        });
    }
}
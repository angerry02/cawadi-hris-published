function AddLD() {
    var fromDate = document.getElementById("fromDate3").value;
    var toDate = document.getElementById("toDate3").value;
    var learningAndDevelopmentTitle = document.getElementById("learningAndDevelopmentTitle").value;
    var numberOfHours = document.getElementById("numberOfHours").value;
    var typeOfLD = document.getElementById("typeOfLD").value;
    var conductedSponsoredBy = document.getElementById("conductedSponsoredBy").value;
    
    if (learningAndDevelopmentTitle.length > 0) {
        $.ajax({
            type: 'Post',
            url: '/Employee/AddLDToList',
            data: {
                fromDate: fromDate,
                toDate: toDate,
                learningAndDevelopmentTitle: learningAndDevelopmentTitle,
                numberOfHours: numberOfHours,
                typeOfLD: typeOfLD,
                conductedSponsoredBy: conductedSponsoredBy
            },
            success: function (data) {
                $("#partial-view-LD").html(data);
            }
        });
    }
}
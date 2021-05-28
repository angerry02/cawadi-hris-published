function AddVoluntaryWork() {
    var nameAddressOrg = document.getElementById("nameAddressOrg").value;
    var fromDate = document.getElementById("fromDate2").value;
    var toDate = document.getElementById("toDate2").value;
    var numberOfHrs = document.getElementById("numberOfHrs").value;
    var positionNature = document.getElementById("positionNature").value;
    
    if (nameAddressOrg.length > 0) {
        $.ajax({
            type: 'Post',
            url: '/Employee/AddVoluntaryWorkToList',
            data: {
                nameAddressOrg: nameAddressOrg,
                fromDate: fromDate,
                toDate: toDate,
                numberOfHrs: numberOfHrs,
                positionNature: positionNature
            },
            success: function (data) {
                $("#partial-view-voluntary-work").html(data);
            }
        });
    }
}
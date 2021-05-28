function AddOtherInfosToList(infoType) {
    var otherInfoDescription = '';

    if (infoType == '0')
        otherInfoDescription = document.getElementById("otherInfoDescription1").value;
    else if (infoType == '1')
        otherInfoDescription = document.getElementById("otherInfoDescription2").value;
    else
        otherInfoDescription = document.getElementById("otherInfoDescription3").value;

    if (otherInfoDescription.length > 0) {
        $.ajax({
            type: 'Post',
            url: '/Employee/AddOtherInfosToList',
            data: {
                otherInfoDescription: otherInfoDescription,
                infoType: infoType
            },
            success: function (data) {
                if (infoType == '0')
                    $("#partial-view-LD-special-skill").html(data);
                else if (infoType == '1')
                    $("#partial-view-LD-nonacademic-distinction").html(data);
                else
                    $("#partial-view-LD-membership-in-organization").html(data);
            }
        });
    }
}
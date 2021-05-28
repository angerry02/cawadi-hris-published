function AddReferences() {
    var fullName = document.getElementById("referencesFullName").value;
    var address = document.getElementById("referencesAddress").value;
    var contactNo = document.getElementById("referencesTelNo").value;
    
    if (fullName.length > 0) {
        $.ajax({
            type: 'Post',
            url: '/Employee/AddReferences',
            data: {
                fullName: fullName,
                address: address,
                contactNo: contactNo
            },
            success: function (data) {
                $("#partial-view-employee-references").html(data);
            }
        });
    }
}
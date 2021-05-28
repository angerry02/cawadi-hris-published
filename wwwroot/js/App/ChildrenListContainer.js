function AddChildren() {
    var childrenFullname = document.getElementById("children-full-name").value.trim();
    var childrenBirthdate = document.getElementById("children-birth-date").value;
    if (childrenFullname.length > 0
        && childrenBirthdate.length > 0) {
        $.ajax({
            type: 'Post',
            url: '/Employee/AddChildrenToList',
            data: { childrenFullname: childrenFullname, childrenBirthdate: childrenBirthdate },
            success: function (data) {
                $("#children-listing").html(data);
            }
        });
    }
}
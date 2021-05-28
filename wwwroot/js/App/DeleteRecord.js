function ConfirmDelete(id, deleteURL, containerId) {
    $("#containerId").val(containerId);
    $("#deleteURL").val(deleteURL);
    $("#deleteId").val(id);
    $("#modal-cofirm-delete").modal('show');
}

function Delete() {
    var id = document.getElementById("deleteId").value;
    var url = document.getElementById("deleteURL").value;
    var containerId = document.getElementById("containerId").value;

    console.log('id: ' + id + ' url: ' + url + ' containerId: ' + containerId);

    $.ajax({
        type: 'Get',
        url: url,
        data: { id: id },
        success: function (data) {
            $("#modal-cofirm-delete").modal("hide");
            $("#" + containerId).html(data);
        }
    });
}

function ConfirmDelete2(id) {
    $("#deleteId2").val(id);
    $("#modal-cofirm-delete2").modal('show');
}
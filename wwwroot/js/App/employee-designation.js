var inputEmpId = document.getElementById("employee_employeeId2");

inputEmpId.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-find-employee").click();
    }
});

function LoadEmployeeData() {
    var empId = document.getElementById("employee_employeeId2").value;
    if (empId.length > 0) {
        $.ajax({
            type: 'Get',
            url: '/Employee/ManageDesignation',
            data: {
                id: empId
            },
            success: function (data) {
                $("#partial-view-employee-designation-table").html(data);
                $("#btn-add-edit-designation").prop("disabled", false);
                $(".btn-process").button('reset');
            }
        });
    }
}

function SelectNew() {
    $.ajax({
        type: 'Get',
        url: '/Employee/ManageDesignation',
        data: {
            id: empId
        },
        success: function (data) {
            $("#partial-view-employee-designation-table").html(data);
        }
    });
}

$(function () {
    $("#loaderbody").addClass('hide');

    $(document).bind('ajaxStart', function () {
        $("#loaderbody").removeClass('hide');
    }).bind('ajaxStop', function () {
        $("#loaderbody").addClass('hide');
    });
})

showInPopup = (url, title) => {
    $.ajax({
        type: 'GET',
        url: url,
        success: function (res) {
            $('#form-modal .modal-form-body').html(res);
            $('#form-modal .modal-title').html(title);
            $('#form-modal').modal('show');
        }
    })
}

jQueryAjaxPost = form => {
    try {
        $.ajax({
            type: 'POST',
            url: form.action,
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (res) {
                if (res.isValid) {
                    $('#partial-view-employee-designation-table').html(res.html)
                    $('#form-modal .modal-form-body').html('');
                    $('#form-modal .modal-title').html('');
                    $('#form-modal').modal('hide');
                }
                else
                    $('#form-modal .modal-form-body').html(res.html);
            },
            error: function (err) {
                console.log(err)
            }
        })
        //to prevent default form submit event
        return false;
    } catch (ex) {
        console.log(ex)
    }
}
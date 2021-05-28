function SameAddressOnChange(x) {
    var readOnly = false;
    if (x.checked) {
        document.getElementById("permanent_houseBlockLotNo").value = document.getElementById("residential_houseBlockLotNo").value;
        document.getElementById("permanent_street").value = document.getElementById("residential_street").value;
        document.getElementById("permanent_subdivisionVillage").value = document.getElementById("residential_subdivisionVillage").value;
        document.getElementById("permanent_barangay").value = document.getElementById("residential_barangay").value;
        document.getElementById("permanent_cityMunicipality").value = document.getElementById("residential_cityMunicipality").value;
        document.getElementById("permanent_province").value = document.getElementById("residential_province").value;
        document.getElementById("permanent_zipCode").value = document.getElementById("residential_zipCode").value;
        document.getElementById("permanent_houseBlockLotNo").value = document.getElementById("residential_houseBlockLotNo").value;
        readOnly = true;
    }
    // This will disable all the children of the div
    var nodes = document.getElementById("permanent-address-container").getElementsByTagName('input');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].readOnly = readOnly;
    }
}
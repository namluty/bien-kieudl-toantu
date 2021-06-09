function chuyendoi() {
    let soTien = parseInt(document.getElementById("soTien").value);
    let from = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value);
    let ketqua = soTien*(from/to);
    document.write(+ketqua);
}
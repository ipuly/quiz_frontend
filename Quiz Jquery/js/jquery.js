$(document).ready(function () {

    // Alert
    $("#btnAlert").click(function (e) {
        e.preventDefault();
        window.scrollTo(0, 0)
        $("#divAlert").removeClass("d-none");
        const nama = $("#inputNama").val();
        $("#alertText").html("Terima kasih " + nama + ", link sudah dapat dilihat di email Anda.");
    });

    $("#btnClose").click(function () {
        $("#divAlert").addClass("d-none");
    });

    // Change Image
    $(".card").click(function (e) {
        e.preventDefault();
        const mainImg = $("img", this).attr("src");
        $("#preview").attr("src", mainImg);
        $("#preview").attr("height", "560px");
        $("#preview").attr("height", "609px");

        window.scrollTo({ top: 0, behavior: "smooth" });
    })

    $(".side").click(function (e) {
        e.preventDefault();
        const mainImg = $("img", this).attr("src");
        $("#preview").attr("src", mainImg);
        $("#preview").attr("height", "560px");
        $("#preview").attr("height", "609px");
    })

    $("#form-shipping").submit(function (e) {
        e.preventDefault();

        const firstName = $("#InputFirstName", this).val();
        const lastName = $("#InputLastName", this).val();
        const fullName = firstName + " " + lastName;
        const address = $("#InputAddress", this).val();

        $("#div-shipping").addClass("d-none");
        $("#result").removeClass("d-none");

        $("h4", "#result").text("Terimakasih, " + fullName);
        $("p", "#result").text("Paket akan dikirim ke " + address + " secepatnya");
    });

    $("button", "#result").click(function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });
})
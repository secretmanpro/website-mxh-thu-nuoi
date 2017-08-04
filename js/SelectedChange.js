$('#checkStatus').change(function() {
    showContent();
});

$('#checkQuestion').change(function() {
    showContent();
});

$('#checkPost').change(function() {
    showContent();
});

$('#checkPic').change(function() {
    showContent();
});

function showContent() {
    var chkStatus = $('#checkStatus').is(":checked");
    var chkQuestion = $('#checkQuestion').is(":checked");
    var chkPost = $('#checkPost').is(":checked");
    var chkPic = $('#checkPic').is(":checked");
    $("#contentState").toggle(chkStatus);
    $("#contentQuestion").toggle(chkQuestion);
    $("#contentBaiViet").toggle(chkPost);
    $("#contentPic").toggle(chkPic);
}

function setShareLinks() {
   var pageUrl = encodeURIComponent(document.URL);
   var description = "default Text";

    elements = document.querySelectorAll(".fa.fa-facebook");
    Array.prototype.forEach.call(elements, function(el) {
        var pageUrl = encodeURIComponent(el.getAttribute('data-url'));
        var desc = "";
        if(el.getAttribute('data-desc')) {
            desc = encodeURIComponent(el.getAttribute('data-desc'));
        }
        el.addEventListener("click", function() {
            url = "https://www.facebook.com/sharer/sharer.php?u=" + pageUrl+"&quote="+desc;
            socialWindow(url);
        });
    });

    elements = document.querySelectorAll(".fa.fa-twitter");
    Array.prototype.forEach.call(elements, function(el) {
            var pageUrl = encodeURIComponent(el.getAttribute('data-url'));
        var desc = "";
        if(el.getAttribute('data-desc')) {
            desc = encodeURIComponent(el.getAttribute('data-desc'));
        }
        el.addEventListener("click", function() {
            url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + desc;
            socialWindow(url);
        });
    });

      elements = document.querySelectorAll(".fa.fa-envelope");
    Array.prototype.forEach.call(elements, function(el) {
        var pageUrl = encodeURIComponent(el.getAttribute('data-url'));
        var desc = "";
        if(el.getAttribute('data-desc')) {
            desc = encodeURIComponent(el.getAttribute('data-desc') + "\n\n\n"+ pageUrl);
        }
        var email_address = "";
        var title ="sharing title";
        el.addEventListener("click", function() {
            url ="mailto:" + email_address + "?subject=" + title + "&body=" + desc
            window.location.href = url;
        });
    });
};

function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url,"NewWindow",params);
};
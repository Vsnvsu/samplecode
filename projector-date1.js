
function NextDateWeb3907(text, NextDate) {

function NextTime(nodes) {
    nodes.forEach(node => {
        if (node instanceof HTMLScriptElement) {
            return;
        }
        if (node instanceof HTMLStyleElement) {
            return;
        }
        if (node instanceof Text) {
            if (node.nodeValue.match(text)) {
                node.nodeValue = node.nodeValue.replace(text, NextDate);
            }
        }
        else {
            NextTime(Array.from(node.childNodes));
        }
    });
}

NextTime(Array.from(document.body.childNodes));
}

function datetime_f3907(text, trt) {

if(typeof(change_webinar_time) != "undefined" && change_webinar_time !== null && change_webinar_time == 1){
var matches = document.querySelectorAll('input[name="webinar_time"]');
for (var i = 0; i < matches.length; i++) {
if (matches[i].value == text) matches[i].value = trt;
}
}
var matches = document.querySelectorAll('input[name="datetime"]');
for (var i = 0; i < matches.length; i++) {
    if (matches[i].value == text) matches[i].value = trt;
}

matches = document.querySelectorAll('select[name="datetime"]');
for (var i = 0; i < matches.length; i++) {
    for (var z = 0; z < matches[i].options.length; z++) {
        if (matches[i].options[z].value == text) {
            matches[i].options[z].value = trt;
        }
        if (matches[i].options[z].text == text) {
            matches[i].options[z].text = trt;
        }
    }
}
}

function set__adate(){

    var months=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']

    var day = new Date();
    hr = day.getUTCHours()
    if (hr > 11) {
        day.setUTCDate(day.getUTCDate() + 1)
    }

    NextDateWeb3907("{WEBDAY}", "7");
    datetime_f3907("{WEBDAY}", "7");
    NextDateWeb3907("{WEBMONTH}", "октября");
    datetime_f3907("{WEBMONTH}", "октября");
    NextDateWeb3907("{WEBTIME}", "15:00");
    datetime_f3907("{WEBTIME}", "15:00");
}

set__adate()
setTimeout(set__adate, 3000);

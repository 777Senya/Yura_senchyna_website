pageLoaded.innerHTML = (new Date()).toLocaleTimeString();
btn.addEventListener('click', makeAjax);


function makeAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var clientData = JSON.parse(xhr.responseText);
            name_article.innerHTML = clientData.name;
            article_cont.innerHTML = clientData.info;
            article_cont_2.innerHTML = clientData.info_2;
        }
    }
    xhr.open('GET', 'ajax/news_1.json', true);
    xhr.send();
}
var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var dataset = JSON.parse(this.responseText);
    addNewData(dataset);
  }
};

function addNewData(dataset) {
  var tbody = document.querySelector("#csie tbody");

  dataset.forEach((data, index) => {
    var row = tbody.insertRow(-1);
    row.insertCell(0).innerText = data.title;
    row.insertCell(1).innerText = data.showInfo[0]?.location || "無地點";
    row.insertCell(2).innerText = data.showInfo[0]?.price || "免費/無票價資訊";
  });
}

function delOldData() {
  const tbody = document.querySelector("#csie tbody");
  if (tbody) {
    tbody.innerHTML = ""; // 清空所有資料列
  }
}

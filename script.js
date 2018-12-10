function  getHttpRequest () {
  request = new XMLHttpRequest()
  request.onreadystatechange = function (event) {
    if (this.readyState === 4 && this.status === 200) {
      var resp = JSON.parse(this.responseText)
      callback(resp)
    }
  }
  request.open("GET", "data.json")
  request.send()
}


function callback(arr) {
  for (var item in arr){
      var div = document.body.appendChild(
        document.createElement("div")
      )
      var pic = div.appendChild(
        document.createElement("img")
      )
      pic.style = `
        margin-top: 10px;
        width: 220px;
        height: 160px;
      `
      pic.src = arr[item].ref

      var text = div.appendChild(
        document.createElement("p")
      )
      text.style = `
        margin-top: 2px;
        font-size: 18px;
        color: #2874A6;
        text-transform: uppercase;
      `
      text.innerText = arr[item].title
  }
}

//MDNからコピペしてきた関数
// function postData(url = ``, data = {}) {
const sendData = (url = ``, data = {}, _method = "POST") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  })
    .then(response => response.json()) // レスポンスの JSON を解析
    .then(json =>{
      localStorage.token = json.token;
      localStorage.id = json.id;
      localStorage.name = json.name;
      localStorage.bio = json.bio;
      window.location.href = './mypage.html';})
    // .then(json =>{
    //   console.log(json)
      //window.location.href = './mypage.html'; //アカウント登録画面に強制遷移
    // });
}

//---------★投稿一覧Click用
const sendGETData = (url = ``, data = {}, _method = "GET") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(response => response.json()) // レスポンスの JSON を解析
    .then(json =>{
      let timeline = ""; // 指定した数のオブジェクトを入れる箱ができました
      json.forEach( element => {
        timeline += `<p>${element.text}</p>`
      });
      document.getElementById('posts_area').innerHTML = timeline;
    })
    // .catch(error => console.log(`Error: $(error)`)); // エラー内容が出力される
}

//---------★ユーザー一覧Click用
const sendGETDataUsers = (url = ``, data = {}, _method = "GET") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(response => response.json()) // レスポンスの JSON を解析
    .then(json =>{
      let timeline = ""; // 指定した数のオブジェクトを入れる箱ができました
      json.forEach( element => {
        timeline += `<p>${element.text}</p>`
      });
      document.getElementById('users_area').innerHTML = timeline;
    })
    // .catch(error => console.log(`Error: $(error)`)); // エラー内容が出力される
}

//---------★Show用
const sendGETData02 = (url = ``, data = {}, _method = "GET") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(response => response.json()) // レスポンスの JSON を解析
    .then(json =>{
      let timeline = ""; // 指定した数のオブジェクトを入れる箱ができました
      json.forEach(element => {
        timeline += `<p>${element.text}</p>`
      });
      document.getElementById('myposts_area').innerHTML = timeline;
    })
    // .catch(error => console.log(`Error: $(error)`)); // エラー内容が出力される
}

const sendDataWithToken = (url = ``, data = {}, _method = "POST") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  })
  .then(response => response.json())
  .then(json => {
      localStorage.token = json.token;
      localStorage.id = json.id;
      localStorage.name = json.name;
      localStorage.bio = json.bio;
    window.location.href = './mypage.html';
  })
}

//投稿用
const sendDataPosts = (url = ``, data = {}, _method = "POST") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  })
  .then(response => response.json())
  .then(json => {
    window.location.href = './mypage.html';
  })
}

const sendPUTData = (url = ``, data = {}, _method = "PUT") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(data || "null"),
  })
    .then(response => response.json()); // レスポンスの JSON を解析
}

const sendDeleteData = (url = ``, _method = "DELETE") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(response => response.json()) // レスポンスの JSON を解析
    .then(json =>{
      localStorage.clear();
      alert("ユーザー削除完了です！");
      window.location.href = './index.html'; //アカウント登録画面に強制遷移
    })
}

const sendDeletePOST = (url = ``, _method = "DELETE") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(response => response.json()) // レスポンスの JSON を解析
    .then(json =>{
      localStorage.clear();
      alert("投稿削除完了です！");
      window.location.href = './login.html'; //ログイン画面に強制遷移
    })
}





//フォロー
const follow_common = (url = ``, data = {}, _method = "POST") => {
  return fetch(url, {
    method: _method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(console.log("フォロー完了"))
}

// フォロワー
const myFollow_common = (url = ``, data = {}, _method = "GET") => {
  return fetch(url, {
    method: _method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(response => response.json())
    .then(json => {
      let userText = "";
      json.forEach(element => {
        userText += `<p>${element.name}</p>`
      });
      document.getElementById('follower').innerHTML = userText;
    })
}
const loadUsers = () => {
  fetch('./data/data.json') //json파일 읽어오기
    .then((response) => response.json()) //읽어온 데이터를 json으로 변환
    .then((json) => {
      data = json.users; //json에 있는 items만 받아오기

      console.log(data);
      data.forEach((user) => {
        const name = document.createElement('div');
        const email = document.createElement('div');
        const phone = document.createElement('div');
        const br = document.createElement('br');
        name.textContent = user.name;
        email.textContent = user.email;
        phone.textContent = user.phone;
        const userInfo = document.querySelector('.user');
        userInfo.appendChild(name);
        userInfo.appendChild(email);
        userInfo.appendChild(phone);
        userInfo.appendChild(br);
      });
    });
};

loadUsers();

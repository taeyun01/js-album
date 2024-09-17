const API_URL = "https://animal-api-two.vercel.app";

const $content = document.querySelector("div.content");
let template = [];

const getData = async (name) => {
  let response = await fetch(`${API_URL}/${name}`);
  try {
    if (response.ok) {
      let data = await response.json();
      data.photos.forEach((photo) => {
        //* 먼저 template배열에 여러개 이미지 태그들을 넣어준다
        template += `<img src=${photo.url} />`;
      });
      //* 그리고 나서 한번에 렌더링 시켜준다.
      $content.innerHTML = template;
    } else {
      console.log("데이터를 불러오는 중 오류가 발생했습니다.");
    }
  } catch (err) {}
};

getData("panda");

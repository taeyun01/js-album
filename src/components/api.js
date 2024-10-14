const API_URL = "https://animal-api-two.vercel.app";

export const request = async () => {
  let response = await fetch(API_URL);
  try {
    if (response.ok) {
      let data = await response.json();
      return data.photos;
    } else {
      console.log("데이터를 불러오는 중 오류가 발생했습니다.");
    }
  } catch (err) {
    console.log(err);
  }
};

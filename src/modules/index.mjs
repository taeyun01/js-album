import { num, add, User } from "./test.mjs";
import * as testModule from "./test.mjs";
import User2 from "./test.mjs";

console.log(num);
console.log(add(1, 2));
console.log(new User("홍길동"));

//* * as 로 export 한 모듈을 전부 가져와 사용할 수 있다.
console.log(testModule.num);
console.log(testModule.add(1, 2));
console.log(new testModule.User("홍길동"));

console.log(new User2("홍길동22"));

//* 모듈은 하나의 파일을 의미하고 이 모듈들은 각각 자신만의 스코프를 가지고 있다.
//* 일반적으로 모듈 내부에 작성된 기능들은 외부에 공유할 수 없고 내부에서만 사용 가능했다.
//* export를 식별자 앞에 붙여주면 해당 식별자는 공개상태로 변경되어 다른 파일에서는 import를 통해 공개된 식별자를 사용할 수 있다.

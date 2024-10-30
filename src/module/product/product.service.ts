import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  // getAll = async () => {
  //   return { id: 1, name: 'earphone', price: 150000 };
  // };

  // 메서드 선언 스타일이 더 보편적이고 권장됩니다. 그 이유는 다음과 같습니다:
  // 가독성: 메서드 선언 스타일은 더 명확하고 읽기 쉬운 구조를 가지고 있습니다.
  // 유지보수성: 메서드 선언 스타일은 클래스 프로토타입에 메서드를 추가하므로 메모리 사용이 더 효율적입니다.

  async getAll() {
    return { id: 1, name: 'earphone', price: 150000 };
  }
}

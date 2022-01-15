// board의 구조를 정의하기 위해서 interface를 사용하겠다.
// 타입체크은 필요하나 인스턴스를 지금 생성할 이유가 없기때문에 지금은 interface로 생성
// interface나 class로 정의가능

// 이것이 어디에 쓰일까? service에 저번에 정의했던 boards 변수에 쓰인다.
export interface Board{
	id:string;
	title:string;
	description:string;
	status:BoardStatus; // 게시물의 공개 비공개 상태를 나타내는 프로퍼티이다.
	// 이런식의 개인 정의에 의한 상태를 나타내기 위해서는 enum 을 이용한다.
}

export enum BoardStatus {
	PUBLIC = 'PUBLIC',
	PRIVATE = 'PRIVATE'
}
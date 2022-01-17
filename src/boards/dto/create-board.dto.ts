// 클래스는 인터페이스와 다르게 런타임에서 실행되기 때문에,
// 파이프를 이용할 때 더 유용하다.
// 파이프를 통해 유효성을 체크할 수 있다.
// 이렇게 연결해놓으면 나중에 Pipe를 사용할때 알아서 현재 데코레이터들을 적용하게된다.
import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
	@IsNotEmpty()
	title:string;
	
	@IsNotEmpty()
	description:string;
}
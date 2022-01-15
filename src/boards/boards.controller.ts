import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model'

@Controller('boards') //1 요청이 처음 걸러지는곳 (boards)
export class BoardsController {
	constructor(
		private boardsService: BoardsService
	) {}
	
	@Get('/') // root일 경우 이 부분의 핸들러가 시행된다.
	getAllBoard(): Board[] {
		// service를 이용하여 요청 해결
		return this.boardsService.getAllBoards();
		// controller에서 return 한 값이 브라우저에서 볼 수 있게된다.
	}
}

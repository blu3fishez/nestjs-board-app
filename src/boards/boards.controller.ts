import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model'
import { CreateBoardDto } from './dto/create-board.dto'

@Controller('boards') //1 요청이 처음 걸러지는곳 (boards)
export class BoardsController {
	constructor(
		private boardsService: BoardsService
	) {}
	
	@Get('/') // root일 경우 이 부분의 핸들러가 시행된다.
	getAllBoard(): string {
		// service를 이용하여 요청 해결
		return this.boardsService.getAllBoards() + `<form action="" method="post">
        <input type="text" name="title">
        <input type="text" name="description">
        <button type="submit" value="submit">   
    </form>`;
		// controller에서 return 한 값이 브라우저에서 볼 수 있게된다.
	}
	
	@Post() // 테스트를 위한 post 요청은 postman 프로그램을 이용한다.
	createBoard(
		@Body() createBoardDto: CreateBoardDto
	): Board {
		// express 에서 reqest의 body는 req.body 라고 bodyParser 로 받아옴
		// Nestjs에서는 @Body('title') 하면 title에 대한 정보를 받고, @Body () 로 하면 모든 값을 받아올 수 있다.
		return this.boardsService.createBoard(createBoardDto);
	}
	
	@Get('/') // URL의 와일드셋(파라미터)을 가져오는 방법
	// 쿼리스트링도 @Param('id') 와 같이 가져오면된다.
	// @Param() 은 string 배열을 반환한다.
	getBoardById(@Query('id') id: string): Board{
		return this.boardsService.getBoardById(id);
	}
}

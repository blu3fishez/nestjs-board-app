import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
	private boards : Board[] = [];
	
	getAllBoards(): Board[] {
		return this.boards;
	}
	
	createBoard(createBoardDto: CreateBoardDto) {
		// 생성 로직을 만듬.
		const { title, description } = createBoardDto;
		// DTO란? data transfer object 로, 데이터 전송 시에 사용될 오브젝트에 대한 형식을 정의
		// 그렇게 함으로써 코드의 유지보수성을 높일 수 있고,
		// 더욱 안정적인 코드를 짤 수 있게된다.
		const board: Board = {
			id: uuid(),
			title, // ES6 이후에서는 이런 방식이 지원됨
			description,
			status:BoardStatus.PUBLIC
		}
		
		this.boards.push(board);
		return board;
	}
	
	getBoardById(id: string): Board {
		return this.boards.find(board => board.id === id);
	}
	
	deleteBoard(id: string): void {
		this.boards = this.boards.filter(board => board.id !== id); //filter method 이용
	}
	
	updateBoardStatus(id: string, status: BoardStatus): Board{
		const board = this.getBoardById(id);
		board.status = status;
		
	}
}

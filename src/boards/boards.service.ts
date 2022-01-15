import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
	private boards : Board[] = [];
	
	getAllBoards(): Board[] {
		return this.boards;
	}
	
	createBoard(title:string, description:string) {
		// 생성 로직을 만듬.
		const board: Board = {
			id: uuid(),
			title, // ES6 이후에서는 이런 방식이 지원됨
			description,
			status:BoardStatus.PUBLIC
		}
		
		this.boards.push(board);
		return board;
	}
}

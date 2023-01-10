import {Board} from "../entity/board.entity";

export class BoardDto{
    title: string
    content: string

    constructor() {
        this.title = "testTitle"
        this.content = "testContent"
    }

    toBoardDto(){
        const board = new Board()
        board.title = this.title
        board.content = this.content
        return board
    }
}
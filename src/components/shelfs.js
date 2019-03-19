import React,{Component} from "react"
import Proptypes from "prop-types"
import Books from "./books";
import "../App.css"
class Shelfs extends Component{
    static Proptypes = {
        books: Proptypes.array.isRequired,
        change: Proptypes.func.isRequired
    }
    render()
    {
        const {books,change} = this.props
       console.log("6 file mein pounch gaya",change)
        const shelfsbooks = books.map((book)=>
            <Books book={book} books={books} key={book.id} change={change}/> )
        return(
            <ol className="books-grid">
               {shelfsbooks}
            </ol>
        )
    }
}
export default Shelfs
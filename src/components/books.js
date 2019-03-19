import React,{Component} from "react"
import Proptypes from "prop-types"
import Changeshelf from "./changeshelf";
import "../App.css"
class Books extends Component {
    static Proptypes = {
        book : Proptypes.object.isRequired,
        books : Proptypes.array.isRequired,
        change : Proptypes.func.isRequired
    }
    render()
    {
        const {book,books,change} = this.props
        let  authors = book.authors.map((auth,id)=>
       {
            return <div className="book-authors" key={id}>{auth}</div>
        }
        )
        return(
            <div className="book">
                           <div className="book-top">
                             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage : `url("${book.imageLinks.thumbnail}")` }}></div>
                             <Changeshelf book={book} books={books} change={change} />
                           </div>
                           <div className="book-title">{book.title}</div>
                           {authors}   
                         </div>
        )
    }
}
export default Books
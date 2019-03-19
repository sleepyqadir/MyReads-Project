import React,{Component} from "react"
import Proptypes from "prop-types"
import Shelfs from "./shelfs";
import "../App.css"
class ListBooks extends Component{
    static Proptypes = {
        book : Proptypes.object.isRequired,
        books : Proptypes.array.isRequired,
        change : Proptypes.func.isRequired
    }
    state = {
        shelfchange :false
    }
    render()
    {
        const shelfstype = [
          {type: "currentlyReading", title:"Currently Reading"},
          {type: "read" , title: "Read"},
          {type: "wantToRead" , title:"Want To Read"}
        ]
        const { books, change } = this.props;
        const shelfs = shelfstype.map((item)=>
        {
            const shelfbooks = books.filter(book => book.shelf === item.type )
              return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{item.title}</h2>
                  <div className="bookshelf-books">
                  <Shelfs books={shelfbooks} change={change}/>
                  </div>
                  </div>
              )
        }
        )
        return(
            <div className="list-books-content">
               {shelfs}
                </div>
        )
    }
}
export default ListBooks
import React,{Component} from "react"
import Proptypes from "prop-types"
import "../App.css"
class Changeshelf extends Component {
  static proptypes = {
        book : Proptypes.object.isRequired,
        books : Proptypes.array.isRequired,
        change : Proptypes.func.isRequired
    }
    shelfchange = event => {
        this.props.change(this.props.book,event.target.value)
    }
    render()
    {
        const {book , books ,change} = this.props
        let currentshelf = "none"

        for (let item in books)
        {
            if (item.id === book.id)
            {
                currentshelf = item.shelf
                break
            }
        }
        return(
               <div className="book-shelf-changer">
        <select onChange={this.shelfchange} value={currentshelf}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
        )
    }
}
export default Changeshelf;
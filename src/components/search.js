import React,{Component} from "react"
import Proptypes from "prop-types"
import Books from "./books";
import * as BooksAPI from './BooksAPI'
import {Link} from "react-router-dom"
import "../App.css"

class Search extends Component{
    static proptypes = {
        books : Proptypes.array.isRequired,
        change : Proptypes.func.isRequired
    }
    state = {
        query : "",
        err : false,
        newbooks : []
    }
    getbooks = (event) => { 
        const query = event.target.value
        this.setState({
            query
        });
    if(query)
    {
        BooksAPI.search(query.trim(),20).then(books=>
            {
                books.length > 0 ? this.setState({newbooks:books}): this.setState({err:true})
            })
    }
   else
   
   { 
    this.setState({newbooks:[],err:false})
   }
  }
    render()
    {
      const {books , change} = this.props
      const {query,err,newbooks} = this.state
      const allbooks = newbooks.map((item)=>{
          return (
          <Books books={books} book={item} key={item.id} change={change}/>
       ) })  
      return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to="/">close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={query} onChange={this.getbooks}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {allbooks}
              </ol>
            </div>
          </div>   
        )
    }
}
export default Search
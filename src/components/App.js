import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import "../App.css"
import {BrowserRouter , Route , Link , Switch } from "react-router-dom"
import Search from "./search"
import ListBooks from './listbooks';
class BooksApp extends Component {
  constructor()
  {
    super()
    this.shelfchanged = this.shelfchanged.bind(this)
  }
  state = {
    books: []
  }
  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
      shelfchanged = (bookchanged,shelf) => {
      BooksAPI.update(bookchanged,shelf).then(response => {
        bookchanged.shelf = shelf;
        this.setState(prevstate=> ({
            books : prevstate.books
            .filter(book => book.id !== bookchanged.id)
            .concat(bookchanged)
        }))
      })
   }
  render() {  
  const {books} = this.state
  return (
      <BrowserRouter>      
      <Switch>
        <Route exact path="/" render={()=>
         <div className="list-books">
         <div className="list-books-title">
           <h1>MyReads</h1>
         </div>
         <ListBooks books={books} change={this.shelfchanged} />
         <div className="open-search">
					<Link to='/searchbooks'><button>search</button></Link>
				</div>
       </div>
        } />
        <Route exact path="/searchbooks" render={() =>
        <Search books={books} change={this.shelfchanged} />
      } />
      </Switch>
      </BrowserRouter>
    )
}
}
export default BooksApp


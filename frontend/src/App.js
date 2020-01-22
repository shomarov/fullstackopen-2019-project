import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import RecipeTitle from './components/Title'
import Recipe from './components/Recipe'
import NewRecipeForm from './components/NewRecipeForm'

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3001/recipes')
      console.log(response.data)
      setRecipes(response.data)
    }
    fetchData()
  }, [])

  const Titles = () => {
    return (
      <ul>
        {recipes.map(recipe => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <RecipeTitle title={recipe.title} />
          </Link>
        ))}
      </ul>
    )
  }

  const recipeById = id => recipes.find(recipe => recipe.id === Number(id))

  const padding = { padding: 5 }

  return (
    <div className='App'>
      <Router>
        <div>
          <Link style={padding} to='/'>
            home
          </Link>
          <Link style={padding} to='/recipes'>
            recipes
          </Link>
          <Link style={padding} to='/new'>
            new
          </Link>
          <Link style={padding} to='/login'>
            login
          </Link>
        </div>
        <Header />
        <Route exact path='/recipes' render={() => <Titles />} />
        <Route exact path='/new' render={() => <NewRecipeForm />} />
        <Route
          exact
          path='/recipes/:id'
          render={({ match }) => (
            <Recipe recipe={recipeById(match.params.id)} />
          )}
        />
      </Router>
    </div>
  )
}

export default App

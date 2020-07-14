import axios from 'axios'
import {
  GET_MOVIES
} from './actions.types'

export default {
  async [GET_MOVIES] () {
    const url = 'https://www.reddit.com/r/marvelstudios.json'
    const response = await axios.get(url)
    return response.data.data.children
  }
}

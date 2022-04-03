// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import users from '@src/views/user/store'
import categories from '@src/views/category/store'
import products from '@src/views/product/store'
const rootReducer = {
  auth,
  navbar,
  layout,
  users,
  categories,
  products
}

export default rootReducer

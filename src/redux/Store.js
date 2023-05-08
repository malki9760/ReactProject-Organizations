import Reducer from '../redux/slice'
import { configureStore } from '@reduxjs/toolkit'

//   const organizations = [{
//     name: 'a',
//     tracking: { inUse: 300, assigned: 850 },
//     protction: { inUse: 300, assigned: 850 },
//     logo: '../madia/images/a.jpg'
// },
// {
//     name: 'b',
//     tracking: { inUse: 300, assigned: 850 },
//     protction: { inUse: 300, assigned: 850 },
//     logo: '../madia/images/b.jpg'
// },
// {
//     name: 'c',
//     tracking: { inUse: 300, assigned: 850 },
//     protction: { inUse: 300, assigned: 850 },
//     logo: '../madia/images/c.jpg'
// }]

// if (localStorage.getItem('allOrganizations') === null) {
//     localStorage.setItem('allOrganizations', JSON.stringify(organizations))
// }

export default configureStore({
  reducer: {
    organization: Reducer,
  },
})
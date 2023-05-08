import { createSlice } from '@reduxjs/toolkit'

// const organizations = [{
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

// const init = localStorage.getItem('allOrganizations') === null ?
//     localStorage.setItem('allOrganizations', JSON.stringify(organizations)) :
//     localStorage.getItem('allOrganizations') || []

export const slice = createSlice({
    name: 'organization',
    initialState: {
        organizations : JSON.parse( localStorage.getItem('allOrganizations')) ||
        [{
            name: 'a',
            tracking: { inUse: 300, assigned: 850 },
            protction: { inUse: 300, assigned: 850 },
            logo: "img/a.jpg"
        },
        {
            name: 'b',
            tracking: { inUse: 300, assigned: 850 },
            protction: { inUse: 300, assigned: 850 },
            logo: "img/b.jpg"
        },
        {
            name: 'c',
            tracking: { inUse: 300, assigned: 850 },
            protction: { inUse: 300, assigned: 850 },
            logo: "img/c.jpg"
        }],
        
    },reducers: {
        add: (state, action) => {
            state.organizations = [...state.organizations, action.payload]
        },
    },
})

// Action creators are generated for each case reducer function
export const { add } = slice.actions

export default slice.reducer
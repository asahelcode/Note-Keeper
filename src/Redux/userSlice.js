import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    userImg: '',
    accessToken: ''
  },
  reducers: {
    setUserImg: (state, action) => {
      state.userImg = action.payload
    },
    setAccessToken: (state, action) => {
        state.accessToken = action.payload
    }
  }
})

export const { setUserImg, setAccessToken } = userSlice.actions

export default userSlice.reducer
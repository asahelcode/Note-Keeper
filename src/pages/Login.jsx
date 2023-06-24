import { GoogleLoginButton } from "react-social-login-buttons"
import { LoginSocialGoogle } from "reactjs-social-login"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUserImg, setAccessToken } from "../Redux/userSlice"

function Login() {
  const navigate = useNavigate()
  const { userImg } = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div className="h-[75vh] px-[5%] flex justify-center items-center">

      <LoginSocialGoogle
      client_id="134566637399-399ubtiq424jpckgfkfpbo2fmlt2ccui.apps.googleusercontent.com"
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="offline"
      onResolve={({provider, data}) => {

        console.log(provider,data)
        dispatch( setUserImg(data.picture) )
        dispatch( setAccessToken(data.access_token) )
        navigate(`/User?name=${data.family_name}`)

      }}
      onReject={(err) => {
        console.log(err)
      
      }}
      >

        <GoogleLoginButton/>

      </LoginSocialGoogle>
    </div>
  )
}

export default Login

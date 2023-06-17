import { GoogleLoginButton } from "react-social-login-buttons"
import { LoginSocialGoogle } from "reactjs-social-login"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"

function App() {
  const navigate = useNavigate()

  return (
    <div className="h-[75vh] px-[5%] flex justify-center items-center">

      <LoginSocialGoogle
      client_id="134566637399-399ubtiq424jpckgfkfpbo2fmlt2ccui.apps.googleusercontent.com"
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="offline"
      onResolve={({provider, data}) => {
        console.log(provider,data)
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

export default App

import { GoogleLoginButton } from "react-social-login-buttons"
import { LoginSocialGoogle } from "reactjs-social-login"

function App() {

  return (
    <>
      <h1 className="text-blue-500">Note Keeper</h1>
      <LoginSocialGoogle
      client_id="134566637399-399ubtiq424jpckgfkfpbo2fmlt2ccui.apps.googleusercontent.com"
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="offline"
      onResolve={({provider, data}) => {
        console.log(provider, data)
      }}
      onReject={(err) => {
        console.log(err)
      }}
      >
        <GoogleLoginButton />

      </LoginSocialGoogle>
    </>
  )
}

export default App

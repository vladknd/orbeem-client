import type { NextPage } from 'next'

import ProfileComponent from '../components/Profile/Profile.component'
import { useAuthorize } from '../services/auth.service'
import {Provider} from 'react-redux'
import store from '../redux/store'

const Profile: NextPage = () => {
  const {authorized, loading} = useAuthorize()    
  return(
    <Provider store={store}>
      <ProfileComponent/>
    </Provider>
  )
  
  
}

export default Profile

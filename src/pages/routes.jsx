import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home'
import { Profile } from './profile'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/profile-details/:pokemon' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}
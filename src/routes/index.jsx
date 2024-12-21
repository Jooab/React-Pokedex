import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { Profile } from '../pages/profile'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/profile/:pokemon' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}
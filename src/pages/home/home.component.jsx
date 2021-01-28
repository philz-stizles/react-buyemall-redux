import React from 'react'
import { HomePageContainer } from './home.styles'
import Menu from '../../components/menu/menu.component'

const HomePage = () => {
    return (
        <HomePageContainer>
            <Menu />{/* Functional Components will always re-render whenever the parent re-renders */}
            {/* because it does not know */}
        </HomePageContainer>
    )
}

export default HomePage

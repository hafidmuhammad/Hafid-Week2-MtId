import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogAndMoreRoute from './BlogAndMoreRoute'
import HomeRoute from './HomeRoute'
import EnterpriseRoute from './EnterpriseRoute'
import ExampleRoute from './ExampleRoute'
import FeaturesRoute from './FeaturesRoute'
import PricingRoute from './PricingRoute'
import SigninRoute from './SigninRoute'
import SignUpRoute from './SignUpRoute'

const MainRoute = () => {
    const allRouter = [
        ...HomeRoute,
        ...BlogAndMoreRoute,
        ...EnterpriseRoute,
        ...ExampleRoute,
        ...FeaturesRoute,
        ...PricingRoute,
        ...SigninRoute,
        ...SignUpRoute



    ]
    return (
        <Routes>
            {allRouter.map((item, index) => {
                return <Route key={index} path={item.path} element={item.element}></Route>
            })}
        </Routes>
    )
}

export default MainRoute
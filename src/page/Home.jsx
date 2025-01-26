import React from 'react'

import { ReactComponent as Logo } from '../assets/svg/logo.svg'
import { ReactComponent as Box } from '../assets/svg/box.svg'
import { ReactComponent as Heart } from '../assets/svg/heart.svg'

import Categories from '../components/Categories/Categories'

import './home.scss'

const Home = () => {
  return (
    <main className="home-page">
      <div className="home-page__section">
        <p>Compra <b>100% segura</b></p>
        <p><b>Frete grátis</b> acima de R$ 200</p>
        <p><b>Parcele</b> suas compras </p>
      </div>
      <Logo />
      <Box />
      <Heart />

      <Categories />
    </main>
  )
}

export default Home

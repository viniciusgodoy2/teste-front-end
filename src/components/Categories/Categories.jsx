import React from 'react'

import { ReactComponent as Supermercados } from '../../assets/svg/supermercados.svg'

import './categories.scss'

const Categories = () => {
  return (
    <div className="home-page__categories">
      <div className="home-page__category">
        <div className="home-page__category__background">
          <Supermercados />
        </div>
        <p>Supermercado</p>
      </div>
      <div className="home-page__category">
        <div className="home-page__category__background">
          <Supermercados />
        </div>
        <p>Supermercado</p>
      </div>
      <div className="home-page__category">
        <div className="home-page__category__background">
          <Supermercados />
        </div>
        <p>Supermercado</p>
      </div>
      <div className="home-page__category">
        <div className="home-page__category__background">
          <Supermercados />
        </div>
        <p>Supermercado</p>
      </div>
      <div className="home-page__category">
        <div className="home-page__category__background">
          <Supermercados />
        </div>
        <p>Supermercado</p>
      </div>
      <div className="home-page__category">
        <div className="home-page__category__background">
          <Supermercados />
        </div>
        <p>Supermercado</p>
      </div>
      <div className="home-page__category">
        <div className="home-page__category__background">
          <Supermercados />
        </div>
        <p>Supermercado</p>
      </div>
    </div>
  )
}

export default Categories

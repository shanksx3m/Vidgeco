import React from 'react';
import ReactDOM from 'react-dom';
import Product from './classes/products.js/index.js';

function Household() {
    return (
      <div className="Household">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#"><div class="h4">VIDGECO</div></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Übersicht <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Produkte</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Lagerorte</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Impressum</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Abmelden</a>
              </li>
            </ul>
          </div>
  
        </nav>
  
        <div className="Content" class="container">
  
          <p class="h1">Hamsterbau</p>
          <p class="h4">
          </p>
          <div className="Produkte" class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div class="col product-div"><Product id="0" name='Brokkoli' menge='10 KG' mhd='10.10.2020' lagerort='Kühlschrank' image="https://www.zaubertopf-club.de/files/styles/mainimage_normal/public/images/recipes/2019/15/brokkoli_garen.jpg?itok=_wRGrDbN"/></div>
              <div class="col product-div"><Product id="1" name='Brokkoli' menge='10 KG' mhd='10.10.2020' lagerort='Kühlschrank' image="https://www.zaubertopf-club.de/files/styles/mainimage_normal/public/images/recipes/2019/15/brokkoli_garen.jpg?itok=_wRGrDbN"/></div>
              <div class="col product-div"><Product id="2" name='Brokkoli' menge='10 KG' mhd='10.10.2020' lagerort='Kühlschrank' image="https://www.zaubertopf-club.de/files/styles/mainimage_normal/public/images/recipes/2019/15/brokkoli_garen.jpg?itok=_wRGrDbN"/></div>
              <div class="col product-div"><Product id="3" name='Brokkoli' menge='10 KG' mhd='10.10.2020' lagerort='Kühlschrank' image="https://www.zaubertopf-club.de/files/styles/mainimage_normal/public/images/recipes/2019/15/brokkoli_garen.jpg?itok=_wRGrDbN"/></div>
              <div class="col product-div"><Product id="4" name='Brokkoli' menge='10 KG' mhd='10.10.2020' lagerort='Kühlschrank' image="https://www.zaubertopf-club.de/files/styles/mainimage_normal/public/images/recipes/2019/15/brokkoli_garen.jpg?itok=_wRGrDbN"/></div>
              <div class="col product-div"><Product id="5" name='Brokkoli' menge='10 KG' mhd='10.10.2020' lagerort='Kühlschrank' image="https://www.zaubertopf-club.de/files/styles/mainimage_normal/public/images/recipes/2019/15/brokkoli_garen.jpg?itok=_wRGrDbN"/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Household;
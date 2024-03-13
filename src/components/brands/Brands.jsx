import './brands.css';

import wb from './../../img/brands/warnerbros.png';
import up from './../../img/brands/Universal.png';
import pp from './../../img/brands/Paramount.png';
import fx from './../../img/brands/Fox.png';
import dw from './../../img/brands/dw.png';
import pix from './../../img/brands/pix.png';
import il from './../../img/brands/il.png';
import mar from './../../img/brands/marvel.png';
import dc from './../../img/brands/dc.png';

const Brands = () => {
  return (
    <section className='brands'>
        <div className="container">
            <div className="brands_title">
                <ul className="brands_list">
                    <li><a href='#'><img src={wb} alt="" /></a></li>
                    <li><a href='#'><img src={up} alt="" /></a></li>
                    <li><a href='#'><img src={pix} alt="" /></a></li>
                    <li><a href='#'><img src={dw} alt="" /></a></li>
                    <li><a href='#'><img src={fx} alt="" /></a></li>
                    <li><a href='#'><img src={pp} alt="" /></a></li>
                    <li><a href='#'><img src={il} alt="" /></a></li>
                    <li><a href='#'><img src={mar} alt="" /></a></li>
                    <li><a href='#'><img src={dc} alt="" /></a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Brands;
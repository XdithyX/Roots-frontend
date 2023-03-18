import React from 'react'
import './Place.css'
import MainLayout from '../../components/MainLayout/MainLayout'
function Place() {
  return (
    <MainLayout>
    <div className='place_container'>
        <div className="places_heading">
            <div className="places_heading-title">
                PLACES
            </div>
            <div className="places_heading_text">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sem suspendisse tristique habitant consectetur cursus at. Leo in eget convallis nunc rhoncus nulla m</p>
            </div>
            <div className="places_heading_search">
                {/* searchbar */}
            </div>
        </div>
        <div className="places_recommented">
            <div className="places_recommented_heading">
                <div className='places_recommented_heading1'>Most</div> <div className='places_recommented_heading2'>Recommented</div>
            </div>
            <div className="places_recommented_cards">
                <div className="places_recommented_card">

                </div>
            </div>
        </div>

        


    </div>
    </MainLayout>
  )
}

export default Place
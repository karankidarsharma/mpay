import React from 'react'

function Filter(){
    return(
        <div className="row filter-container my-2 text-ct">
            <div className=" row col-5">
                <div className="col-8">
                 <input className="searchBox" type="text" name="search" placeholder="Search..." maxLength="150" />
                </div>
                <div className="col-2">
                    <button className="searchButton">
                    <i className="fas fa-search"></i>
                    </button>
                </div>
                 
            </div>
            <div className="row col-7">
               <p className="col-1 colorPrimary font-18 py-8">Filters:</p>
               <input className="col-3 bg-primary btn font-18 filterButton" type="date"/>
               {/* <p className="col-3 bg-primary btn font-18 filterButton"><i className="far fa-calendar-alt"></i> DATE</p> */}
               <p className="col-3 bg-primary btn font-18 filterButton">COMPLETE</p>
               <p className="col-3 bg-primary btn font-18 filterButton">INCOMPLETE</p>

            </div>

        </div>
    )
}

export default Filter
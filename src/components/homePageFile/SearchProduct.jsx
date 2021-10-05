import React from 'react'

function SearchProduct() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-primary pt-0 pb-3">
        <div className="row w-25 m-auto">
          <div className="container-fluid text-white input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="ค้นหาดีล, ดีลใกล้เคียง, สินค้า, ร้านค้า"
            />
            <button type="button" className="btn btn-warning  ">
              sent
            </button>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default SearchProduct

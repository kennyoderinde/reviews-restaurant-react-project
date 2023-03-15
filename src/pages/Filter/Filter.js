import React from "react";
import './Filter.css'


export default function Filter() {

const carsData = [
  {id: 1, brand: "Camry-2019", color: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"},
  {id: 2, brand: "Toyota-2022", color: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"},
  {id: 3, brand: "MezedesBenz 2015", color: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"},
  {id: 4, brand: "Tesla 2022", color: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"},
  {id: 5, brand: "Mitsubushi 2011", color: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"}

]

let displayCars = carsData.map(item => {
    return{
        showCar: `${item.id} - ${item.brand} - ${item.color}`
    }
})
console.log(displayCars)

  return (
    <div className="main-background">
        <h2>Visit out Display Center Today!</h2>
        {
            carsData.map((values) => (
                <div className="car-tile"
                key={values.id}
                >
                    <h2 className="show-id">{values.id}</h2>
                    <h4 className="show-brad">{values.brand}</h4>
                    <img src={values.color} alt="Display color"/>
                </div>
            ))
        }

    </div>
  )
}

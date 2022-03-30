function setColorTime(id){
    var all = document.getElementsByClassName("location-btn");
    for(let i = 0; i < all.length; i++){
    all[i].style.backgroundColor = "#2B4A32"
    all[i].style.color = "#FFF"
    }
    var property = document.getElementById(id);
    property.style.backgroundColor = "#35B151"
    property.style.color = "#000"
}

function setColorDates(id){
    var all = document.getElementsByClassName("days")[0].getElementsByClassName("active");
    for(let i = 0; i < all.length; i++){
      all[i].style.backgroundColor = "#2B4A32"
      all[i].style.color = "#FFF"
    }
    var property = document.getElementById(id);
    property.style.backgroundColor = "#35B151"
    property.style.color = "#000"
}

function change(){
  $(".chosen_action").innerHTML = `
    <option>You turn away from the castle</option>
    <option>You take a closer look at the old drawbridge</option>
    <option>You decide to consult your map</option>
`;
}

// var d = document.getElementById("cart-container")
// var new_event = document.createElement( 'div' );
// new_event.innerHTML = '<h2 class="cart-table"><p>Location: <select name="location" id="location"><option value="East Garage">East Garage</option><option value="TCS Hall">TCS Hall</option></select> </p><p>Time: 02/21/2022 9:30am</p></h2>';
// functoin add_Event(){
//   d.appendChild(new_event);
// }
// d.addEventListener ("click", addEvent)
// document.getElementById("cart-container").addEventListener ("click", addEeve




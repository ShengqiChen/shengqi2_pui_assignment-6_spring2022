FILES

date.html: allow user to select available testing dates
    - uses the list item element in html and customized css to create calender
    - list items with the class name "active" is dark green
    - when user clicks an available date (which is the dark green list item), 
    the function setColorDate in the index.js file is called with the date as its argument. 
        ex: <li><span class="active" id="15" onclick="setColorDates(this.id)">15</span></li>
    - The setColorDate changes the color of the list item from dark green to light green and set
    all other list item back to dark green
    - use "localstorage" to save the selected date as a variable in index.js (not done yet)
    - wrapped by a div with class name "calender-container", which creates the white box + red border. 

time.html: allow user to select available testing locations
    - <div> elements with customized css is used as time slot buttons 
    - when user clicks a time slot , the function setColorTime in the index.js 
    file is called with the time as its argument. 
        ex: <div class="location-btn" id="9:00 am" onclick="setColorTime(this.id)">9:00 am</div>
    - The setColorTime changes the color of the div box from dark green to light green and set
    all other divs back to dark green
    - use "localstorage" to save the selected time slot as a variable in index.js (not done yet)
    - wrapped by a div with class name "location-container", which creates the white box + red border. 

confirm.html: appointment confirmation
    - get saved date and time from "localstorage" and display this information (not done yet)
    - wrapped by a div with class name "last-container", which creates the white box + red border. 

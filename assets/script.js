    //created variables and assigned them to the save buttons 
    var clickButton = document.getElementsByClassName('saveBtn')
    //set the time in military clock format on the header to make it easier for the user 
    //to follow along
    var timeDate = moment();
$("#currentDay").text(timeDate.format("MMMM Do YYYY, HH:mm a"))



    
//function used to to take text input values and store them within the local storage
function storeInfo () {
    // text area grabs the value of specific class value 
    const textArea = $(this).siblings(".textInput").val();
    

// dyatime blockis assigned to the name of the id
    const dayTimeBlock = $(this).parent().attr('id');



    
//stores the text area value and the name of the id  in the local storage
    localStorage.setItem(dayTimeBlock, textArea);


}

//clock is a real time function that changes colors depending on what the time it is 
 function clock(){
    var currentTime = moment().hour();
    
    $('.row').each(function() {
        var timeSelection = parseInt($(this).attr('id').split("militarytime")[1]);
        if (timeSelection < currentTime){
            $(this).removeClass('present')
            $(this).removeClass('future')
            $(this).addClass('past')
        }
        else if (timeSelection === currentTime){
            $(this).removeClass('future')
            $(this).removeClass('past')
            $(this).addClass('present')
        }
        else{
            $(this).removeClass('present')
            $(this).removeClass('past')
            $(this).addClass('future')
        }
    })
 }

// event listener  that calls a function every time a button is press
$(".saveBtn").on("click",storeInfo) 
 //loads recent local storage data on the text area 

    $("#militarytime0 .textInput").val(localStorage.getItem('militarytime0'))
    $("#militarytime1 .textInput").val(localStorage.getItem('militarytime1'))
    $("#militarytime2 .textInput").val(localStorage.getItem('militarytime2'))
    $("#militarytime3 .textInput").val(localStorage.getItem('militarytime3'))
    $("#militarytime4 .textInput").val(localStorage.getItem('militarytime4'))
    $("#militarytime5 .textInput").val(localStorage.getItem('militarytime5'))
    $("#militarytime6 .textInput").val(localStorage.getItem('militarytime6'))
    $("#militarytime7 .textInput").val(localStorage.getItem('militarytime7'))
    $("#militarytime8 .textInput").val(localStorage.getItem('militarytime8'))
    $("#militarytime9 .textInput").val(localStorage.getItem('militarytime9'))
    $("#militarytime10 .textInput").val(localStorage.getItem('militarytime10'))
    $("#militarytime11 .textInput").val(localStorage.getItem('militarytime11'))
    $("#militarytime12 .textInput").val(localStorage.getItem('militarytime12'))
    $("#militarytime13 .textInput").val(localStorage.getItem('militarytime13'))
    $("#militarytime14 .textInput").val(localStorage.getItem('militarytime14'))
    $("#militarytime15.textInput").val(localStorage.getItem('militarytime15'))
    $("#militarytime16 .textInput").val(localStorage.getItem('militarytime16'))
    $("#militarytime17 .textInput").val(localStorage.getItem('militarytime17'))
    $("#militarytime18 .textInput").val(localStorage.getItem('militarytime18'))
    $("#militarytime19 .textInput").val(localStorage.getItem('militarytime19'))
    $("#militarytime20 .textInput").val(localStorage.getItem('militarytime20'))
    $("#militarytime21 .textInput").val(localStorage.getItem('militarytime21'))
    $("#militarytime22 .textInput").val(localStorage.getItem('militarytime22'))
    $("#militarytime23 .textInput").val(localStorage.getItem('militarytime23'))
    $("#militarytime24 .textInput").val(localStorage.getItem('militarytime24'))
    clock();
 
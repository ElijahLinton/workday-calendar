    
    var clickButton = document.getElementsByClassName('saveBtn')
    var timeDate = moment();
$("#currentDay").text(timeDate.format("MMMM Do YYYY, HH:mm a"))


    
$(".saveBtn").on("click",storeInfo) 
function storeInfo () {
    
    const textArea = $(this).siblings(".textInput").val();
    


    const dayTimeBlock = $(this).parent().attr('id');



    

    localStorage.setItem(dayTimeBlock, textArea);
}

    window.onload = function() {
var notesValue = localStorage.getItem("notes",);
    if (notesValue !== null){ $('.textInput').val(notesValue)}
}
    
 
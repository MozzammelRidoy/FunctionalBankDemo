 /* 
        get the element by id 
        get the value from the element
        convert string value to a number
    */


//function for get Value form input 
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value ;
    const inputValue = parseFloat(inputFieldValueString);
    inputField.value = '';
   
    return inputValue;
}


//function for get value from  Text List
function getTextElementValueById(element){
    const TextElement = document.getElementById(element);
    const TextElementValueString = TextElement.innerText;
    const TextValue = parseFloat(TextElementValueString);
    return TextValue;
}


//Function for set Value in text list
function setTextElementValueById(element, newValue){
    const TextElement = document.getElementById(element);
    TextElement.innerText = newValue;
}
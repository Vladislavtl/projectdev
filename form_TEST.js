var servResponse =document.querySelector('#response');

document.forms.ourForm.onsubmit=function (e)
{
    e.preventDefault();
    var userInput= document.forms.ourForm.ourForm_inp.value;
    userInput= encodeURIComponent(userInput);
    var xhr=new XMLHttpRequest();

    xhr.open('POST','form.php');

    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

    xhr.onreadystatechange=function()
    {
        if(xhr.readyState === 4 && xhr.status === 200)
        {
            servResponse.textContent=xhr.responseText;
        }
    }

    xhr.send('ourForm_inp='+userInput);


}
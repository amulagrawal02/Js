window.onload
{
    let text = document.getElementById('text');
    let add = document.getElementById('button');
    let list = document.getElementById('list');
    add.onclick = function (event) {
        
        if (text.value.length > 0) {
            let item = document.createElement('li');
            item.textContent = text.value;
            list.appendChild(item);
            text.value = "";
        }
        else {
            alert("You have to add something!")
        }
        list.onclick = function(event)
        {
            let x = event.target;
            x.remove();   
        }
    }

}



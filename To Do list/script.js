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
            let btn = document.createElement('button')
            btn.textContent = 'X';
            text.value = "";
            item.appendChild(btn);
            let upBtn = document.createElement('button')
            upBtn.textContent = '↑'
            item.appendChild(upBtn);
            let downBtn = document.createElement('button')
            downBtn.textContent = '↓'
            item.appendChild(downBtn);
            btn.onclick = function(event)
            {
                let x = event.target;
                console.log(x);
                x.parentElement.remove();
                
            }
            upBtn.onclick = function(event)
            {
                event.target.parentElement.parentElement.insertBefore(
                   
                    event.target.parentElement ,
                    event.target.parentElement.previousElementSibling
                )
            }
            downBtn.onclick = function(event)
            {
                event.target.parentElement.parentElement.insertBefore(
                   event.target.parentElement.nextElementSibling,
                    event.target.parentElement 
                    
                )
            }
        }
        else {
            alert("You have to add something!")
        }
       
        
    }

}



var Bod = {
    setColor: function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Lin = {
    setColor: function(color){
        var i = 0;
        var alist = document.querySelectorAll('a');
        while(i < alist.length){
            if(alist[i].hasClass('.now') === true){
                alist[i] = 'red';
            }
            alist[i].style.color = color;
            i++;
        }
    }
}

function nightDayHandler(self){
    if(self.value === 'night'){ 
        Bod.setColor('white');
        Bod.setBackgroundColor('black');
        document.querySelector('#boLine').style.borderBottom = '1px solid white';
        document.querySelector('#article').style.borderLeft = '1px solid white';
        self.value = 'day';
        Lin.setColor('powderblue');
    }
    else{
        Bod.setColor('black');
        Bod.setBackgroundColor('white');
        document.querySelector('#boLine').style.borderBottom = '1px solid black';
        document.querySelector('#article').style.borderLeft = '1px solid black';
        self.value = 'night';
        Lin.setColor('blue');
    }
}
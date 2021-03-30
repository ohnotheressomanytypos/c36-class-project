class Form{
    constructor(){

    }

    display(){
        var Title=createElement('h2')
        Title.html("car racing game");
        Title.position(130,0);
           
        var Input=createInput("name");
        

        var Button=createButton('play');
        Button.position(250,200);
        Input.position(130,160);
        
        Button.mousePressed(function(){
            Input.hide();
            Button.hide();
            var name=Input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("hello"+name);
            greeting.position(130,160);
        });
    }
}
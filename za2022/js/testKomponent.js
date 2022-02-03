
var choice = 0;
var test;

let user = {name:"John", scoreKomp:0, click:0};


function start(){

    var startButt = document.getElementById("startButt");
    var vid = document.getElementById("komVid");
    vid.autoplay = true;
    vid.load();
    user.name = undefined ;
    startButt.style.display = "none";

    var vid = document.getElementById("komVid");

    test = setInterval(function () {

            if((vid.currentTime>17.9 && vid.currentTime<18)||(vid.currentTime>32.9 && vid.currentTime<33)||(vid.currentTime>47.9 && vid.currentTime<47)){
             var childNodes = document.getElementById("answers").getElementsByTagName('*');
                                        for (var node of childNodes) {
                                            node.disabled = false;
                                        }
                                                                                                                        }

            if(vid.paused)   {
               clearInterval(test);

               var dialog = document.getElementById('window');
                    $("#konec").text("Konec testu! Tvoje Skóre je " + user.scoreKomp + "!");
                    dialog.show();

                    document.getElementById('exit').onclick = function() {
                            dialog.close();
                            };

                    document.getElementById('save').onclick = function() {

                                   user.name=document.getElementById('name').value
                                   var kontrolUser = localStorage.getItem(user.name);
                                    if(kontrolUser.scoreKomp<user.scoreKomp){

                                    localStorage.setItem(
                                                        user.name,
                                                        JSON.stringify(user)
                                                                       );
                                    }
                                  dialog.close();
                                  };

               }
                                 },100);


                }

function answer(choice){


   var vid = document.getElementById("komVid");


    if(vid.paused===false) {

            user.click=vid.currentTime;

            var childNodes = document.getElementById("answers").getElementsByTagName('*');
            for (var node of childNodes) {
                node.disabled = true;
            }


         if(user.click>3){


             if((user.click<18 && choice===1) ||(user.click<33 && user.click>=18 && choice===5) ||(user.click<48 && user.click>=33 && choice===8) ||(user.click>=48 && choice===6)){

                 user.scoreKomp=user.scoreKomp+1;

             }else{


                 user.scoreKomp=user.scoreKomp-1;


             }

         }
    }

}



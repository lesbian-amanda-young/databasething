
    
    var inputEnter = document.getElementById("searchBox");

    inputEnter.addEventListener("keypress", function(bruh) {
        if (bruh.key === "Enter") {
            bruh.preventDefault();
            document.getElementById("searchButton").click();
        }
    });

    function changeText(){
        var textInput = document.getElementById("searchBox").value;
        //document.getElementById('textDiv').innerHTML = textInput;
        switch (textInput)
        {
            case 'theme green':
            case 'theme default':
                themeChange('#68ef6c');
                imagePls(pics[0]);
            break;
            case 'theme pink':
            case 'theme magenta':
                themeChange('#FF19AE');
                imagePls(pics[1]);
            break; 
            case 'theme orange':
                themeChange('#FA6607');
            break;
            case 'theme cyan': 
                themeChange('#00FFFF');
            break;
            case 'theme yellow':
                themeChange('#FFFF00');
            break;


            case '1':
                writeThatShit(0);
            break;
            case '2':
                writeThatShit(1);
            break;

        }
        document.getElementById("searchBox").value = '';
        
    }

    function themeChange(color){
        document.getElementById("searchBox").style.borderColor = color;
        document.getElementById("searchBox").style.color = color;
        document.getElementById("searchButton").style.borderColor = color;
        document.getElementById("searchButton").style.color = color;
        document.getElementById("mainPage").style.color = color;
        document.getElementById("body").style.backgroundColor = color;
    }

    //typewriter

    function writeThatShit(number) {
        i = 0;
        document.getElementById("THIStextColumn").innerHTML = '';
        //document.getElementById("THIStextColumn").style.columnWidth = '40px';
        twText = infoText[number];
        typeWriter();
    }


    function imagePls(agony) {
        var image = document.getElementById('mainImage');
        image.src = agony;
    }



    var i = 0;
    var twText = 'placeholder'; /* The text */
    var speed = 20; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < twText.length) {
            document.getElementById("THIStextColumn").innerHTML += twText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    const infoText = [

        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non enim interdum, rhoncus velit sit amet, fermentum dui. Aliquam vitae vehicula urna, quis commodo lorem. Morbi lobortis arcu vitae metus fringilla, at facilisis purus ullamcorper. Aenean volutpat tincidunt tellus, molestie efficitur nunc congue nec. Integer tortor leo, tempus eget tincidunt nec, vulputate vitae risus. Etiam et sem commodo magna auctor euismod. Aenean a elementum odio.",

        "Cras consequat mi elit, sit amet finibus magna dapibus non. Morbi ut sapien eget nibh interdum congue. Nunc et augue dolor. Duis id justo id lacus tristique mollis. Suspendisse sit amet lacus erat. Sed mollis dui dolor, sed efficitur diam ultrices vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vehicula consequat turpis, sit amet facilisis tellus imperdiet eget. Curabitur at pulvinar purus. Aliquam iaculis lectus nec ipsum venenatis pharetra. Mauris vestibulum mi vel ullamcorper vulputate. Pellentesque nisl enim, consequat ac tortor non, consectetur pretium diam."
    ]

    const pics = [

        "./images/creacher.jpg",

        "./images/creacher_pink.jpg"

    ]
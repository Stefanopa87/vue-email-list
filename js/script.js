function init() {

    for (let i = 0; i < 10; i++) {
        getMailFromApi();
    }
}

function getMailFromApi() {

    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        method: 'GET',

        success: function (data) {                    
                
                const res = data.response;
                mailGenerate(res);      
        },

        error: function () {
            console.log('error');
        }
    });
}

function mailGenerate(type) {
    const target = $('#target');
  
        target.append('<li style="color:red; list-style:none; font-weight: bold;">' + type + '</li> <br>');
    
}

document.addEventListener('DOMContentLoaded', init);



// ----------------------------------------------

// OPPURE DIRETTAMENTE:

function init1() {


    for (let i = 0; i < 10; i++) {
        // importante è ciclare sempre url più volte
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            method: 'GET',

            success: function (data) {

                const res = data.response;
                mailGenerate(res);
            },

            error: function () {
                console.log('error');
            }
        });

    }
}

function mailGenerate(type) {
    const target = $('#target');

    target.append('<li style="color:red; list-style:none; font-weight: bold;">' + type + '</li> <br>');

}

document.addEventListener('DOMContentLoaded', init1);
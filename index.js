
// $(document).ready(function () {
//     $("#fetch").click(function (event) {
//         $.getJSON("bible.json", function (emp) {
//             console.log('Booked');
//         });
//     });
// });
// let dropdown = $('#book');

// dropdown.empty();

// dropdown.append('<option selected="true" disabled>Select Book</option>');
// dropdown.prop('selectedIndex', 0);

// const url = "file:///D:/cp%20final/bible.json";

// // Populate dropdown with list of provinces
// $.getJSON(url, function (data) {
//     $.each(data, function (key, mydata) {
//         dropdown.append($('<option></option>').attr('value', mydata.book_name).text(mydata.book_name));
//     })
// });


$(document).ready(function () {
   
    // $.getJSON('bible.json', function (data){
    //     console.log(data);

    // })

    $.ajax({
        url: 'bible.json',
        type: 'GET',
        DataType: 'json',
        cache: true,
        success: function (data){
            // console.log(data);
            $(data.verses).each(function (index, value) {
                // console.log(value.text);
                $("#book").append(value.book_name);      
            });
        }
    })
    
});
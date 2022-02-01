
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

    let book = $("#book");
    let chapter = $("#chapter");
    let verse = $("#verse");

    $.ajax({
        url: 'bible.json',
        type: 'GET',
        DataType: 'json',
        cache: true,
        success: function (data) {
            // console.log(data);


            // for Books
            $(data.verses).each(function (index, value) {
                // console.log(value.text);
                let newOption = $('<option>');
                newOption.attr('value', index).text(value.book_name);
                $('#book').append(newOption);
            });





            // for chapters
            $(data.verses).each(function (index, value) {
                // console.log(value.text);
                let newOption = $('<option>');
                newOption.attr('value', index).text(value.chapter);
                $('#chapter').append(newOption);
            });

            // for verse
            $(data.verses).each(function (index, value) {
                // console.log(value.text);
                let newOption = $('<option>');
                newOption.attr('value', index).text(value.verse);
                $('#verse').append(newOption);
            });

            // for text
            $(data.verses).each(function (index, value) {
                // console.log(value.text);
                // let newOption = $('<p>');
                // newOption.attr('value', index).text(value.text);
                $('#bible_text').append(value.verse + " " + value.text + "<br>" );
            });
        }
    })
});
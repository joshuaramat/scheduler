// load html
// assign event listener for saveBtn
// parse each time block

$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {
        console.log(this);
        var description = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(description, hour);
    })

    function tracker() {
        var current = moment().hour();

        $(".time-block").each(function () {
            var hour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(hour, current)

            if (hour < current) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (hour === current) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }
    // localStorage for each hour
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    tracker();
})
$(document).ready(function() {

    //+++++++++++ get elements ++++++++++++++++++

    // Getting a reference to the input field where user adds a new burger
    const $newBurger = $("#counter");
    // Our new Burgers will go inside the $orderUp_Container
    const $orderUp_container = $(".devouredBurgers");
    const recycle_da_burger = document.getElementById('recycle-button');
    const eat_da_burger = document.getElementById('devour-button');
    const order_da_burger = document.getElementById('order-burger-button');

    let burgers = [444,4,5,33223,1212,12124,55,21212,324,];
    console.log(burgers)
    getBurgers();

    // This function grabs burgers from the database and updates the view
    function getBurgers() {
        $.get("/api/burgers", function(data) {
            burgers = data;
            initializeRows();
        });
    }

    // This function resets the todos displayed with new todos from the database
    function initializeRows() {
        $orderUp_container.empty();
        let rowsToAdd = [];
        for (let i = 0; i < burgers.length; i++) {
            rowsToAdd.push(createNewRow(burgers[i]));
        }
        $orderUp_container.prepend(rowsToAdd);
    }

    // This function constructs a burger-item row
    function createNewRow(burger) {
        var $newBurgerRow = $(
            [
                "<li class='list-group-item>",
                "<span>",
                burgers.burger_name,
                "</span>",
                "<button class='delete btn btn-default' id='devour-button'>Devour Me!</button>",
                "</li>"
            ].join("")
        );

        $newBurgerRow.find(".button.delete").data("id", burgers.id);
        $newBurgerRow.find("burgers", burgers).data("id", burgers.id);

        if (burger.consumed) {
            $newBurgerRow.prepend('#stomach-container');
        }
        return $newBurgerRow;
    }

});

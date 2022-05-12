
 class RendererMeal{
    constructor(data){
        this.data=data
    }

    loadMeals(data){
        const dataMeals = data
        console.log(dataMeals)

        $(".meals").empty()
        const meal = $("#meal-template").html();
        const mealTemplate = Handlebars.compile(meal)
        let mealNewHtml = mealTemplate({dataMeals});
        $(".meals").append(mealNewHtml);
    }
}

  
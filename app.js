// Дэлгэцтэй ажиллах контроллер
var uiController = (function(){
    var DOMStrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn"
    }

    return {
        getInput: function(){
            return{
                type : document.querySelector(DOMStrings.inputType).value, 
                description: document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function(){
            return DOMStrings;
        }
    };

})();
// Санхүүтэй ажиллах контроллер
var financeController = (function(){


})();

// Програмын холбогч контроллер
var appController = (function(uiController, financeController){
    var ctrlAddItem = function(){
            // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
            console.log(uiController.getInput());
            // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллорт дамжуулж тэнд хадгална.
    
            // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    
            // 4. Төсөвийг тооцоолно.
    
            // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
};
var setupEventListeners = function(){
    var DOM = uiController.getDOMStrings();
    document.querySelector(DOM.addBtn).addEventListener('click', function(){
        ctrlAddItem();
    });
    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }          
    });  
};
return {
    init: function(){
        console.log("Application started....");
        setupEventListeners();
    }
}
    
})(uiController,financeController);

appController.init();
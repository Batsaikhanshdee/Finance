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
// private
var financeController = (function(){
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Exponse = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var data = {
        items : {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    }; 
    return {
        addItem: function(type, desc, val){
            var item, id ;
            // identification
            if(data.items[type].length === 0) id = 1;
            else{
                data.itemsp[type][data.items[type].length-1];
            }
            if(type === 'inc'){
                item = new Income(id, desc, val);
            }else{
                item = new Expense(id, desc, val);    
            }
            data.items[type].push(item);
        }
    }

})();

// Програмын холбогч контроллер
var appController = (function(uiController, financeController){
    var ctrlAddItem = function(){
            // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
            var input = uiController.getInput();
            console.log(input);
            // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллорт дамжуулж тэнд хадгална.
            financeController.addItem(input.type, input.description, input.value);
    
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
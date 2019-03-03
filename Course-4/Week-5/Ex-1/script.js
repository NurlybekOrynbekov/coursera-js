'use strict';

// Код валидации формы

function validateForm(params) {
    var formId = params.formId;
    var formValidClass = params.formValidClass;
    var formInvalidClass = params.formInvalidClass;
    var inputErrorClass = params.inputErrorClass;

    var form = document.getElementById(formId);
    var inputs = Array.from(form.querySelectorAll('input'));

    form.addEventListener('focus', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if(event.target.tagName === 'INPUT') {
            event.target.classList.remove(inputErrorClass);
        }

    }, true);

    form.addEventListener('blur', function(event) {
        event.preventDefault();
        event.stopPropagation();

        var target = event.target;

        if(target.tagName === 'INPUT') {
            if(validateInput(target) === false) {
                target.classList.add(inputErrorClass);
            }
        }

    }, true);


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.target.classList.remove(formValidClass);
        event.target.classList.remove(formInvalidClass);

        var validate = true;

        inputs.forEach(input => {
            validate = validateInput(input);
        });

        event.target.classList.add( validate ? formValidClass : formInvalidClass );
    });


    function validateInput(input) {
        if(input.dataset.hasOwnProperty('required')) {
            if(input.value === '') {
                return false;
            }
        }
        if(input.dataset.hasOwnProperty('validator')) {
            var validator = input.dataset.validator;
            var value = input.value;
            switch(validator) {
                case 'letters':
                    var regex = /[^a-zа-я]/gmi;
                    if (regex.exec(value)) {
                        return false;
                    }
                    break;
                case 'number':
                    var regex = /[^1-9]/gmi;
                    var min = input.dataset.validatorMin;
                    var max = input.dataset.validatorMax;
                    if (regex.exec(value)) {
                        return false;
                    }
                    if(min && parseInt(value) < min) {
                        return false;
                    }
                    if(max && parseInt(value) > max) {
                        return false;
                    }
                    break;
                case 'regexp':
                    var pattern = new RegExp(input.dataset.validatorPattern);
                    if (!pattern.exec(value) && value != '') {
                        return false;
                    }
                    break;
            }
        }
    }

}


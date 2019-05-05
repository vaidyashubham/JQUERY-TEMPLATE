$.validator.setDefaults( {
    submitHandler: function () {
        $('#success-modal').modal('show');
    }
});
$( document ).ready( function () {
    $( "#register-form" ).validate( {
        rules: {
            firstname: {
                required: true,
                minlength: 5
            },
            lastname: {
                required: true,
                minlength: 5
            },
            username: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 5
            },
            c_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            terms: {
                required: true
            }
        },
        messages: {
            firstname: {
                required: "Please provide first name",
                minlength: "please provide at least 5 letters"
            },
            lastname: {
                required: "Please provide last name",
                minlength: "please provide at least 5 letters"
            },
            username: {
                required: "Please provide user name",
                minlength: "please provide at least 5 letters"
            },
            password: {
                required: "Please provide password",
                minlength: "please provide at least 5 letters"
            },
            c_password: {
                required: "Please provide Confirm Password",
                minlength: "please provide at least 5 letters",
                equalTo: "Both the passwords are not Matched"
            },
            email: {
                required: "Please provide an Email",
                email: "please provide a valid Email",
            },
            terms: {
                required: "Please accept the terms & Conditions"
            }
        },
        errorPlacement: function ( error, element ) {
            // Add the `invalid-feedback` class to the error element
            error.addClass( "invalid-feedback" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.next( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
        }
    } );
} );

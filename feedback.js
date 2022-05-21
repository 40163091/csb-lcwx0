function checkData ()
{
              if (document.signup.NAME.value == "")
              {

                       alert("Please fill in your name.";
                       document.signup.NAME.focus();
                         return false;
              }
            else if (document.signup.EMAIL.value == "")
              {

                       alert("Please fill in your e-mail address.")
                       document.signup.EMAIL.focus()
                       return false;
              }

               else {

               return true;
               }

}
            









}
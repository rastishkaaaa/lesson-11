$(document).ready(function () {
   $('#btn-1').click(function (e) {
      e.preventDefault();
      let box = $('#box');
      box.animate({
         left: 300
      });
      box.animate({
         top: 300
      });
      box.animate({
         left: 0
      });
      box.animate({
         top: 0
      });
   });

   $('#btn-2').click(function (e) {
      e.preventDefault();
      let box = $('#box');
      box.animate({
         left: 400,
      });
      box.animate({
         left: 200,
         top: 400
      })
      box.animate({
         top: 0,
         left: 0
      })

   });



   $('#btn-3').click(function (e) {
      if ($(this).data('show') === 'false') {
         e.preventDefault();
         let box = $('#box');
         box.animate({
            height: "100px",
            width: "100px",
            opacity: 1,
         });
         $(this).data('show', 'true');
      } else {
         e.preventDefault();
         let box = $('#box');
         box.animate({
            height: "400px",
            width: "400px",
            opacity: 0,
         });
         $(this).data('show', 'false');
      }
   });
})
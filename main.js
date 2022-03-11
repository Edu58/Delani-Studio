$(function () {

    // Hides what we do descriptions on DOM ready
    $('#design-desc, #dev-desc, #project-desc').hide()


    // Toggles between what we do images and the description
    $('#design-div').on('click', function () {
        $('#design-img').fadeToggle()
        $('#design-desc').fadeToggle()
    })

    $('#dev-div').on('click', function () {
        $('#dev-img').fadeToggle()
        $('#dev-desc').fadeToggle()
    })

    $('#project-div').on('click',function () {
        $('#project-img').fadeToggle()
        $('#project-desc').fadeToggle()
    })


    // Trigers hover effect on the portfolio images
    $('.portfolio .row .project').on('mouseover', function () {
        $(this).children('img').addClass('darken')
        $(this).children('.hover-text').addClass('showhovereffect')
    })

     $('.portfolio .row .project').on('mouseleave', function () {
         $(this).children('img').removeClass('darken')
         $(this).children('.hover-text').removeClass('showhovereffect')
     })

})
$().ready(function () {
    $('#design-desc, #dev-desc, #project-desc').hide()
    $('#design-div').click(function () {
        $('#design-img').toggle()
        $('#design-desc').toggle()
    })
})
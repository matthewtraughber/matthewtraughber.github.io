// window load
window.onload = function() {
  mirrorColHeight()
};

// window resize
$(window).resize(function() {
  mirrorColHeight()
});


// functions
function mirrorColHeight() {
  if (window.innerWidth > 767) {
    var me_container_height = $('#me_container').height();
    var skill_list_height = $("#skill_container").height();

    $('#greeting').css('min-height', me_container_height+'px');
    $('#skills_header').css('min-height', skill_list_height+'px');
  }
  else {
    $('#greeting').css('min-height', '');
    $('#skills_header').css('min-height', '');
  }
}

/* axios settings */
window.axios = require('axios');
window.axios.defaults.baseURL = '/susejparty';
window.axios.defaults.timeout = 300000; //miliseconds -> 5minutes
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/* events */
window.events = new Vue();
window.flash = function (message, level = "success") {
    window.events.$emit('flash', { message, level });
};
window.breadcrumbs = (paths) => {
    window.events.$emit('breadcrumbs', { paths });
};

/* prototypes */
window.moment = require('moment');
Vue.prototype.moment = moment;

let authUser = (document.querySelector("meta[name='auth']").getAttribute('content'))
Vue.prototype.$auth = authUser ? JSON.parse(authUser) : '';


/* custom scripts */
// numbers only
const contactNumber = document.querySelector('input[name=contact]');
if (contactNumber) {
    contactNumber.addEventListener('keypress', isNumberKey)
}

function isNumberKey(e) {
    const charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
        return false;
    }
    return true;
}

// social btn share
var popupSize = {
    width: 780,
    height: 550
};
$(document).on('click', '.social-button', function (e) {
    var verticalPos = Math.floor(($(window).width() - popupSize.width) / 2),
        horisontalPos = Math.floor(($(window).height() - popupSize.height) / 2);

    var popup = window.open($(this).prop('href'), 'social',
        'width=' + popupSize.width + ',height=' + popupSize.height +
        ',left=' + verticalPos + ',top=' + horisontalPos +
        ',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1');

    if (popup) {
        popup.focus();
        e.preventDefault();
    }

});
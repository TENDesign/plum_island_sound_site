var e =
    'https://www.casperpanel.com/rentals/E2Hbd2WKOZIibce4/available?embed=true';
if (window.location.href && URL)
    try {
        var a = new URL(window.location.href);
        a.searchParams &&
            null !== a.searchParams.get('accessKey') &&
            (e +=
                '&avatarKey=' +
                encodeURIComponent(
                    a.searchParams.get('avatarKey')
                ) +
                '&accessKey=' +
                encodeURIComponent(
                    a.searchParams.get('accessKey')
                ) +
                '&t=' +
                encodeURIComponent(a.searchParams.get('t')));
    } catch (r) { }
var t = document.createElement('iframe');
(t.style.width = '100%'),
    (t.style.minHeight = '500px'),
    (t.style.border = 'none'),
    (t.src = e),
    document
        .getElementById('casperRentalsDisplayE2Hbd2WKOZIibce4')
        .appendChild(t);
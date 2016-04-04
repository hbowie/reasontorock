if (navigator.appVersion.indexOf("Win")!=-1) {
    document.write('<link rel="stylesheet" type="text/css" media="all" href="fonts/equity_ta.css" />');
} else if (navigator.appVersion.indexOf("Mac")!=-1) {
    if (navigator.userAgent.match(/iPad/i) != null) {
        document.write('<link rel="stylesheet" media="only screen and (max-device-width: 1024px)" href="fonts/equity_tb.css" type="text/css" />');
        document.write('<link rel="stylesheet" media="only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)" type="text/css" href="fonts/equity_ta.css" />');
    } else {
        document.write('<link rel="stylesheet" type="text/css" media="all" href="fonts/equity_tb.css" />');
    }
} else {
    document.write('<link rel="stylesheet" type="text/css" media="all" href="fonts/equity_ta.css" />');
}
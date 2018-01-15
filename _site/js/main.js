$(document).ready( function () {

// Full Calendar
$('#calendar').fullCalendar({
        // put your options and callbacks here

        eventSources: [

        // your event source
        {
            events: [ // put the array in the `events` property
                {
                    title  : 'Introduction to Google Analytics',
                    start  : '2017-04-20',
                    url    : '/google-analytics-intro.html',
                },
                {
                    title  : 'Taking Google Analytics Further',
                    start  : '2017-05-11',
                    url    : '/google-analytics-further.html',
                },
                {
                    title  : 'Introduction to SEO Best Practices',
                    start  : '2017-06-08',
                    url    : '/seo-basics.html',
                },
                {
                    title  : 'Introduction to Google Analytics',
                    start  : '2017-07-06',
                    url    : '/google-analytics-intro.html',
                },
                {
                    title  : 'Taking Google Analytics Further',
                    start  : '2017-08-03',
                    url    : '/google-analytics-further.html',
                },
                {
                    title  : 'Introduction to SEO Best Practices',
                    start  : '2017-08-31',
                    url    : '/seo-basics.html',
                },
                {
                    title  : 'Introduction to Google Analytics',
                    start  : '2017-09-28',
                    url    : '/google-analytics-intro.html',
                },
                {
                    title  : 'Taking Google Analytics Further',
                    start  : '2017-10-26',
                    url    : '/google-analytics-further.html',
                },
                {
                    title  : 'Introduction to SEO Best Practices',
                    start  : '2017-11-23',
                    url    : '/seo-basics.html',
                },
                {
                    title  : 'Introduction to Social Media Marketing',
                    start  : '2018-02-15',
                    url    : '/social-media-intro',
                },
                {
                    title  : 'Introduction to Google Adwords',
                    start  : '2018-02-22',
                    url    : '/google-adwords-intro',
                },
                {
                    title  : 'Developing a Social Media Strategy',
                    start  : '2018-03-01',
                    url    : '/social-media-strategy',
                },
                {
                    title  : 'Analysing and Optimising Google Adwords',
                    start  : '2018-03-08',
                    url    : '/google-adwords-analysis',
                },
                {
                    title  : 'Social Media Content Strategy',
                    start  : '2018-03-15',
                    url    : '/social-media-content-strategy',
                },
                {
                    title  : 'Introduction to Google Analytics',
                    start  : '2018-03-22',
                    url    : '/google-analytics-intro',
                },
                {
                    title  : 'Social Media Advertising',
                    start  : '2018-03-29',
                    url    : '/social-media-advertising',
                },
                {
                    title  : 'Taking Google Analytics Further',
                    start  : '2018-04-05',
                    url    : '/google-analytics-further',
                },
                {
                    title  : 'Social Media Analytics and Reporting',
                    start  : '2018-04-12',
                    url    : '/social-media-analytics',
                },
                {
                    title  : 'Ecommerce Google Analytics',
                    start  : '2018-04-19',
                    url    : '/google-analytics-ecommerce',
                },
                {
                    title  : 'Introduction to Email Marketing',
                    start  : '2018-04-26',
                    url    : '/email-marketing-intro',
                },
                {
                    title  : 'Conversion Rate Optimisation',
                    start  : '2018-05-03',
                    url    : '/conversion-rate-optimisation',
                },
                {
                    title  : 'Taking Your Email Marketing Further',
                    start  : '2018-05-10',
                    url    : '/email-marketing-further',
                },
                {
                    title  : 'Introduction to Google Tag Manager',
                    start  : '2018-05-17',
                    url    : '/google-tag-manager-intro',
                },
                {
                    title  : 'Introduction to SEO Best Practices',
                    start  : '2018-05-24',
                    url    : '/seo-intro',
                },
                {
                    title  : 'Taking Google Tag Manager Further',
                    start  : '2018-05-31',
                    url    : '/google-tag-manager-further',
                },
                {
                    title  : 'Further SEO Techniques',
                    start  : '2018-06-07',
                    url    : '/seo-further',
                },
                {
                    title  : 'Leveraging Remarketing With Google Tools',
                    start  : '2018-06-14',
                    url    : '/remarketing',
                }
            ],
            color: 'orange',     // an option!
            textColor: 'black' // an option!
        }

        // any other event sources...

    ]

    })

// Owl Carousel
// basic demo, responsive with next/prev nav
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
    }
})

});

// END OF DOCUMENT READY

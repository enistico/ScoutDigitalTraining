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
                    title  : 'Google Adwords Optimisation',
                    start  : '2018-03-08',
                    url    : '/google-adwords-optimisation',
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
                    title  : 'Further SEO Techniques',
                    start  : '2018-06-07',
                    url    : '/seo-further',
                },
                {
                    title  : 'Social Media Consultations',
                    start  : '2018-07-03',
                    url    : '/social-media-consultations',
                },
                {
                    title  : 'Social Media Consultations',
                    start  : '2018-07-05',
                    url    : '/social-media-consultations',
                },
                {
                    title  : 'Social Media for Business',
                    start  : '2018-07-10',
                    url    : '/social-media-intro',
                },
                {
                    title  : 'Webinar: Getting Your Sh*t Organised',
                    start  : '2018-07-12',
                    url    : '/webinar-social-media-organisation',
                },
                {
                    title  : 'Introduction to Google Adwords',
                    start  : '2018-07-19',
                    url    : '/google-adwords-intro',
                },
                {
                    title  : 'Mastering Facebook and Instagram Ads (for individual accounts)',
                    start  : '2018-07-26',
                    url    : '/facebook-instagram-advertising-individual',
                },
                {
                    title  : 'Mastering Twitter and LinkedIn Advertising',
                    start  : '2018-07-26',
                    url    : '/twitter-linkedin-advertising',
                },
                {
                    title  : 'Facebook Pages Masterclass',
                    start  : '2018-07-31',
                    url    : '/facebook-masterclass',
                },
                {
                    title  : 'Mastering Facebook Business Manager',
                    start  : '2018-07-31',
                    url    : '/facebook-business-manager',
                },
                {
                    title  : 'Google Adwords Optimisation',
                    start  : '2018-08-02',
                    url    : '/google-adwords-optimisation',
                },
                {
                    title  : 'Instagram Masterclass',
                    start  : '2018-08-07',
                    url    : '/instagram-masterclass',
                },
                {
                    title  : 'Twitter Masterclass',
                    start  : '2018-08-09',
                    url    : '/twitter-masterclass',
                },
                {
                    title  : 'LinkedIn Masterclass',
                    start  : '2018-08-09',
                    url    : '/linkedin-masterclass',
                },
                {
                    title  : 'Developing a Social Media Strategy',
                    start  : '2018-08-21',
                    url    : '/social-media-strategy',
                },
                {
                    title  : 'Introduction to SEO Best Practices',
                    start  : '2018-08-23',
                    url    : '/seo-intro',
                },
                {
                    title  : 'Creating Engaging Social Media Content',
                    start  : '2018-08-27',
                    url    : '/social-media-content-strategy',
                },
                {
                    title  : 'Further SEO Techniques',
                    start  : '2018-08-30',
                    url    : '/seo-further',
                },
                {
                    title  : 'Mastering Facebook and Instagram Ads (for multiple accounts)',
                    start  : '2018-09-11',
                    url    : '/facebook-instagram-advertising-multiple',
                },
                {
                    title  : 'Introduction to Google Analytics',
                    start  : '2018-09-13',
                    url    : '/google-analytics-intro',
                },
                {
                    title  : 'Effective AND Efficient Social Media Reporting',
                    start  : '2018-09-17',
                    url    : '/social-media-analytics',
                },
                {
                    title  : 'Taking Google Analytics Further',
                    start  : '2018-09-20',
                    url    : '/google-analytics-further',
                },
                {
                    title  : 'Introduction to Email Marketing',
                    start  : '2018-09-27',
                    url    : '/email-marketing-intro',
                },
                {
                    title  : 'Taking Your Email Marketing Further',
                    start  : '2018-10-04',
                    url    : '/email-marketing-further',
                },
                {
                    title  : 'Facebook Pages Masterclass',
                    start  : '2018-10-09',
                    url    : '/facebook-masterclass',
                },
                {
                    title  : 'Instagram Masterclass',
                    start  : '2018-10-16',
                    url    : '/instagram-masterclass',
                },
                {
                    title  : 'Introduction to SEO Best Practices',
                    start  : '2018-10-18',
                    url    : '/seo-intro',
                },
                {
                    title  : 'Mastering Facebook and Instagram Ads (for individual accounts)',
                    start  : '2018-10-30',
                    url    : '/facebook-instagram-advertising-individual',
                },
                {
                    title  : 'Further SEO Techniques',
                    start  : '2018-11-01',
                    url    : '/seo-further',
                },
                {
                    title  : 'Developing a Social Media Strategy',
                    start  : '2018-11-13',
                    url    : '/social-media-strategy',
                },
                {
                    title  : 'Creating Engaging Social Media Content',
                    start  : '2018-11-20',
                    url    : '/social-media-content-strategy',
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

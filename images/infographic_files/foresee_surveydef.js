var $$FSR = {
  'enabled': true,
  'frames': false,
  'sessionreplay': true,
  'auto': true,
  'encode': true,
  'version': '18.1.9',
  'files': '/foresee/',
  // The 'swf_files' attribute needs to be set when foresee_transport.swf is not located at 'files'
  //'swf_files': '/some/other/location/'
  'id': 'AAD6VVSk/xznmckcC8tdNA==',
  'definition': 'foresee_surveydef.js',
  'swf': {
    'fileName': 'foresee_transport.swf',
    'scriptAccess': 'always'
  },
  'worker': 'foresee_worker.js',
  'embedded': false,
  'replay_id': 'worldwildlife.org',
  'site_id': 'worldwildlife.org',
  'attach': false,
  'renderer': 'W3C',
  // or "ASRECORDED"
  'layout': 'CENTERFIXED',
  // or "LEFTFIXED" or "LEFTSTRETCH" or "CENTERSTRETCH"
  'triggerDelay': 0,
  'heartbeat': true,
  'enableAMD': false,
  'pools': [{
    'path': '.',
    'sp': 100 // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
  }],
  'sites': [{
    'path': /\w+-?\w+\.(com|org|edu|gov|net|co\.uk)/
  },
  {
    'path': '.',
    'domain': 'default'
  }],
  'storageOption': 'cookie',
  'nameBackup': window.name,
  'iframeHrefs': ["frameWorker.html"],
  'acceptableorigins': []
};

$$FSR.FSRCONFIG = {};

(function (config) {

  var FSR, supports_amd = !! config.enableAMD && typeof(_4c.global["define"]) === 'function' && !! _4c.global["define"]["amd"];

  if (!supports_amd) FSR = window.FSR;
  else FSR = {};
/*
 * ForeSee Survey Def(s)
 */
  FSR.surveydefs = [{
    name: 'browse',
    invite: {
      when: 'onentry'
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 15,
      lf: 2
    },
    include: {
      urls: ['.']
    }
  }];

/*
 * ForeSee Properties
 */
  FSR.properties = {
    repeatdays: 90,

    repeatoverride: false,

    altcookie: {
      name: 'fsrInviteShown',
      value: 'y'
    },

    language: {
      locale: 'en'
    },

    exclude: {
      variables: [{
        name: 'fsr$ip',
        value: /^38\.100\.54\.(2(5[3-4]))$/
      }]
    },

    ignoreWindowTopCheck: false,

    ipexclude: 'fsr$ip',

    mobileHeartbeat: {
      delay: 60,
      /*mobile on exit heartbeat delay seconds*/
      max: 3600 /*mobile on exit heartbeat max run time seconds*/
    },

    invite: {

      // For no site logo, comment this line:
      siteLogo: "sitelogo.gif",

      //alt text fore site logo img
      siteLogoAlt: "",

      /* Desktop */
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Your Opinion Matters!",
          blurb: "Thank you for visiting World Wildlife Fund. You have been selected to take part in a brief survey to let us know what we're doing well and where we can improve.",
          noticeAboutSurvey: "Please take a few minutes to share your opinions and look for the survey at the <u>conclusion</u> of your visit.",
          attribution: "This survey is conducted by an independent company ForeSee, on behalf of World Wildlife Fund.",
          closeInviteButtonText: "Click to close.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll give feedback",
          error: "Error",
          warnLaunch: "this will launch a new window"
        }]
      ],
      exclude: {
        urls: ['/site/Advocacy', '/site/TRR/PandaNation/Panda-Nation/', '//www.gftpln.org/Home.do?orgId=5811', '//careers-wwfus.icims.com', '//www.nathab.com/', '//extappsecure.worldwildlife.org', '//assets.worldwildlife.org', 'secure.worldwildilfe.org', '&df_preview=true', '&page=UserAction&id=####', '/site/TRR/', '&s_langpref=es_US', 'pagename=panda_nation_center', '//support.worldwildlife.org/responsivepc/dashboard.html#dashboard-home', 'donation=form1', 'donation=form2', 'support.worldwildlife.org/site/Donation2', '//extapp.worldwildlife.org'],
        referrers: [],
        userAgents: [],
        browsers: [],
        cookies: [{
          name: 'wwfWildFinderSurvey2015',
          value: '.'
        },
        {
          name: 'wwfAnnualSurvey2015',
          value: '.'
        },
        {
          name: 'partners',
          value: '.'
        }],
        variables: [{
          name: 'iAmDonationForm',
          value: /true/
        }]
      },
      include: {
        local: ['.']
      },

      delay: 0,
      timeout: 0,

      hideOnClick: false,

      hideCloseButton: false,

      css: 'foresee_dhtml.css',

      hide: [],

      hideFlash: false,

      type: 'dhtml',
      /* desktop */
      // url: 'invite.html'
      /* mobile */
      url: 'invite-mobile.html',
      back: 'url'

      //SurveyMutex: 'SurveyMutex'
    },

    tracker: {
      width: '690',
      height: '415',

      // Timeout is the normal between-page timeout
      timeout: 10,

      // Fast timeout is when we think there's a good chance we've closed the browser
      fasttimeout: 4,

      adjust: true,
      alert: {
        enabled: true,
        message: 'The survey is now available.'
      },
      url: 'tracker.html'
    },

    survey: {
      width: 690,
      height: 600
    },

    qualifier: {
      footer: '<div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
      width: '690',
      height: '500',
      bgcolor: '#333',
      opacity: 0.7,
      x: 'center',
      y: 'center',
      delay: 0,
      buttons: {
        accept: 'Continue'
      },
      hideOnClick: false,
      css: 'foresee_dhtml.css',
      url: 'qualifying.html'
    },

    cancel: {
      url: 'cancel.html',
      width: '690',
      height: '400'
    },

    pop: {
      what: 'survey',
      after: 'leaving-site',
      pu: false,
      tracker: true
    },

    meta: {
      referrer: true,
      terms: true,
      ref_url: true,
      url: true,
      url_params: true,
      user_agent: false,
      entry: false,
      entry_params: false
    },

    events: {
      enabled: true,
      id: true,
      codes: {
        purchase: 800,
        items: 801,
        dollars: 802,
        followup: 803,
        information: 804,
        content: 805
      },
      pd: 7,
      custom: {
        purchase: {
          enabled: true,
          repeat: false,
          source: 'url',
          patterns: ['donation=completed', 'receipt.aspx']
        }
      }
    },

    previous: false,

    analytics: {
      google_local: false,
      google_remote: false
    },

    cpps: {
      takeAction: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: ['page=OnScreenThanks'],
          value: 'Y'
        }]
      },
      pandaNationSignUp: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: [/\/site\/trr\/pandanation\/.*pg\=rthanks(.*)/, /\/panda-nation\/.*\/registration\/completed/],
          value: 'Y'
        }]
      }
    },

    mode: 'first-party'
  };

  if (supports_amd) {
    define(function () {
      return FSR
    });
  }

})($$FSR);
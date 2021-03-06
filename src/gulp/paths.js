// This module provides all the configs for gulp tasks

var player = {
  app: 'app/private/',
  public: 'app/public/',
  dist: 'dist',
  common: 'app/common/'
}

var buildThemes = {
  dist: 'app/themes/',
  themes: 'semantic/src/themes'
}

var paths = {
  player: player,
  build_themes: buildThemes,
  src: {
    scripts: [player.app + '/scripts/*.js', player.app + '/scripts/**/*.js'],
    styles: [player.app + 'app/styles/**/main.less'],
    images: player.common + '/images/*.*',
    test: ['test/testData/testData.js', 'test/testData/announcementTestData.js',
      'test/testData/dashboardDataSourceTestData.js', 'test/testData/dashboardTestData.js',
      'test/spec/app/private/**/**/*.js',
      'test/spec/app/public/**/**/*.js'],
    thirdparty: [player.app + '/thirdparty/**/*.js',
      player.app + '/thirdparty/**/**/**/*.css',
      player.app + '/thirdparty/**/**/**/**/*.*'
    ],

    testRequire: [
      'app/thirdparty/bower_components/jquery/dist/jquery.min.js',
      'app/thirdparty/bower_components/angular/angular.min.js',
      'app/thirdparty/libs/angular-inview.js',
      'app/thirdparty/libs/eventbus.min.js',
      'app/thirdparty/libs/md5.js',
      'app/thirdparty/libs/telemetry.min.js',
      'app/thirdparty/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      'app/thirdparty/semantic/semantic.min.js',
      'app/thirdparty/bower_components/jquery-ui/jquery-ui.min.js',
      'app/thirdparty/bower_components/angular-cookies/angular-cookies.min.js',
      'app/thirdparty/bower_components/angular-resource/angular-resource.js',
      'app/thirdparty/bower_components/angular-cookies/angular-cookies.js', // eslint-disable-line
      'app/thirdparty/bower_components/angular-sanitize/angular-sanitize.js', // eslint-disable-line
      'app/thirdparty/bower_components/angular-route/angular-route.min.js',
      'app/thirdparty/bower_components/angular-mocks/angular-mocks.js',
      'app/thirdparty/bower_components/semantic-ui-calendar/dist/calendar.min.js',
      'app/thirdparty/bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'app/thirdparty/bower_components/angular-ui-router/release/stateEvents.min.js',
      'app/thirdparty/libs/semantic-ui-tree-picker/semantic-ui-tree-picker.js',
      'app/thirdparty/bower_components/ngstorage/ngStorage.min.js',
      'app/thirdparty/bower_components/moment/min/moment-with-locales.min.js',
      'app/thirdparty/bower_components/angular-pagedown/angular-pagedown.min.js',
      'app/thirdparty/bower_components/pagedown/Markdown.Converter.js',
      'app/thirdparty/bower_components/pagedown/Markdown.Sanitizer.js',
      'app/thirdparty/bower_components/pagedown/Markdown.Extra.js',
      'app/thirdparty/bower_components/pagedown/Markdown.Editor.js',
      'app/thirdparty/bower_components/slick-carousel/slick/slick.min.js',
      'app/thirdparty/bower_components/angular-sanitize/angular-sanitize.min.js',
      'app/thirdparty/bower_components/izimodal/js/iziModal.min.js',
      'app/thirdparty/bower_components/jquery.fancytree/dist/jquery.fancytree.min.js',
      'app/thirdparty/bower_components/lodash/dist/lodash.min.js',
      'app/thirdparty/bower_components/angular-uuid4/angular-uuid4.min.js',
      'app/thirdparty/bower_components/js-md5/build/md5.min.js',
      'app/thirdparty/bower_components/izitoast/dist/js/iziToast.min.js',
      'app/thirdparty/bower_components/chart.js/dist/Chart.min.js',
      'app/thirdparty/bower_components/angular-chart.js/dist/angular-chart.min.js',
      'app/thirdparty/semantic-tree-picker/semantic-ui-tree-picker.js',
      'app/thirdparty/libs/generateAndDownloadCSV.min.js'
    ],
    karma: 'karma.conf.js',
    views: {
      main: player.app + '/index.html',
      files: [player.app + '/views/**/*.html']
    },
    nodeScripts: ['app/server.js', 'app/helpers/*.js'],
    nodeSpecs: ['test/spec/app/serverSpec.js'],
    nodeCoverage: 'coverage/node',
    portalCoverage: 'coverage/portal'
  },
  dist: {
    path: 'dist/',
    images: 'images/',
    scripts: 'scripts/',
    styles: 'styles',
    views: 'views',
    config: 'config/'
  },
  jsonConfigArr: [
    { name: 'config', path: 'config/playerAppConfig.json' }
  ],
  jsonConfigPublic: [
    { name: 'config', path: 'config/publicAppConfig.json' }
  ],
  public_bower_js: [
    'dist/thirdparty/libs/eventbus.min.js',
    'dist/thirdparty/bower_components/jquery/dist/jquery.min.js',
    'dist/thirdparty/bower_components/jquery-ui/jquery-ui.min.js',
    'dist/thirdparty/bower_components/angular/angular.min.js',
    'dist/thirdparty/bower_components/angular-cookies/angular-cookies.min.js',
    'dist/thirdparty/bower_components/angular-route/angular-route.min.js',
    'dist/thirdparty/bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'dist/thirdparty/bower_components/semantic-ui-calendar/dist/calendar.min.js',
    'dist/thirdparty/bower_components/izitoast/dist/js/iziToast.min.js',
    'dist/thirdparty/bower_components/angular-uuid4/angular-uuid4.min.js',
    'dist/thirdparty/bower_components/lodash/lodash.js',
    'dist/thirdparty/bower_components/moment/min/moment-with-locales.min.js',
    'dist/thirdparty/bower_components/angular-sanitize/angular-sanitize.min.js',
    'dist/thirdparty/bower_components/jquery.fancytree/dist/jquery.fancytree.min.js'
  ],
  public_bower_css: [
    'dist/thirdparty/bower_components/semantic-ui-calendar/dist/calendar.min.css',
    'dist/thirdparty/bower_components/izitoast/dist/css/iziToast.min.css'
  ],
  public_scripts: [
    'dist/public/scripts/service/httpService.js',
    'dist/public/scripts/service/signUpService.js',
    'dist/public/scripts/service/toasterService.js',
    'dist/public/scripts/service/publicPlayerTelemetryUtilsService.js',
    'dist/public/scripts/service/contentService.js',
    'dist/public/scripts/directive/error.js',
    'dist/public/scripts/directive/loader.js',
    'dist/public/scripts/directive/courseDiscussions.js',
    'dist/public/scripts/directive/publicContentPlayer.js',
    'dist/public/scripts/controllers/signUpController.js',
    'dist/public/scripts/controllers/publicContentPlayerController.js',
    'dist/public/scripts/controllers/courseScheduleController.js',
    'dist/public/scripts/controllers/collectionPlayerController.js',
    'dist/public/scripts/filters/dateFilter.js',
    'dist/public/scripts/controllers/dialCodeController.js',
    'dist/public/scripts/filters/fileSize.js'
  ],
  private_bower_js: [
    'dist/thirdparty/libs/eventbus.min.js',
    'dist/thirdparty/libs/md5.js',
    'dist/thirdparty/libs/telemetry.min.js',
    'dist/thirdparty/bower_components/jquery/dist/jquery.min.js',
    'dist/thirdparty/bower_components/jquery-ui/jquery-ui.min.js',
    'dist/thirdparty/bower_components/angular/angular.min.js',
    'dist/thirdparty/libs/angular-inview.js',
    'dist/thirdparty/bower_components/angular-cookies/angular-cookies.min.js',
    'dist/thirdparty/bower_components/angular-route/angular-route.min.js',
    'dist/thirdparty/bower_components/semantic-ui-calendar/dist/calendar.min.js',
    'dist/thirdparty/bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'dist/thirdparty/bower_components/angular-ui-router/release/stateEvents.min.js',
    'dist/thirdparty/libs/semantic-ui-tree-picker/semantic-ui-tree-picker.js',
    'dist/thirdparty/bower_components/ngstorage/ngStorage.min.js',
    'dist/thirdparty/bower_components/moment/min/moment-with-locales.min.js',
    'dist/thirdparty/bower_components/angular-pagedown/angular-pagedown.min.js',
    'dist/thirdparty/bower_components/pagedown/Markdown.Converter.js',
    'dist/thirdparty/bower_components/pagedown/Markdown.Sanitizer.js',
    'dist/thirdparty/bower_components/pagedown/Markdown.Extra.js',
    'dist/thirdparty/bower_components/pagedown/Markdown.Editor.js',
    'dist/thirdparty/bower_components/slick-carousel/slick/slick.min.js',
    'dist/thirdparty/bower_components/angular-sanitize/angular-sanitize.min.js',
    'dist/thirdparty/bower_components/izimodal/js/iziModal.min.js',
    'dist/thirdparty/bower_components/jquery.fancytree/dist/jquery.fancytree.min.js',
    'dist/thirdparty/bower_components/lodash/dist/lodash.min.js',
    'dist/thirdparty/bower_components/angular-uuid4/angular-uuid4.min.js',
    'dist/thirdparty/bower_components/js-md5/build/md5.min.js',
    'dist/thirdparty/bower_components/izitoast/dist/js/iziToast.min.js',
    'dist/thirdparty/bower_components/chart.js/dist/Chart.min.js',
    'dist/thirdparty/bower_components/angular-chart.js/dist/angular-chart.min.js',
    'dist/thirdparty/semantic-tree-picker/semantic-ui-tree-picker.js',
    'dist/thirdparty/libs/generateAndDownloadCSV.min.js',
    'dist/thirdparty/bower_components/file-upload/fine-uploader/fine-uploader.js'
  ],
  private_bower_css: [
    'dist/thirdparty/libs/semantic-ui-tree-picker/semantic-ui-tree-picker.css',
    'dist/thirdparty/bower_components/izimodal/css/iziModal.min.css',
    'dist/thirdparty/bower_components/semantic-ui-calendar/dist/calendar.min.css',
    'dist/thirdparty/bower_components/izitoast/dist/css/iziToast.min.css',
    'dist/thirdparty/bower_components/file-upload/fine-uploader/fine-uploader-new.min.css'
  ],
  private_scripts: [
    'dist/private/scripts/factories/sessionFactory.js',
    'dist/private/scripts/factories/announcementModel.js',
    'dist/private/scripts/services/adapters/httpAdapter.js',
    'dist/private/scripts/services/adapters/announcementAdapter.js',
    'dist/private/scripts/services/restfulContentService.js',
    'dist/private/scripts/services/restfulLearnerService.js',
    'dist/private/scripts/services/contentService.js',
    'dist/private/scripts/services/noteService.js',
    'dist/private/scripts/services/courseService.js',
    'dist/private/scripts/services/learnService.js',
    'dist/private/scripts/services/userService.js',
    'dist/private/scripts/services/pageSectionService.js',
    'dist/private/scripts/services/searchService.js',
    'dist/private/scripts/services/permissionsService.js',
    'dist/private/scripts/services/playerTelemetryUtilsService.js',
    'dist/private/scripts/services/contentStateService.js',
    'dist/private/scripts/services/portalTelemetryService.js',
    'dist/private/scripts/services/toasterService.js',
    'dist/private/scripts/services/routeHelperService.js',
    'dist/private/scripts/services/formValidation.js',
    'dist/private/scripts/services/adminService.js',
    'dist/private/scripts/services/batchService.js',
    'dist/private/scripts/services/workSpaceUtilsService.js',
    'dist/private/scripts/services/configService.js',
    'dist/private/scripts/services/dashboardService.js',
    'dist/private/scripts/services/dataService.js',
    'dist/private/scripts/services/paginationService.js',
    'dist/private/scripts/controllers/searchController.js',
    'dist/private/scripts/controllers/searchResultController.js',
    'dist/private/scripts/controllers/conceptPickerController.js',
    'dist/private/scripts/controllers/appController.js',
    'dist/private/scripts/controllers/note/noteListController.js',
    'dist/private/scripts/controllers/courseScheduleController.js',
    'dist/private/scripts/controllers/learnController.js',
    'dist/private/scripts/controllers/resourceController.js',
    'dist/private/scripts/controllers/communityController.js',
    'dist/private/scripts/controllers/homeController.js',
    'dist/private/scripts/controllers/profileController.js',
    'dist/private/scripts/controllers/contentPlayer.js',
    'dist/private/scripts/controllers/note/noteCardController.js',
    'dist/private/scripts/controllers/contentPlayerController.js',
    'dist/private/scripts/controllers/workspace/createLessonController.js',
    'dist/private/scripts/controllers/workspace/draftContentController.js',
    'dist/private/scripts/controllers/workspace/reviewContentController.js',
    'dist/private/scripts/controllers/workspace/publishedContentController.js',
    'dist/private/scripts/controllers/workspace/allUploadedContentController.js',
    'dist/private/scripts/controllers/contentEditorController.js',
    'dist/private/scripts/controllers/collectionEditorController.js',
    'dist/private/scripts/controllers/genericEditorController.js',
    'dist/private/scripts/controllers/workspace/TextBookController.js',
    'dist/private/scripts/controllers/workspace/CollectionController.js',
    'dist/private/scripts/controllers/workspace/previewContentController.js',
    'dist/private/scripts/controllers/workspace/upForReviewContentController.js',
    'dist/private/scripts/controllers/collectionPlayerController.js',
    'dist/private/scripts/controllers/pageSectionController.js',
    'dist/private/scripts/controllers/workspace/CourseController.js',
    'dist/private/scripts/controllers/admin/adminController.js',
    'dist/private/scripts/controllers/common/contentFlagController.js',
    'dist/private/scripts/controllers/workspace/flaggedContentController.js',
    'dist/private/scripts/controllers/batch/batchListController.js',
    'dist/private/scripts/controllers/batch/batchController.js',
    'dist/private/scripts/controllers/batch/batchUpdateController.js',
    'dist/private/scripts/controllers/workspace/createLessonPlanController.js',
    'dist/private/scripts/controllers/dashboard/orgDashboardController.js',
    'dist/private/scripts/controllers/common/contentSharingController.js',
    'dist/private/scripts/controllers/dashboard/orgDashboardController.js',
    'dist/private/scripts/controllers/search/publicProfileController.js',
    'dist/private/scripts/controllers/dashboard/courseProgressDashboardController.js',
    'dist/private/scripts/controllers/dashboard/courseConsumptionDashboardController.js',
    'dist/private/scripts/controllers/admin/bulkUploadController.js',
    'dist/private/scripts/filters/dateFilter.js',
    'dist/private/scripts/filters/noteListFilter.js',
    'dist/private/scripts/filters/highLightFilter.js',
    'dist/private/scripts/directives/applyScript.js',
    'dist/private/scripts/directives/appLoader.js',
    'dist/private/scripts/directives/errorMessage.js',
    'dist/private/scripts/directives/contentPlayer.js',
    'dist/private/scripts/directives/angular-translate.js',
    'dist/private/scripts/directives/noteCardDirective.js',
    'dist/private/scripts/directives/courseDiscussions.js',
    'dist/private/scripts/directives/slickDirective.js',
    'dist/private/scripts/directives/addNoteDirective.js',
    'dist/private/scripts/directives/permissionsDirective.js',
    'dist/private/scripts/directives/pageSectionDirective.js',
    'dist/private/scripts/directives/searchDirective.js',
    'dist/private/scripts/directives/contentFlagDirective.js',
    'dist/private/scripts/directives/batchCardDirective.js',
    'dist/private/scripts/directives/conceptPicker.js',
    'dist/private/scripts/directives/admin/searchedUser.js',
    'dist/private/scripts/directives/admin/bulkUpload.js',
    'dist/private/scripts/directives/batchDetailsDirective.js',
    'dist/private/scripts/directives/contentSharingDirective.js',
    'dist/private/scripts/services/setup/setupService.js',
    'dist/private/scripts/controllers/setup/setupController.js',
    'dist/private/scripts/controllers/workspace/limitedPublishedContentController.js',
    'dist/private/scripts/directives/fileUpload.js',
    'dist/private/scripts/services/geoService.js',
    'dist/private/scripts/components/parent.js',
    'dist/private/scripts/components/geo.js',
    'dist/private/scripts/controllers/announcement/announcementInboxListController.js',
    'dist/private/scripts/controllers/announcement/announcementOutboxListController.js',
    'dist/private/scripts/controllers/announcement/announcementDetailsController.js',
    'dist/private/scripts/controllers/announcement/composeAnnouncementController.js',
    'dist/private/scripts/directives/announcementDetailsDirective.js',
    'dist/private/scripts/controllers/profileVisibilityController.js',
    'dist/private/scripts/directives/profileVisibility.js',
    'dist/private/scripts/factories/fileUploadFactory.js',
    'dist/private/scripts/factories/dashboard/queryService.js',
    'dist/private/scripts/factories/dashboard/rendererService.js',
    'dist/private/scripts/factories/dashboard/graph/lineChart.js',
    'dist/private/scripts/services/dashboard/datasources/courseConsumptionDataSource.js',
    'dist/private/scripts/services/dashboard/datasources/courseProgressDataSource.js',
    'dist/private/scripts/services/dashboard/datasources/orgCreationDataSource.js',
    'dist/private/scripts/services/dashboard/datasources/orgConsumptionDataSource.js',
    'dist/private/scripts/services/dashboard/datasources/dataSourceUtils.js',
    'dist/private/scripts/services/dashboard/datasources/downloadReportDataSource.js',
    'dist/private/scripts/services/telemetryService.js',
    'dist/private/scripts/controllers/dataDrivenFiltersController.js',
    'dist/private/scripts/directives/badge/contentBadgeDirective.js',
    'dist/private/scripts/directives/badge/profileBadgeDirective.js',
    'dist/private/scripts/controllers/badge/contentBadgeController.js',
    'dist/private/scripts/services/badgeService.js',
    'dist/private/scripts/controllers/workspace/DataDrivenFormController.js',
    'dist/private/scripts/controllers/badge/profileBadgeController.js'
  ],
  telemetry_js: [
    'dist/private/scripts/telemetry/TelemetryEvent.js',
    'dist/private/scripts/telemetry/TelemetryService.js',
    'dist/private/scripts/telemetry/TelemetryV2Manager.js',
    'dist/private/scripts/telemetry/TelemetryServiceUtil.js',
    'dist/private/scripts/telemetry/InActiveEvent.js'
  ],
  jsdocs_files: [
    'app/helpers/**/*.js',
    'app/private/**/*.js',
    'app/public/**/*.js'
  ],
  jsdocs_config: './configs/jsdocConfig.json',
  cdnFiles: [
    'dist/common/js/org.js',
    'dist/private/external.min.js',
    'dist/thirdparty/semantic/semantic.min.js',
    'dist/private/scripts/utils/util.js',
    'dist/public/telemetry.min.js',
    'dist/private/scripts/playerAppConfig.js',
    'dist/private/scripts/managers/eventManager.js',
    'dist/private/scripts/app.js',
    'dist/private/scripts/routes/appRoute.js',
    'dist/private/scripts/routes/announcementRoute.js',
    'dist/private/script.min.js',
    'dist/common/fonts/**',
    'dist/common/images/**',
    'dist/themes/**',
    'dist/common/styles/main.css',
    'dist/thirdparty/semantic/**/*',
    'dist/private/external.min.css',
    'dist/thirdparty/bower_components/**/*',
    'dist/public/external.min.js',
    'dist/private/scripts/utils/util.js',
    'dist/private/scripts/managers/eventManager.js',
    'dist/public/scripts/publicAppConfig.js',
    'dist/public/scripts/application.js',
    'dist/public/scripts/routes/publicAppRoute.js',
    'dist/public/script.min.js',
    'dist/public/external.min.css'
  ],
  cdnDest: 'dist/cdn/',
  eslint: ['app/*.js', 'app/**/*.js', 'test/**/*.js', 'gulp/*.js']

}

module.exports = paths

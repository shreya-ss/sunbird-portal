'use strict';
angular.module('playerApp')
        .service('playerTelemetryUtilsService', function ($rootScope, $stateParams) {
            this.startTelemetry = function (data) {
                org.sunbird.portal.eventManager.dispatchEvent("sunbird:telemetry:start", data);
            };
            this.updateTelemetry = function (data) {
                org.sunbird.portal.eventManager.dispatchEvent("sunbird:telemetry:intreact", data);
            };
            this.endTelemetry = function (data) {
                org.sunbird.portal.eventManager.dispatchEvent("sunbird:telemetry:end",data);
                org.sunbird.portal.eventManager.dispatchEvent("sunbird:telemetry:sync", {
                    TelemetryData: TelemetryService._data
                });
            };
            this.navigateTelemetry = function (data) {
                org.sunbird.portal.eventManager.dispatchEvent("sunbird:telemetry:navigate", data);
            };
            this.init = function (data) {
                var _instance = {
                    correlationData: [{"id": $stateParams.tocId || data.contentId, "type": "ContentSession"}],
                    user: {"avatar": "assets/icons/avatar_anonymous.png", "profileImage": "assets/icons/avatar_anonymous.png", "gender": "male", "handle": "Anonymous", "age": 6, "standard": -1, "sid": "", "did": "", "uid": $rootScope.userId},
                    gameData: {"id": "org.sunbird.player", "ver": "1.0"}
                }
                org.sunbird.portal.eventManager.dispatchEvent('sunbird:telemetry:init', _instance);
            };

        });
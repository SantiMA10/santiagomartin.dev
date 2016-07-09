(function(){

    'use strict';

    angular.module('app', [])
        .controller('MainController', function() {
            var that = this;

            that.socialList = [
                {
                    'alt':'Github',
                    'url':'https://github.com/SantiMA10/'
                },
                {
                    'alt':'Twitter',
                    'url':'https://twitter.com/SantiMA10/'
                },
                {
                    'alt':'Blog',
                    'url':'https://medium.com/@Santi'
                }
            ];

            that.projectList = [
                {
                    'name':'Trut',
                    'url':'https://www.youtube.com/user/TRUToficial',
                    'active':true
                },
                {
                    'name':'YouWatch a Pebble Watchface (JavaScript)',
                    'url':'https://github.com/SantiMA10/YouWatch',
                    'active':true
                },
                {
                    'name':'Internet Status Check (Angular & Node.js)',
                    'url':'https://github.com/SantiMA10/Internet-Status-Check',
                    'active':true
                },
                {
                    'name':'CampusVirtualPlus (Extension Google Chrome)',
                    'url':'https://github.com/SantiMA10/CampusVirtualPlus',
                    'active':true
                },
                {
                    'name':'DNS Autoupdate (Node.js)',
                    'url':'https://github.com/SantiMA10/DNS-Autoupdate',
                    'active':true
                },
                {
                    'name':'Change macOS Screenshot Folder (Swift)',
                    'url':'https://github.com/SantiMA10/Change-macOS-Screenshot-Folder',
                    'active':true
                },
                {
                    'name':'Change OSX Screenshot Folder (Java)',
                    'url':'https://github.com/SantiMA10/Change-OS-X-Screenshot-Folder',
                    'active':false
                },
            ];

            that.getDownloadCount = function(url){
              return 20;
            };

        });

})();



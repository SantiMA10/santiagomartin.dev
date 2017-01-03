(function(){

    'use strict';

    angular.module('santima_xyz', [])
        .controller('MainController', function() {
            var ctrl = this;

            ctrl.socialList = [
                {
                    'alt':'Github',
                    'url':'https://github.com/SantiMA10/',
                    'icon' : 'assets/img/social_github.png'
                },
                {
                    'alt':'Twitter',
                    'url':'https://twitter.com/SantiMA10/',
                    'icon' : 'assets/img/social_twitter.png'
                },
                {
                    'alt':'Blog',
                    'url':'https://medium.com/@Santi',
                    'icon' : 'assets/img/social_medium.png'
                },
                {
                    'alt':'LinkedIn',
                    'url':'https://www.linkedin.com/in/santiago-martin-agra',
                    'icon' : 'assets/img/social_linkedin.png'
                },
                {
                    'alt':'Trut',
                    'url':'https://www.youtube.com/user/TRUToficial',
                    'icon' : 'assets/img/social_youtube.png'
                }
            ];

        });

})();



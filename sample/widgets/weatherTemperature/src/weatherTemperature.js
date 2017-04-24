/*
 * The MIT License
 *
 * Copyright (c) 2015, Sebastian Sdorra
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

angular.module('adf.widget.weatherRain', ['adf.provider','adf.widget.weatherService'])
  .value('weatherApiKey', '2decdac859755da9d25281b20f0dc7a1')
  .value('weatherServiceUrl', 'http://api.openweathermap.org/data/2.5/weather?units=metric&callback=JSON_CALLBACK&q=')
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('weatherRain', {
        title: 'Weather',
        description: 'Display the current temperature of a city',
        templateUrl: '{widgetsPath}/weatherRain/src/view.html',
        controller: 'weatherCtrl',
        reload: true,
        resolve: {
          data: function(weatherService, config){
            if (config.location){
              return weatherService.get(config.location);
            }
          }
        },
        edit: {
          templateUrl: '{widgetsPath}/weatherRain/src/edit.html'
        }
      });
  })

  .controller('weatherCtrl', function($scope, data){
    $scope.data = data;
  });

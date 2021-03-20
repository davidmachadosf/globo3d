(function() {
    var _0xf34ax1 = function(_0xf34ax2, _0xf34ax3, _0xf34ax4, _0xf34ax5) {
        if (_0xf34ax2 && _0xf34ax2['prop']('tagName') == 'IMG') {
            this['element'] = _0xf34ax2;
            this['strHoverImg'] = _0xf34ax3;
            this['element']['css']('cursor', 'pointer');
            $('<img />')['attr']('src', this['strHoverImg'])['appendTo']($('body'))['hide']();
            _0xf34ax2['bind']('mouseenter', $['proxy'](this['mouseEnter'], this));
            _0xf34ax2['bind']('mouseleave', $['proxy'](this['mouseLeave'], this));
            if (typeof _0xf34ax4 === 'string' && _0xf34ax4['length'] > 0) {
                this['strDownImg'] = _0xf34ax4;
                $('<img />')['attr']('src', this['strDownImg'])['appendTo']($('body'))['hide']();
                _0xf34ax2['bind']('mousedown', $['proxy'](this['mouseDown'], this))
            };
            if (typeof _0xf34ax5 === 'string' && _0xf34ax5['length'] > 0) {
                this['strNormalImg'] = _0xf34ax5
            }
            else {
                this['_strNormalImg'] = $(this['element'])['attr']('src')
            }
        }
    };
    _0xf34ax1['prototype']['mouseEnter'] = function() {
        this['element']['attr']('src', this['strHoverImg'])
    };
    _0xf34ax1['prototype']['mouseLeave'] = function() {
        this['element']['attr']('src', this._strNormalImg)
    };
    _0xf34ax1['prototype']['mouseDown'] = function() {
        this['element']['attr']('src', this['strDownImg'])
    };
    _0xf34ax1['prototype']['setNormalImage'] = function(_0xf34ax6) {
        this['_strNormalImg'] = _0xf34ax6;
        this['element']['attr']('src', this._strNormalImg)
    };
    _0xf34ax1['prototype']['getNormalImage'] = function() {
        return this['_strNormalImg']
    };
    window['DOMButton'] = _0xf34ax1
})();
(function() {
    var _0xf34ax7 = function() {
            var _0xf34ax9 = this['testLegitamacy']();
            if (!_0xf34ax9) {
                $('#loadingDialogue')['hide']()
            }
            else {
                $('#activityContent')['hide']();
                window['webgl'] = ThreeUtils['isWebGLSupported']();
                if (!window['webgl']) {
                    $('#webGLError')['show']();
                    $('#lnkSimplifiedVersion')['click']($['proxy'](this['loadSimplifiedVersion'], this));
                    $('.browser')['bind']('mouseenter', function() {
                        $(this)['children']('.version')['fadeIn'](200)
                    });
                    $('.browser')['bind']('mouseleave', function() {
                        $(this)['children']('.version')['fadeOut'](200)
                    });
                    this['declareObjectPolyfill']();
                    var _0xf34axa = this['getInternetExplorerVersion']();
                    if (_0xf34axa != -1 && _0xf34axa < 8) {
                        $('#loadingDialogue')['hide']();
                        $('#alternateVersion')['hide']()
                    }
                }
                else {
                    if (HTML5Utils['isScreenTooSmall']()) {
                        $('#databaseOverlay')['hide']();
                        $('#smallScreenDialogue')['show']();
                        $('#btnProceedAnyway')['click']($['proxy'](this['btnProceedAnyway_click'], this))
                    }
                    else {
                        this['init']()
                    }
                }
            }
        },
        _0xf34ax8 = _0xf34ax7['prototype'];
    _0xf34ax8['testLegitamacy'] = function() {
        var _0xf34axb = new Array(new Array(101, 99, 104, 97, 108, 107, 46, 99, 111, 46, 117, 107), new Array(103, 105, 114, 108, 121, 45, 115, 119, 111, 116, 46, 99, 111, 109), new Array(103, 105, 114, 108, 121, 45, 115, 119, 111, 116, 46, 99, 111, 46, 117, 107), new Array(108, 117, 109, 112, 116, 121, 46, 99, 111, 109), new Array(105, 110, 115, 101, 116, 45, 111, 110, 108, 105, 110, 101, 46, 99, 111, 109), new Array(105, 110, 115, 101, 116, 45, 111, 110, 108, 105, 110, 101, 46, 99, 111, 46, 117, 107), new Array(115, 116, 101, 109, 103, 101, 101, 107, 46, 99, 111, 109), new Array(115, 116, 101, 109, 103, 101, 101, 107, 46, 99, 111, 46, 117, 107));
        var _0xf34axc = location['host'];
        if (typeof _0xf34axc === 'undefined') {
            _0xf34axc = ''
        };
        var _0xf34axd = false;
        var _0xf34axe = 0;
        for (var _0xf34axf = 0; _0xf34axf < _0xf34axb['length']; _0xf34axf++) {
            var _0xf34ax10 = _0xf34axb[_0xf34axf];
            var _0xf34ax11 = '';
            for (var _0xf34ax12 = 0; _0xf34ax12 < _0xf34ax10['length']; _0xf34ax12++) {
                _0xf34ax11 += String['fromCharCode'](_0xf34ax10[_0xf34ax12])
            };
            _0xf34axe = _0xf34axc['lastIndexOf'](_0xf34ax11);
            if (_0xf34axe != -1) {
                if (_0xf34axe == _0xf34axc['length'] - _0xf34ax11['length']) {
                    _0xf34axd = true;
                    break
                }
            }
        };
        return _0xf34axd
    };
    _0xf34ax8['init'] = function() {
        $('#databaseOverlay')['show']();
        $('#loadingDialogue')['hide']();
        this['positionElements']();
        this['initListeners']();
        this['initLogoAndCopyright']();
        new DOMButton($('#btnHome img'), 'images/menuIcons/home_over.png');
        new DOMButton($('#btnCopyright img'), 'images/menuIcons/copyright_over.png');
        $($['proxy'](this['jumpToResource'], this))
    };
    _0xf34ax8['jumpToResource'] = function() {
        if (window['location']['hash']) {
            var _0xf34ax13 = window['location']['hash'];
            if ($(_0xf34ax13)['hasClass']('earthIcon')) {
                _0xf34ax13 = _0xf34ax13['substring'](1);
                window['currentSkin'] = _0xf34ax13;
                this['loadActivity']()
            }
        }
    };
    _0xf34ax8['initListeners'] = function() {
        $(window)['on']('resize', $['proxy'](this['positionElements'], this));
        $('.earthIcon')['click']($['proxy'](this['earthIcon_click'], this));
        $('#btnCopyright')['click']($['proxy'](this['btnCopyright_click'], this));
        $('#btnHome')['click']($['proxy'](this['btnHome_click'], this))
    };
    _0xf34ax8['loadActivity'] = function() {
        $('#menuContent')['hide']();
        $('#activityContent')['show']();
        $('#webGLCanvasContainer')['show']();
        if (!this['earth3D']) {
            this['earth3D'] = new Earth3DInterface()
        }
        else {
            if (window['webgl']) {
                if (ThreeUtils['blnPauseRendering']) {
                    ThreeUtils['resumeRendering']()
                };
                if (this['earth3D']['Earth']['controls']) {
                    this['earth3D']['Earth']['controls']['enabled'] = true;
                    this['earth3D']['Earth']['controls']['reset']()
                };
                this['earth3D']['Earth']['earth']['planetMesh']['rotation']['y'] = 4
            };
            this['earth3D']['setState'](window['currentSkin'])
        }
    };
    _0xf34ax8['initLogoAndCopyright'] = function() {
        if (window['location']['host']['indexOf']('lumpty') != -1) {
            var _0xf34ax14 = 'http://www.lumpty.com';
            $('a.siteLink')['attr']('href', _0xf34ax14);
            $('a.siteLinkImage')['attr']('href', _0xf34ax14);
            $('.siteLink')['text']('www.lumpty.com');
            $('#cpLumpty')['show']();
            $('#cpeChalk')['hide']()
        }
    };
    _0xf34ax8['positionElements'] = function() {
        var _0xf34ax15 = $(window)['innerWidth'](),
            _0xf34ax16 = $(window)['innerHeight']();
        var _0xf34ax17 = (_0xf34ax15 >= _0xf34ax16),
            _0xf34ax18, _0xf34ax19;
        $('#databaseOverlay')['css']('left', '0px');
        $('#databaseOverlay')['css']('top', '0px');
        if (_0xf34ax17) {
            _0xf34ax19 = _0xf34ax16 * (4 / 3);
            _0xf34ax18 = _0xf34ax16;
            $('#databaseOverlay')['height'](_0xf34ax18);
            if (_0xf34ax19 > _0xf34ax15) {
                _0xf34ax19 = _0xf34ax15;
                _0xf34ax18 = _0xf34ax19 * (3 / 4);
                $('#databaseOverlay')['height'](_0xf34ax18);
                $('#databaseOverlay')['css']('top', (_0xf34ax16 / 2) - (_0xf34ax18 / 2))
            };
            $('#databaseOverlay')['width'](_0xf34ax19);
            $('#databaseOverlay')['css']('left', (_0xf34ax15 / 2) - (_0xf34ax19 / 2));
            $('#databaseOverlay')['css']('padding-top', (_0xf34ax18 / 20) + 'px')
        }
        else {
            _0xf34ax19 = _0xf34ax15;
            $('#databaseOverlay')['width'](_0xf34ax19);
            _0xf34ax18 = _0xf34ax19 * (3 / 4);
            $('#databaseOverlay')['height'](_0xf34ax18);
            $('#databaseOverlay')['css']('top', (_0xf34ax16 / 2) - (_0xf34ax18 / 2))
        };
        var _0xf34ax1a = _0xf34ax19 / 800;
        _0xf34ax1a = Math['round'](_0xf34ax1a * 100) / 100;
        $('html')['removeClass']('xsmall small medium');
        if (_0xf34ax1a < 0.4) {
            _0xf34ax1a = 0.4;
            $('html')['addClass']('xsmall small')
        }
        else {
            if (_0xf34ax1a < 0.7) {
                $('html')['addClass']('medium')
            }
            else {
                if (_0xf34ax1a > 1) {
                    _0xf34ax1a = 1
                }
            }
        };
        $('body')['css']('font-size', _0xf34ax1a + 'em')
    };
    _0xf34ax8['earthIcon_click'] = function(_0xf34ax1b) {
        window['currentSkin'] = _0xf34ax1b['currentTarget']['id'];
        this['loadActivity']()
    };
    _0xf34ax8['btnCopyright_click'] = function() {
        $('#menuContent')['css']('overflow', 'hidden');
        $('#divCopyright')['slideDown'](200, function() {
            $('#menuContent')['css']('overflow', 'visible')
        });
        $('#mapIcons')['slideUp'](200)
    };
    _0xf34ax8['btnHome_click'] = function() {
        $('#menuContent')['css']('overflow', 'hidden');
        $('#divCopyright')['slideUp'](200, function() {
            $('#menuContent')['css']('overflow', 'visible')
        });
        $('#mapIcons')['slideDown'](200)
    };
    _0xf34ax8['btnProceedAnyway_click'] = function() {
        $('#loadingDialogue')['show']();
        $('#smallScreenDialogue')['hide']();
        this['init']()
    };
    _0xf34ax8['loadSimplifiedVersion'] = function() {
        this['init']();
        $('#webGLError')['hide']()
    };
    _0xf34ax8['getInternetExplorerVersion'] = function() {
        var _0xf34ax1c = -1;
        if (navigator['appName'] == 'Microsoft Internet Explorer') {
            var _0xf34ax1d = navigator['userAgent'];
            var _0xf34ax1e = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
            if (_0xf34ax1e['exec'](_0xf34ax1d) != null) {
                _0xf34ax1c = parseFloat(RegExp.$1)
            }
        };
        return _0xf34ax1c
    };
    _0xf34ax8['declareObjectPolyfill'] = function() {
        if (typeof Object['create'] != 'function') {
            Object['create'] = (function() {
                function _0xf34ax1f() {}
                var _0xf34ax20 = Object['prototype']['hasOwnProperty'];
                return function(_0xf34ax21) {
                    if (typeof _0xf34ax21 != 'object') {
                        throw TypeError('Object prototype may only be an Object or null')
                    };
                    _0xf34ax1f['prototype'] = _0xf34ax21;
                    var _0xf34ax22 = new _0xf34ax1f();
                    _0xf34ax1f['prototype'] = null;
                    if (arguments['length'] > 1) {
                        var _0xf34ax23 = Object(arguments[1]);
                        for (var _0xf34ax24 in _0xf34ax23) {
                            if (_0xf34ax20['call'](_0xf34ax23, _0xf34ax24)) {
                                _0xf34ax22[_0xf34ax24] = _0xf34ax23[_0xf34ax24]
                            }
                        }
                    };
                    return _0xf34ax22
                }
            })()
        }
    };
    window['Earth3DMenu'] = new _0xf34ax7()
}());
(function() {
    var _0xf34ax25 = function() {
            this['init']()
        },
        _0xf34ax8 = _0xf34ax25['prototype'];
    _0xf34ax8['init'] = function() {
        if (window['webgl']) {
            ThreeUtils['init']();
            $('#loadingDialogue')['show']();
            ThreeUtils['loadManager']['onLoadQueueComplete'] = $['proxy'](this['loadCompleted'], this)
        };
        this['setupResource']()
    };
    _0xf34ax8['setupResource'] = function() {
        $('#title')['text']('Planet Earth');
        if (window['webgl']) {
            this['Earth'] = new EarthResource();
            this['Earth']['setup']()
        };
        new DOMButton($('#btnMainMenu img'), 'images/menuIcons/home_over.png');
        this['btnSettingsImage'] = new DOMButton($('#btnSettings img'), 'images/menuIcons/settings_over.png');
        this['btnKeyImage'] = new DOMButton($('#btnKey img'), 'images/menuIcons/key_over.png');
        this['btnSettingsImage']['setNormalImage']('images/menuIcons/settings_active.png');
        this['btnKeyImage']['setNormalImage']('images/menuIcons/key_active.png');
        this['initListeners']();
        this['displayFullscreenButton']();
        this['showKey'](false);
        window['StateTextureMapper'] = {
            "\x70\x68\x6F\x74\x6F\x72\x65\x61\x6C\x69\x73\x74\x69\x63": 'land_ocean_ice_cloud_2048.jpg',
            "\x74\x65\x72\x72\x61\x69\x6E": 'earth_terrain_2k.jpg',
            "\x74\x65\x63\x74\x6F\x6E\x69\x63\x73": 'earth_tectonics.jpg',
            "\x74\x65\x63\x74\x6F\x6E\x69\x63\x73\x5F\x66\x61\x6C\x6C\x62\x61\x63\x6B": 'earth_tectonics_fallback.jpg',
            "\x6E\x69\x67\x68\x74": 'earth_night_2k.jpg',
            "\x70\x6F\x6C\x69\x74\x69\x63\x61\x6C": 'earth_political_2k.jpg',
            "\x61\x76\x65\x72\x61\x67\x65\x4C\x61\x6E\x64\x54\x65\x6D\x70\x65\x72\x61\x74\x75\x72\x65": 'earth_AverageLandTemp.jpg',
            "\x63\x6C\x69\x6D\x61\x74\x65\x5A\x6F\x6E\x65\x73": 'earth_climate.jpg',
            "\x70\x72\x65\x63\x69\x70\x69\x74\x61\x74\x69\x6F\x6E": 'earth_average-yearly-precipitation.png',
            "\x65\x6E\x65\x72\x67\x79\x43\x6F\x6E\x73\x75\x6D\x70\x74\x69\x6F\x6E": 'earth_electricity-consumption.png',
            "\x47\x49\x4E\x49": 'earth_gini-index.png',
            "\x47\x44\x50": 'earth_gdp-per-capita-ppp.png',
            "\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E\x44\x65\x6E\x73\x69\x74\x79": 'earth_population-density.jpg',
            "\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E\x43\x61\x72\x74\x6F\x67\x72\x61\x6D": 'earth_population.jpg',
            "\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E\x47\x72\x6F\x77\x74\x68": 'earth_population-growth.png',
            "\x66\x65\x72\x74\x69\x6C\x69\x74\x79\x52\x61\x74\x65": 'earth_total-fertility-rate.png'
        };
        if (!window['webgl']) {
            this['setUpFallback']()
        }
    };
    _0xf34ax8['setUpFallback'] = function() {
        $('#btnSettings')['hide']();
        $('#optionsBox')['hide']();
        $('#fallbackImage')['load'](function() {
            $('#loadingDialogue')['hide']()
        });
        $('#key')['fadeTo'](0, 0.8);
        $('#key')['css']('top', '3em');
        this['loadCompleted']()
    };
    _0xf34ax8['loadCompleted'] = function() {
        $('#loadingDialogue')['hide']();
        if (window['currentSkin']) {
            this['setState'](window['currentSkin'])
        };
        if (window['webgl']) {
            $('#instructionsDialogue')['show']();
            ThreeUtils['render']()
        }
    };
    _0xf34ax8['displayFullscreenButton'] = function() {
        var _0xf34ax26 = document['getElementById']('activityContent');
        var _0xf34ax27 = _0xf34ax26['requestFullscreen'] || _0xf34ax26['msRequestFullscreen'] || _0xf34ax26['mozRequestFullScreen'] || _0xf34ax26['webkitRequestFullscreen'];
        if (_0xf34ax27) {
            $('#fullScreenOption')['show']();
            $('#btnGoFullscreen')['click'](function() {
                var _0xf34ax26 = document['getElementById']('activityContent');
                if (!document['fullscreenElement'] && !document['mozFullScreenElement'] && !document['webkitFullscreenElement'] && !document['msFullscreenElement']) {
                    if (_0xf34ax26['requestFullscreen']) {
                        _0xf34ax26['requestFullscreen']()
                    }
                    else {
                        if (_0xf34ax26['msRequestFullscreen']) {
                            _0xf34ax26['msRequestFullscreen']()
                        }
                        else {
                            if (_0xf34ax26['mozRequestFullScreen']) {
                                _0xf34ax26['mozRequestFullScreen']()
                            }
                            else {
                                if (_0xf34ax26['webkitRequestFullscreen']) {
                                    _0xf34ax26['webkitRequestFullscreen'](Element.ALLOW_KEYBOARD_INPUT)
                                }
                            }
                        }
                    }
                }
                else {
                    if (_0xf34ax26['exitFullscreen']) {
                        _0xf34ax26['exitFullscreen']()
                    }
                    else {
                        if (_0xf34ax26['msExitFullscreen']) {
                            _0xf34ax26['msExitFullscreen']()
                        }
                        else {
                            if (_0xf34ax26['mozCancelFullScreen']) {
                                _0xf34ax26['mozCancelFullScreen']()
                            }
                            else {
                                if (_0xf34ax26['webkitExitFullscreen']) {
                                    _0xf34ax26['webkitExitFullscreen']()
                                }
                            }
                        }
                    }
                }
            })
        }
    };
    _0xf34ax8['initListeners'] = function() {
        $('#chkShowTilt')['prop']('checked', false);
        $('#chkShowTilt')['change']($['proxy'](this['chkShowTilt_changed'], this));
        $('#chkRotateEarth')['prop']('checked', true);
        $('#chkRotateEarth')['change']($['proxy'](this['chkRotateEarth_changed'], this));
        $('#instructionsDialogue')['click']($['proxy'](this['btnGotIt_click'], this));
        if (('ontouchstart' in window) || window['DocumentTouch'] && document instanceof DocumentTouch) {
            $('#mouseInstructions')['hide']();
            $('#touchInstructions')['show']()
        }
        else {
            $('#mouseInstructions')['show']();
            $('#touchInstructions')['hide']()
        };
        $('#btnMainMenu')['click']($['proxy'](this['btnMainMenu_click'], this));
        $('#btnSettings')['click']($['proxy'](this['btnSettings_click'], this));
        $('#btnKey')['click']($['proxy'](this['btnKey_click'], this));
        $('#lnkPhotorealistic')['click']($['proxy'](this['lnkPhotorealistic_click'], this));
        $('#lnkTerrain')['click']($['proxy'](this['lnkTerrain_click'], this));
        $('#lnkTectonicBoundaries')['click']($['proxy'](this['lnkTectonicBoundaries_click'], this));
        $('#lnkNight')['click']($['proxy'](this['lnkNight_click'], this));
        $('#lnkPolitical')['click']($['proxy'](this['lnkPolitical_click'], this));
        $('#lnkAverageLandTemp')['click']($['proxy'](this['lnkAverageLandTemp_click'], this));
        $('#lnkClimateZones')['click']($['proxy'](this['lnkClimateZones_click'], this));
        $('#lnkPrecipitation')['click']($['proxy'](this['lnkPrecipitation_click'], this));
        $('#lnkEnergyConsumption')['click']($['proxy'](this['lnkEnergyConsumption_click'], this));
        $('#lnkGINI')['click']($['proxy'](this['lnkGINI_click'], this));
        $('#lnkGDP')['click']($['proxy'](this['lnkGDP_click'], this));
        $('#lnkPopulationCartogram')['click']($['proxy'](this['lnkPopulationCartogram_click'], this));
        $('#lnkPopulationDensity')['click']($['proxy'](this['lnkPopulationDensity_click'], this));
        $('#lnkPopulationGrowth')['click']($['proxy'](this['lnkPopulationGrowth_click'], this));
        $('#lnkFertilityRate')['click']($['proxy'](this['lnkFertilityRate_click'], this));
        $('#optionsBox, #menu, .activityIconBtn')['bind']('mousedown touchstart touchmove', function(_0xf34ax1b) {
            _0xf34ax1b['stopPropagation']();
            _0xf34ax1b['stopImmediatePropagation']()
        });
        $('#menu')['fadeTo'](200, 0.6);
        $('#menu h2')['bind']('click', $['proxy'](this['menu_click'], this))
    };
    _0xf34ax8['btnMainMenu_click'] = function() {
        if (window['webgl']) {
            ThreeUtils['pauseRendering']();
            this['Earth']['controls']['enabled'] = false;
            $('#webGLCanvasContainer')['hide']()
        };
        $('#menuContent')['show']();
        $('#activityContent')['hide']()
    };
    _0xf34ax8['btnSettings_click'] = function() {
        if (!_0xf34ax28) {
            this['toggleSubMenu']()
        };
        $('#optionsBox')['toggle']();
        if ($('#optionsBox')['css']('display') == 'none') {
            this['btnSettingsImage']['setNormalImage']('images/menuIcons/settings.png')
        }
        else {
            this['btnSettingsImage']['setNormalImage']('images/menuIcons/settings_active.png')
        }
    };
    _0xf34ax8['btnKey_click'] = function() {
        if (!_0xf34ax28) {
            this['toggleSubMenu']()
        };
        $('#key')['toggle']();
        if ($('#key')['css']('display') == 'none') {
            this['btnKeyImage']['setNormalImage']('images/menuIcons/key.png')
        }
        else {
            this['btnKeyImage']['setNormalImage']('images/menuIcons/key_active.png')
        }
    };
    var _0xf34ax28 = true;
    _0xf34ax8['toggleSubMenu'] = function() {
        $(document)['unbind']('mousedown.subMenuHide touchstart.subMenuHide');
        if (_0xf34ax28) {
            this['slideSubMenu'](true)
        }
        else {
            this['slideSubMenu'](false)
        }
    };
    _0xf34ax8['menu_click'] = function() {
        this['toggleSubMenu']()
    };
    _0xf34ax8['document_mouseDown'] = function() {
        this['toggleSubMenu']()
    };
    var _0xf34ax29 = false;
    _0xf34ax8['slideSubMenu'] = function(_0xf34ax2a) {
        if (!_0xf34ax29) {
            _0xf34ax29 = true;
            if (_0xf34ax2a) {
                $('#menuListDiv')['slideDown'](200, function() {
                    _0xf34ax29 = false
                });
                $('#menu')['fadeTo'](200, 0.8);
                $(document)['bind']('mousedown.subMenuHide touchstart.subMenuHide', $['proxy'](this['document_mouseDown'], this))
            }
            else {
                $('#menuListDiv')['slideUp'](200, function() {
                    _0xf34ax29 = false
                });
                $('#menu')['fadeTo'](200, 0.6)
            };
            _0xf34ax28 = !_0xf34ax28
        }
    };
    _0xf34ax8['lnkNight_click'] = function() {
        this['setState']('night', true)
    };
    _0xf34ax8['lnkPhotorealistic_click'] = function() {
        this['setState']('photorealistic', true)
    };
    _0xf34ax8['lnkTerrain_click'] = function() {
        this['setState']('terrain', true)
    };
    _0xf34ax8['lnkPolitical_click'] = function() {
        this['setState']('political', true)
    };
    _0xf34ax8['lnkAverageLandTemp_click'] = function() {
        this['setState']('averageLandTemperature', true)
    };
    _0xf34ax8['lnkClimateZones_click'] = function() {
        this['setState']('climateZones', true)
    };
    _0xf34ax8['lnkPopulationCartogram_click'] = function() {
        this['setState']('populationCartogram', true)
    };
    _0xf34ax8['lnkPopulationDensity_click'] = function() {
        this['setState']('populationDensity', true)
    };
    _0xf34ax8['lnkPopulationGrowth_click'] = function() {
        this['setState']('populationGrowth', true)
    };
    _0xf34ax8['lnkEnergyConsumption_click'] = function() {
        this['setState']('energyConsumption', true)
    };
    _0xf34ax8['lnkGDP_click'] = function() {
        this['setState']('GDP', true)
    };
    _0xf34ax8['lnkPrecipitation_click'] = function() {
        this['setState']('precipitation', true)
    };
    _0xf34ax8['lnkTectonicBoundaries_click'] = function() {
        this['setState']('tectonics', true)
    };
    _0xf34ax8['lnkGINI_click'] = function() {
        this['setState']('GINI', true)
    };
    _0xf34ax8['lnkFertilityRate_click'] = function() {
        this['setState']('fertilityRate', true)
    };
    _0xf34ax8['setState'] = function(_0xf34ax2b, _0xf34ax2c) {
        if (typeof _0xf34ax2c === 'undefined') {
            _0xf34ax2c = false
        };
        if (window['webgl'] && !this['Earth']['blnSetupComplete']) {
            return
        };
        if (typeof _0xf34ax2b === 'string') {
            if (_0xf34ax2c) {
                this['toggleSubMenu']()
            };
            switch (_0xf34ax2b) {
                case 'energyConsumption':
                    if (window['webgl']) {
                        this['Earth']['showEnergyConsumption']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Energy consumption');
                    this['showKey'](true, 'energyConsumptionKey');
                    break;
                case 'GDP':
                    if (window['webgl']) {
                        this['Earth']['showGDP']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('GDP per capita');
                    this['showKey'](true, 'GDPKey');
                    break;
                case 'populationCartogram':
                    if (window['webgl']) {
                        this['Earth']['showPopulationCartogram']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Population cartogram');
                    this['showKey'](true, 'populationCartogramKey');
                    break;
                case 'populationDensity':
                    if (window['webgl']) {
                        this['Earth']['showPopulationDensity']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Population density');
                    this['showKey'](true, 'populationDensityKey');
                    break;
                case 'populationGrowth':
                    if (window['webgl']) {
                        this['Earth']['showPopulationGrowth']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Population growth');
                    this['showKey'](true, 'populationGrowthKey');
                    break;
                case 'climateZones':
                    if (window['webgl']) {
                        this['Earth']['showClimateZones']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('World Climate Zones');
                    this['showKey'](true, 'climateZonesKey');
                    break;
                case 'averageLandTemperature':
                    if (window['webgl']) {
                        this['Earth']['showAverageLandTemp']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Average temperature');
                    this['showKey'](true, 'landTemperatureKey');
                    break;
                case 'political':
                    if (window['webgl']) {
                        this['Earth']['showPolitical']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Political borders');
                    this['showKey'](false);
                    break;
                case 'terrain':
                    if (window['webgl']) {
                        this['Earth']['showTerrain']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Terrain');
                    this['showKey'](false);
                    break;
                case 'tectonics':
                    if (window['webgl']) {
                        this['Earth']['showTectonics']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Tectonic plates');
                    this['showKey'](false);
                    break;
                case 'photorealistic':
                    if (window['webgl']) {
                        this['Earth']['showPhotorealistic']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Photorealistic');
                    this['showKey'](false);
                    break;
                case 'night':
                    if (window['webgl']) {
                        this['Earth']['showEarthByNight']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Earth by night');
                    this['showKey'](false);
                    break;
                case 'precipitation':
                    if (window['webgl']) {
                        this['Earth']['showPrecipitation']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Yearly precipitation');
                    this['showKey'](true, 'precipitationKey');
                    break;
                case 'GINI':
                    if (window['webgl']) {
                        this['Earth']['showGINI']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('GINI index');
                    this['showKey'](true, 'GINIKey');
                    break;
                case 'fertilityRate':
                    if (window['webgl']) {
                        this['Earth']['showFertilityRate']()
                    }
                    else {
                        this['showFallback'](_0xf34ax2b)
                    };
                    $('#title')['text']('Fertility Rate');
                    this['showKey'](true, 'fertilityRateKey');
                    break
            }
        }
    };
    _0xf34ax8['showFallback'] = function(_0xf34ax2d) {
        $('#loadingDialogue')['show']();
        var _0xf34ax2e = 'images/textureMaps/';
        if (window['StateTextureMapper'][_0xf34ax2d + '_fallback']) {
            _0xf34ax2e += window['StateTextureMapper'][_0xf34ax2d + '_fallback']
        }
        else {
            _0xf34ax2e += window['StateTextureMapper'][_0xf34ax2d]
        };
        $('#fallbackImage')['attr']('src', _0xf34ax2e);
        $('#fallbackDiv')['show']()
    };
    _0xf34ax8['showKey'] = function(_0xf34ax2a, _0xf34ax2f) {
        if (_0xf34ax2a && typeof _0xf34ax2f === 'string') {
            $('.keyList')['hide']();
            if (_0xf34ax2f['length'] > 0) {
                $('#' + _0xf34ax2f)['show']()
            };
            $('#key')['show']();
            $('#btnKey')['show']();
            $('#ckhShowKey')['prop']('checked', true);
            this['btnKeyImage']['setNormalImage']('images/menuIcons/key_active.png')
        }
        else {
            $('.keyList')['hide']();
            $('#btnKey')['hide']()
        }
    };
    _0xf34ax8['chkShowTilt_changed'] = function() {
        if (!_0xf34ax28) {
            this['toggleSubMenu']()
        };
        if (this['Earth']['blnSetupComplete']) {
            this['Earth']['controls']['reset']();
            this['Earth']['earth']['blnShowAxialTilt'] = $('#chkShowTilt')['prop']('checked')
        }
    };
    _0xf34ax8['chkRotateEarth_changed'] = function() {
        if (!_0xf34ax28) {
            this['toggleSubMenu']()
        };
        if (this['Earth']['blnSetupComplete']) {
            this['Earth']['blnRotatePlanet'] = $('#chkRotateEarth')['prop']('checked')
        }
    };
    _0xf34ax8['btnGotIt_click'] = function() {
        if (this['Earth']['blnSetupComplete']) {
            this['Earth']['controls']['enabled'] = true
        };
        $('#instructionsDialogue')['remove']()
    };
    window['Earth3DInterface'] = _0xf34ax25
}());
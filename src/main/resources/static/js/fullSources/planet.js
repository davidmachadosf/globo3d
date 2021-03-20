(function() {
    'use strict';
    if (!window['webgl']) {
        return
    };
    var _0x6e75x1 = function(_0x6e75x3, _0x6e75x4, _0x6e75x5, _0x6e75x6) {
            THREE['Mesh']['apply'](this);
            this['planetMesh'] = new THREE.Mesh();
            this['defaultMaterialMap'] = ThreeUtils['loadManager']['loadTexture'](_0x6e75x4);
            this['planetMesh']['geometry'] = new THREE.SphereGeometry(_0x6e75x3, 50, 50);
            this['planetMesh']['material'] = new THREE.MeshPhongMaterial({
                map: this['defaultMaterialMap']
            });
            if (typeof _0x6e75x5 !== 'undefined') {
                this['defaultBumpMap'] = ThreeUtils['loadManager']['loadTexture'](_0x6e75x5);
                this['planetMesh']['material']['bumpMap'] = this['defaultBumpMap']
            };
            if (typeof _0x6e75x6 !== 'undefined') {
                _0x6e75x6['x'] = _0x6e75x6['x'] || 0;
                _0x6e75x6['y'] = _0x6e75x6['y'] || 0;
                _0x6e75x6['z'] = _0x6e75x6['z'] || 0;
                this['planetMesh']['geometry']['applyMatrix'](new THREE.Matrix4()['makeTranslation'](_0x6e75x6['x'], _0x6e75x6['y'], _0x6e75x6['z']))
            };
            this['add'](this['planetMesh']);
            this['_blnShowAxialTilt'] = false;
            this['axialTiltAngle'] = 0
        },
        _0x6e75x2 = _0x6e75x1['prototype'] = Object['create'](THREE['Mesh']['prototype']);
    _0x6e75x2['constructor'] = _0x6e75x1;
    _0x6e75x2['rotatePlanet'] = function(_0x6e75x7) {
        this['planetMesh']['rotation']['y'] += _0x6e75x7
    };
    _0x6e75x2['showAxisMarker'] = function(_0x6e75x8) {
        if (_0x6e75x8) {
            if (!this['axialTiltMarker']) {
                var _0x6e75x9 = new THREE.Geometry();
                _0x6e75x9['vertices']['push'](new THREE.Vector3(0, -10, 0), new THREE.Vector3(0, 10, 0));
                var _0x6e75xa = new THREE.LineBasicMaterial({
                    color: 0xff0000
                });
                this['axialTiltMarker'] = new THREE.Line(_0x6e75x9, _0x6e75xa, THREE.LinePieces)
            };
            this['add'](this['axialTiltMarker'])
        }
        else {
            if (this['axialTiltMarker']) {
                this['remove'](this['axialTiltMarker'])
            }
        }
    };
    if (Object['defineProperty']) {
        Object['defineProperty'](_0x6e75x2, 'blnShowAxialTilt', {
            get: function() {
                return this['_blnShowAxialTilt']
            },
            set: function(_0x6e75xb) {
                if (this['_blnShowAxialTilt'] && !_0x6e75xb) {
                    if (!isNaN(this['axialTiltAngle'])) {
                        this['rotation']['z'] = 0
                    }
                };
                this['_blnShowAxialTilt'] = _0x6e75xb;
                if (this['_blnShowAxialTilt']) {
                    if (!isNaN(this['axialTiltAngle'])) {
                        this['rotation']['z'] = -((this['axialTiltAngle'] * Math['PI']) / 180)
                    }
                };
                this['showAxisMarker'](this._blnShowAxialTilt)
            }
        })
    };
    window['Planet'] = _0x6e75x1
}());
(function() {
    'use strict';
    if (!window['webgl']) {
        return
    };
    var _0x6e75xc = function() {
            Planet['apply'](this, [1, 'images/textureMaps/land_ocean_ice_cloud_2048.jpg', 'images/textureMaps/earth_bump.jpg']);
            this['planetMesh']['material']['bumpScale'] = 0.05;
            this['planetMesh']['material']['specularMap'] = ThreeUtils['loadManager']['loadTexture']('images/textureMaps/earthspec1k.jpg');
            this['planetMesh']['material']['specular'] = new THREE.Color(0x222222);
            this['axialTiltAngle'] = 23.4;
            this['planetMesh']['rotation']['y'] = 4
        },
        _0x6e75x2 = _0x6e75xc['prototype'] = Object['create'](Planet['prototype']);
    _0x6e75x2['constructor'] = _0x6e75xc;
    window['Earth'] = _0x6e75xc;
    var _0x6e75xd = function() {
            Planet['apply'](this, [(3475 / 12742), 'images/textureMaps/moonmap2k.jpg', 'images/textureMaps/moonbump2k.jpg', {
                x: 38
            }]);
            this['planetMesh']['material']['bumpScale'] = 0.002;
            this['axialTiltAngle'] = 5;
            this['orbitDuration'] = 27
        },
        _0x6e75x2 = _0x6e75xd['prototype'] = Object['create'](Planet['prototype']);
    _0x6e75x2['constructor'] = _0x6e75xd;
    window['Moon'] = _0x6e75xd;
    var _0x6e75xe = function() {
            THREE['Mesh']['apply'](this, arguments);
            this['geometry'] = new THREE.SphereGeometry(50, 50, 50);
            var _0x6e75xf = /(iPad|iPhone|iPod)/g ['test'](navigator['userAgent']);
            var _0x6e75x10 = (_0x6e75xf) ? 'images/textureMaps/starField_small.jpg' : 'images/textureMaps/starField.jpg';
            this['material'] = new THREE.MeshBasicMaterial({
                map: ThreeUtils['loadManager']['loadTexture'](_0x6e75x10)
            });
            this['material']['side'] = THREE['BackSide']
        },
        _0x6e75x2 = _0x6e75xe['prototype'] = Object['create'](THREE['Mesh']['prototype']);
    _0x6e75x2['constructor'] = _0x6e75xe;
    window['StarField'] = _0x6e75xe
}());
(function() {
    'use strict';
    var _0x6e75x11 = function() {
            window['ThreeSceneManager'] = this
        },
        _0x6e75x2 = _0x6e75x11['prototype'];
    _0x6e75x2['constructor'] = _0x6e75x11;
    _0x6e75x2['TIME_CONSTANT'] = 7000;
    _0x6e75x2['blnRotatePlanet'] = true;
    _0x6e75x2['setup'] = function() {
        if (typeof ThreeUtils === 'undefined') {
            console['error']('ThreeUtils.js is a dependency');
            return
        };
        this['scene'] = new THREE.Scene();
        this['camera'] = new THREE.PerspectiveCamera(25, window['innerWidth'] / window['innerHeight'], 0.1, 1000);
        this['camera']['position']['z'] = 6;
        this['renderer'] = new THREE.WebGLRenderer();
        this['renderer']['setSize'](window['innerWidth'], window['innerHeight']);
        document['getElementById']('webGLCanvasContainer')['appendChild'](this['renderer']['domElement']);
        this['initPlanets']();
        this['initLighting']();
        this['controls'] = new THREE.TrackballControls(this['camera'], document);
        this['controls']['maxDistance'] = window['ThreeProperties']['maxZoom'] || 80;
        this['controls']['minDistance'] = window['ThreeProperties']['minZoom'] || 1.5;
        this['controls']['noPan'] = true;
        this['controls']['enabled'] = false;
        this['blnSetupComplete'] = true;
    };
    _0x6e75x2['initLighting'] = function() {
        this['directionalLight'] = new THREE.DirectionalLight(0xffffff, 1), this['ambientLight'] = new THREE.AmbientLight(0x707070);
        this['directionalLight']['position']['set'](-200, 0, 200);
        this['scene']['add'](this['directionalLight']);
        this['scene']['add'](this['ambientLight']);
    };
    _0x6e75x2['initPlanets'] = function() {
        this['initEarth']();
        this['scene']['add'](new StarField());
    };
    _0x6e75x2['initEarth'] = function() {
        this['earth'] = new Earth();
        this['scene']['add'](this['earth']);
    };
    _0x6e75x2['renderScene'] = function() {
        if (this['blnRotatePlanet']) {
            this['earth']['rotatePlanet'](24 / this['TIME_CONSTANT'])
        };
        this['renderer']['render'](this['scene'], this['camera']);
        this['controls']['update']()
    };
    window['SolarSystem'] = _0x6e75x11
}());
(function() {
    'use strict';
    var _0x6e75x12 = function() {
            SolarSystem['apply'](this)
        },
        _0x6e75x2 = _0x6e75x12['prototype'] = Object['create'](SolarSystem['prototype']);
    _0x6e75x2['strState'] = '';
    _0x6e75x2['SolarSystem_setup'] = _0x6e75x2['setup'];
    _0x6e75x2['setup'] = function() {
        this.SolarSystem_setup();
        if (!this['photorealisticMap']) {
            this['photorealisticMap'] = this['earth']['planetMesh']['material']['map']
        }
    };
    _0x6e75x2['showPhotorealistic'] = function() {
        if (this['strState'] == 'photorealistic') {
            return
        };
        this['strState'] = 'photorealistic';
        this['reset']();
        if (!this['photorealisticMap']) {
            this['photorealisticMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['photorealisticMap']
    };
    _0x6e75x2['showTerrain'] = function() {
        if (this['strState'] == 'terrain') {
            return
        };
        this['strState'] = 'terrain';
        this['reset']();
        if (!this['terrainMap']) {
            this['terrainMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['terrainMap'];
        this['earth']['planetMesh']['material']['bumpScale'] = 0.1
    };
    _0x6e75x2['showTectonics'] = function() {
        if (this['strState'] == 'tectonics') {
            return
        };
        this['strState'] = 'tectonics';
        this['reset']();
        if (!this['tectonicsMap']) {
            this['tectonicsMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['tectonicsMap'];
        this['earth']['planetMesh']['material']['bumpMap'] = ThreeUtils['loadManager']['loadTexture']('images/textureMaps/earth_tectonics_bump.png');
        this['earth']['planetMesh']['material']['bumpScale'] = 0.05
    };
    _0x6e75x2['showPolitical'] = function() {
        if (this['strState'] == 'political') {
            return
        };
        this['strState'] = 'political';
        this['reset']();
        if (!this['politicalMap']) {
            this['politicalMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['politicalMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0x333333);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0.3
    };
    _0x6e75x2['showEarthByNight'] = function() {
        if (this['strState'] == 'night') {
            return
        };
        this['strState'] = 'night';
        this['reset']();
        if (!this['nightMap']) {
            this['nightMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['nightMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0xdddddd);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0
    };
    _0x6e75x2['showAverageLandTemp'] = function() {
        if (this['strState'] == 'averageLandTemperature') {
            return
        };
        this['strState'] = 'averageLandTemperature';
        this['reset']();
        if (!this['averageLandTempMap']) {
            this['averageLandTempMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['averageLandTempMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0xaaaaaa);
        this['scene']['add'](this['customAmbientLight'])
    };
    _0x6e75x2['showClimateZones'] = function() {
        if (this['strState'] == 'climateZones') {
            return
        };
        this['strState'] = 'climateZones';
        this['reset']();
        if (!this['climateZonesMap']) {
            this['climateZonesMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['climateZonesMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0x555555);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0.3
    };
    _0x6e75x2['showPopulationCartogram'] = function() {
        if (this['strState'] == 'populationCartogram') {
            return
        };
        this['strState'] = 'populationCartogram';
        this['reset']();
        if (!this['populationCartogram']) {
            this['populationCartogram'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['populationCartogram'];
        this['customAmbientLight'] = new THREE.AmbientLight(0x888888);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0;
        this['earth']['planetMesh']['material']['bumpScale'] = 0
    };
    _0x6e75x2['showEnergyConsumption'] = function() {
        if (this['strState'] == 'energyConsumption') {
            return
        };
        this['strState'] = 'energyConsumption';
        this['reset']();
        if (!this['energyConsumptionMap']) {
            this['energyConsumptionMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['energyConsumptionMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0x333333);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0.4;
        this['earth']['planetMesh']['material']['bumpScale'] = 0.02
    };
    _0x6e75x2['showGDP'] = function() {
        if (this['strState'] == 'GDP') {
            return
        };
        this['strState'] = 'GDP';
        this['reset']();
        if (!this['GDPMap']) {
            this['GDPMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['GDPMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0x333333);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0.4;
        this['earth']['planetMesh']['material']['bumpScale'] = 0.02
    };
    _0x6e75x2['showPopulationDensity'] = function() {
        if (this['strState'] == 'populationDensity') {
            return
        };
        this['strState'] = 'populationDensity';
        this['reset']();
        if (!this['populationDensityMap']) {
            this['populationDensityMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['populationDensityMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0x444444);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0.3
    };
    _0x6e75x2['showPopulationGrowth'] = function() {
        if (this['strState'] == 'populationGrowth') {
            return
        };
        this['strState'] = 'populationGrowth';
        this['reset']();
        if (!this['populationGrowthMap']) {
            this['populationGrowthMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['populationGrowthMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0x444444);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0.3
    };
    _0x6e75x2['showFertilityRate'] = function() {
        if (this['strState'] == 'fertilityRate') {
            return
        };
        this['strState'] = 'fertilityRate';
        this['reset']();
        if (!this['fertilityRateMap']) {
            this['fertilityRateMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['fertilityRateMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0x444444);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0.3
    };
    _0x6e75x2['showPrecipitation'] = function() {
        if (this['strState'] == 'precipitation') {
            return
        };
        this['strState'] = 'precipitation';
        this['reset']();
        if (!this['precipitationMap']) {
            this['precipitationMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['precipitationMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0x444444);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0.3
    };
    _0x6e75x2['showGINI'] = function() {
        if (this['strState'] == 'GINI') {
            return
        };
        this['strState'] = 'GINI';
        this['reset']();
        if (!this['GINIMap']) {
            this['GINIMap'] = this['loadTexture']('images/textureMaps/' + window['StateTextureMapper'][this['strState']])
        };
        this['earth']['planetMesh']['material']['map'] = this['GINIMap'];
        this['customAmbientLight'] = new THREE.AmbientLight(0x444444);
        this['scene']['add'](this['customAmbientLight']);
        this['directionalLight']['intensity'] = 0.3
    };
    _0x6e75x2['loadTexture'] = function(_0x6e75x13) {
        $('#loadingDialogue')['show']();
        return ThreeUtils['loadManager']['loadTexture'](_0x6e75x13, undefined, function() {
            $('#loadingDialogue')['hide']()
        })
    };
    _0x6e75x2['reset'] = function() {
        if (this['customAmbientLight']) {
            this['scene']['remove'](this['customAmbientLight']);
            this['customAmbientLight'] = null
        };
        this['directionalLight']['intensity'] = 1;
        if (this['earth']['planetMesh']['material']['bumpMap'] != this['earth']['defaultBumpMap']) {
            this['earth']['planetMesh']['material']['bumpMap'] = this['earth']['defaultBumpMap']
        };
        this['earth']['planetMesh']['material']['bumpScale'] = 0.05
    };
    window['EarthResource'] = _0x6e75x12
}());